import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Main />
            </Router>
        </div>
    );
}

export default App;
