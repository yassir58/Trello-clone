import React from "react";
import {createRoot} from "react-dom/client"
import App from "./app";
import { ChakraProvider } from "@chakra-ui/react";

const Root = createRoot (document.getElementById ('root') as HTMLElement)

Root.render (
<ChakraProvider>
    <App />
</ChakraProvider>
)
