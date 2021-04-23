import apple from "../../images/apple.jpg";
import orange from "../../images/orange.jpg";
import lemon from "../../images/lemon.jpg";
import apricot from "../../images/apricots.jpg";
import pear from "../../images/pear.jpg";
import mango from "../../images/mango.jpg";
import bananas from "../../images/bananas.jpg";
import grapes from "../../images/grapes.jpg";
import { createContext } from "react";

export const FruitContext = createContext();

export const FruitContextProvider = ({ children }) => {
    const fruits = [apple, orange, lemon, apricot, pear, mango, bananas, grapes];
    return <FruitContext.Provider value={fruits}>{children}</FruitContext.Provider>;
};
