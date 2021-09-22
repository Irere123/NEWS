import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const __prod__ = process.env.NEXT_PUBLIC_NODE_ENV === "production";

export const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: !__prod__
      ? "http://localhost:5050/graphql"
      : "https://api-news-graphql.herokuapp.com/graphql",
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
