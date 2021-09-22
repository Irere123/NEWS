import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "http://localhost:5050/graphql",
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
