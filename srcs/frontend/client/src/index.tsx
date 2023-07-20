import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme/theme";

const Root = createRoot(document.getElementById("root") as HTMLElement);

Root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
