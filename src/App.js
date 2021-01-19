import React from "react";
import Home from "./Pages/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(), // what are other options to consider for larger scaled applications.
    uri: "https://graphql-weather-api.herokuapp.com/"
  });

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
