import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Projects from "./components/Projects/Projects";
import NewBuilding from "./components/Building/LiftContext/NewBuilding/NewBuilding";
import BusinessCard from "./components/BusinessCardPage/BusinessCard/BusinessCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const links = [
  {
    path: "/",
    exact: true,
    component: HomePage,
    title: "Chuck Norris",
    id: 1,
  },
  {
    path: "/projects",
    exact: false,
    component: Projects,
    title: "Projects",
    id: 2,
  },
  {
    path: "/building",
    exact: false,
    component: NewBuilding,
    title: "Building",
    id: 3,
  },
  {
    path: "/businesscard",
    exact: false,
    component: BusinessCard,
    title: "BusinessCard",
    id: 4,
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar links={links} />
        <Switch>
          {links.map(({ path, exact, id, component }) => (
            <Route path={path} exact={exact} component={component} key={id} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
