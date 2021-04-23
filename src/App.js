import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import { LinkContextProvider } from "./Context/link-provider";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

// const links = [
//     {
//         path: "/",
//         exact: true,
//         component: HomePage,
//         title: "Chuck Norris",
//         id: 1,
//     },
//     {
//         path: "/quiz",
//         exact: false,
//         component: Quiz,
//         title: "Quiz",
//         id: 2,
//     },
//     {
//         path: "/building",
//         exact: false,
//         component: NewBuilding,
//         title: "Building",
//         id: 3,
//     },
//     {
//         path: "/businesscard",
//         exact: false,
//         component: BusinessCard,
//         title: "BusinessCard",
//         id: 4,
//     },
//     {
//         path: "/fruitcard",
//         exact: true,
//         component: FruitCard,
//         title: "Fruits",
//         id: 5,
//     },
//     {
//         path: "/fruitcard/:id",
//         component: Fruit,
//         title: "",
//         exact: false,
//         id: 6,
//     },
// ];

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
