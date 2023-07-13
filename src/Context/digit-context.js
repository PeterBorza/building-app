import { createContext, useState } from "react";

export const DigitContext = createContext(null);

export const DigitData = ({ children }) => {
  const [keyPressed, setKeyPressed] = useState("8");
  const digits = [
    {
      key: 0,
      stripes: [0, 2, 3, 4, 5, 6],
    },
    {
      key: 1,
      stripes: [4, 6],
    },
    {
      key: 2,
      stripes: [0, 1, 2, 4, 5],
    },
    {
      key: 3,
      stripes: [0, 1, 2, 4, 6],
    },
    {
      key: 4,
      stripes: [1, 3, 4, 6],
    },
    {
      key: 5,
      stripes: [0, 1, 2, 3, 6],
    },
    {
      key: 6,
      stripes: [0, 1, 2, 3, 5, 6],
    },
    {
      key: 7,
      stripes: [0, 4, 6],
    },
    {
      key: 8,
      stripes: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      key: 9,
      stripes: [0, 1, 2, 3, 4, 6],
    },
    {
      key: "a",
      stripes: [0, 1, 3, 4, 5, 6],
    },
    {
      key: "Enter",
      stripes: [0, 1, 2, 3, 5],
    },
    {
      key: "e",
      stripes: [0, 1, 2, 3, 5],
    },
    {
      key: "i",
      stripes: [4, 6],
    },
    {
      key: "p",
      stripes: [0, 1, 3, 4, 5],
    },
    {
      key: "l",
      stripes: [2, 3, 5],
    },
    {
      key: "o",
      stripes: [1, 2, 5, 6],
    },
    {
      key: "c",
      stripes: [1, 2, 5],
    },
    {
      key: "C",
      stripes: [0, 2, 3, 5],
    },
    {
      key: "d",
      stripes: [1, 2, 4, 5, 6],
    },
    {
      key: "b",
      stripes: [1, 2, 3, 5, 6],
    },
    {
      key: "F",
      stripes: [0, 1, 3, 5],
    },
    {
      key: "h",
      stripes: [1, 3, 5, 6],
    },
    {
      key: "O",
      stripes: [0, 2, 3, 4, 5, 6],
    },
    {
      key: "H",
      stripes: [1, 3, 4, 5, 6],
    },
    {
      key: "S",
      stripes: [0, 1, 2, 3, 6],
    },
    {
      key: "U",
      stripes: [2, 3, 4, 5, 6],
    },
    {
      key: "u",
      stripes: [2, 5, 6],
    },
  ];
  return (
    <DigitContext.Provider value={[digits, keyPressed, setKeyPressed]}>
      {children}
    </DigitContext.Provider>
  );
};
