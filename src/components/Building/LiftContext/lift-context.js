import { createContext } from "react";

export const LiftStateContext = createContext();
export const LiftDispatchContext = createContext();

export const initialState = {
    numberOfLevels: 7,
    speed: 1000,
    liftHeight: 10,
    liftWidth: 20,
    positionA: 0,
    positionB: 6,
    positionFloor: 0,
    disabled: false,
};
