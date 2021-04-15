import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
  const [persons, setPersons] = useState([
    {
      name: "Baloon5",
      age: "20",
      occupation: "musician/band",
      id: Math.floor(Math.random() * 10000),
    },
    {
      name: "Deftones",
      age: "30",
      occupation: "musician/band",
      id: Math.floor(Math.random() * 10000),
    },
    {
      name: "Peter",
      age: "42",
      occupation: "software developer intern",
      id: Math.floor(Math.random() * 10000),
    },
    {
      name: "Woody Harrelson",
      age: "65",
      occupation: "actor",
      id: Math.floor(Math.random() * 10000),
    },
  ]);

  return (
    <CardContext.Provider value={[persons, setPersons]}>
      {children}
    </CardContext.Provider>
  );
};
