import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LinkContextProvider } from "./Context/link-provider";

ReactDOM.render(
    <React.StrictMode>
        <LinkContextProvider>
            <App />
        </LinkContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
