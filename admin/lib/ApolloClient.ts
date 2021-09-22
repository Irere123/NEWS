import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "https://api-news-graphql.herokuapp.com/graphql",
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
