import { createContext } from "react";
import apple from "images/apple400.jpg";
import orange from "images/orange400.jpg";
import lemon from "images/lemon400.jpg";
import apricot from "images/apricots400.jpg";
import pear from "images/pear400.jpg";
import mango from "images/mango400.jpg";
import bananas from "images/bananas400.jpg";
import grapes from "images/grapes400.jpg";

export const FruitData = createContext();

export const FruitDataProvider = ({ children }) => {
  const newFruits = {
    apple,
    orange,
    lemon,
    apricot,
    pear,
    mango,
    bananas,
    grapes,
  };

  const fruits = Object.entries(newFruits).map(([key, val], index) => ({
    src: val,
    title: key,
    id: 100 + index,
  }));

  return <FruitData.Provider value={[fruits]}>{children}</FruitData.Provider>;
};
