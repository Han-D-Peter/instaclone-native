import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://tiny-shrimp-4.loca.lt/graphql",
  cache: new InMemoryCache(),
});

export default client;
