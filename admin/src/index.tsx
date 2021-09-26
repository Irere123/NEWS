import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";

import Routes from "./Routes";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "http://localhost:5050/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);
