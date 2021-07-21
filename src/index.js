import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LinkContextProvider } from "./Context/link-provider";
import { FruitDataProvider } from "./components/FruitCard/fruit-context";

ReactDOM.render(
    <React.StrictMode>
        <FruitDataProvider>
            <LinkContextProvider>
                <App />
            </LinkContextProvider>
        </FruitDataProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
