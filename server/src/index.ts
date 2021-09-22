import "reflect-metadata";
import "dotenv-safe/config";
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
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
  });

  const app = express();

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      origin: !__prod__ ? "http://localhost:3000" : "*",
      credentials: true,
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: "_qid",
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
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
    plugins: [
      __prod__
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
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
