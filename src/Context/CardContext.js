import { createContext, useState } from "react";
import baloons from "../images/baloons.JPG";
import deftones from "../images/deftones.JPG";
import Peter from "../images/Peter.JPG";
import wood from "../images/wood.JPG";
import merlin from "../images/Merlin team.png";

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
    const [persons, setPersons] = useState([
        {
            name: "Baloon5",
            age: "20",
            occupation: "musician/band",
            id: Math.floor(Math.random() * 10000),
            photo: baloons,
        },
        {
            name: "Deftones",
            age: "30",
            occupation: "musician/band",
            id: Math.floor(Math.random() * 10000),
            photo: deftones,
        },
        {
            name: "Peter",
            age: "42",
            occupation: "software developer intern",
            id: Math.floor(Math.random() * 10000),
            photo: Peter,
        },
        {
            name: "Woody Harrelson",
            age: "65",
            occupation: "actor",
            id: Math.floor(Math.random() * 10000),
            photo: wood,
        },
        {
            name: "Merlin",
            age: "1",
            occupation: "dev team",
            id: Math.floor(Math.random() * 10000),
            photo: merlin,
        },
    ]);

    return (
        <CardContext.Provider value={[persons, setPersons]}>
            {children}
        </CardContext.Provider>
    );
};
