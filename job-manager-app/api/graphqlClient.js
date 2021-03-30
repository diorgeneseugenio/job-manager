import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:8700/graphql",
});

export default client;
