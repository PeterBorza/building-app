import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { LinkContextProvider } from "./Context/link-provider";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <LinkContextProvider>
                <Router>
                    <NavBar />
                    <Main />
                </Router>
            </LinkContextProvider>
        </div>
    );
}

export default App;
