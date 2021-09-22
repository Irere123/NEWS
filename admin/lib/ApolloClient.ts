import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const __prod__ = process.env.NODE_ENV === "production";

export const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: !__prod__ ? "http://localhost:5050/graphql" : process.env.API_URL,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
