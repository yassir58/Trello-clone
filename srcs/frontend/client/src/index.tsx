import React from "react";
import {createRoot} from "react-dom/client"
import App from "./app";

const Root = createRoot (document.getElementById ('root') as HTMLElement)

Root.render (<App/>)
