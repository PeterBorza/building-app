import { createContext } from "react";
import apple from "../../images/apple.jpg";
import orange from "../../images/orange.jpg";
import lemon from "../../images/lemon.jpg";
import apricot from "../../images/apricots.jpg";
import pear from "../../images/pear.jpg";
import mango from "../../images/mango.jpg";
import bananas from "../../images/bananas.jpg";
import grapes from "../../images/grapes.jpg";

export const FruitData = createContext();

export const FruitDataProvider = ({ children }) => {
    const fruits = [
        {
            src: apple,
            title: "apple",
            id: 100,
        },
        {
            src: orange,
            title: "orange",
            id: 101,
        },
        {
            src: lemon,
            title: "lemon",
            id: 102,
        },
        {
            src: apricot,
            title: "apricot",
            id: 103,
        },
        {
            src: pear,
            title: "pear",
            id: 104,
        },
        {
            src: mango,
            title: "mango",
            id: 105,
        },
        {
            src: bananas,
            title: "bananas",
            id: 106,
        },
        {
            src: grapes,
            title: "grapes",
            id: 107,
        },
    ];
    return <FruitData.Provider value={[fruits]}>{children}</FruitData.Provider>;
};

// export const Fruits = () => {
//     return [apple, orange, lemon, apricot, pear, mango, bananas, grapes];
// };

// export const FruitData = () => {
//     return [
//         "apple",
//         "orange",
//         "lemon",
//         "apricot",
//         "pear",
//         "mango",
//         "bananas",
//         "grapes",
//     ];
// };
