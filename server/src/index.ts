import "reflect-metadata";
import "dotenv-safe/config";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import express from "express";
import { createConnection } from "typeorm";
import { join } from "path";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import session from "express-session";
import connectRedis from "connect-redis";

import { __prod__ } from "./constants";
import { redis } from "./redis";
import { UserResolver } from "./resolvers/user/user";
import { ArticleResolver } from "./resolvers/article/article";
import { AdsResolver } from "./resolvers/ads/ads";
import { MessagesResolver } from "./resolvers/message/messages";
import { HelloResolver } from "./resolvers/hello";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: !__prod__ ? "news" : process.env.DB_NAME,
    host: !__prod__ ? "localhost" : process.env.DB_HOST,
    username: !__prod__ ? "postgres" : process.env.DB_USERNAME,
    password: !__prod__ ? "postgres" : process.env.DB_PASSWORD,
    logging: !__prod__,
    synchronize: true,
    entities: [join(__dirname, "./entity/**/*.*")],
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });

  const app = express();
  app.set("trust proxy", 1);

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      origin: !__prod__
        ? "http://localhost:3000"
        : ["https://newsadmin.vercel.app", "https://news-irere123.vercel.app/"],
      credentials: true,
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
        disableTouch: true,
      }),
      name: "_qid",
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: __prod__,
        maxAge: 1000 * 60 * 60 * 24 * 365 * 11, // 11 years
      },
    }) as any
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        UserResolver,
        ArticleResolver,
        AdsResolver,
        MessagesResolver,
        HelloResolver,
      ],
      validate: false,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    context: ({ req, res }: any) => ({ req, res }),
    introspection: true,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });

  const PORT = process.env.PORT || 5050;

  app.listen(PORT, () => {
    console.log(
      `Server started on http://localhost:5050${apolloServer.graphqlPath}`
    );
  });
};

main();
