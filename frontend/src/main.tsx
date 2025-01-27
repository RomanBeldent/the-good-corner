import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from "./App.tsx";
import { API_URL } from "./config";
import "./index.css";

console.log("API URL: ", API_URL);

const client = new ApolloClient({
  uri: "/api",
  cache: new InMemoryCache()
});

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode >
  </ApolloProvider>
);
