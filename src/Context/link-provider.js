import { createContext } from "react";
import FruitCard from "../components/FruitCard/FruitCard";
import Fruit from "../components/FruitCard/Fruit/Fruit";
import HomePage from "../components/HomePage/HomePage";
import Quiz from "../components/Quiz/Projects";
import NewBuilding from "../components/Building/Block/NewBuilding";
import BusinessCard from "../components/BusinessCardPage/BusinessCard/BusinessCard";

export const LinkContext = createContext();

export const LinkContextProvider = ({ children }) => {
    const links = [
        {
            path: "/",
            exact: true,
            component: HomePage,
            title: "Chuck Norris",
            id: 1,
        },
        {
            path: "/quiz",
            exact: false,
            component: Quiz,
            title: "Quiz",
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
        {
            path: "/fruitcard",
            exact: true,
            component: FruitCard,
            title: "Fruits",
            id: 5,
        },
        {
            path: "/fruitcard/:id",
            component: Fruit,
            title: "",
            exact: false,
            id: 6,
        },
    ];

    return (
        <LinkContext.Provider value={links}>{children}</LinkContext.Provider>
    );
};
