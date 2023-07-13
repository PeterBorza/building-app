import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";

import NavBar from "components/NavBar";
import Main from "components/Main";

const App = () => (
  <div className="App">
    <Router>
      <NavBar />
      <Main />
    </Router>
  </div>
);

export default App;
