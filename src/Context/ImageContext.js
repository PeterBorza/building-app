import { createContext } from "react";
import baloons from "../images/baloons.JPG";
import deftones from "../images/deftones.JPG";
import Peter from "../images/Peter.JPG";
import wood from "../images/wood.JPG";

export const ImageContext = createContext();

export const ImageContextProvider = ({ children }) => {
  const images = [baloons, deftones, Peter, wood];

  return (
    <ImageContext.Provider value={[images]}>{children}</ImageContext.Provider>
  );
};
