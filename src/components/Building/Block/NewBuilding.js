import styles from "./Building.module.scss";
import { useEffect, useReducer, useState } from "react";
import { LiftStateContext, LiftDispatchContext, initialState } from "../LiftContext/lift-context";
import { liftReducer, levelsArray } from "../LiftContext/lift-reducer";
import Lift from "../Lift/Lift";
import Shaft from "../Shaft/Shaft";
import InitialState from "../InitialState/InitialState";
import ControlPanel from "../ControlPanel/ControlPanel";
import { runLiftA, runLiftB, isMoving, upperLiftPosition } from "../LiftContext/lift-actionTypes";
import { elevatorButtonsControl, buttonsAreOn } from "../LiftContext/lift-actions";

const { container, block, leftSide, rightSide } = styles;

const NewBuilding = () => {
    const [levels, setLevels] = useState([]);
    const [liftState, dispatch] = useReducer(liftReducer, initialState);

    const { numberOfLevels, speed, liftHeight, liftWidth, positionA, positionB, positionFloor } = liftState;

    useEffect(() => {
        setLevels(levelsArray(numberOfLevels));
        dispatch(elevatorButtonsControl(upperLiftPosition, numberOfLevels - 1));
    }, [numberOfLevels]);

    const callElevator = floorButton => {
        setTimeout(() => dispatch(buttonsAreOn(isMoving, true)), speed);
        let difA = Math.abs(positionA - floorButton);
        let difB = Math.abs(positionB - floorButton);
        if (difA < difB) {
            dispatch(elevatorButtonsControl(runLiftA, floorButton));
        } else if (difA > difB) {
            dispatch(elevatorButtonsControl(runLiftB, floorButton));
        } else if (positionA <= positionB) {
            dispatch(elevatorButtonsControl(runLiftA, floorButton));
        } else {
            dispatch(elevatorButtonsControl(runLiftB, floorButton));
        }
    };

    // DATA ****************************************************

    const liftData = position => {
        return {
            height: `${liftHeight}vh`,
            transition: `transform ${speed}ms ease-in-out`,
            transform: `translateY(${-position * 100}%)`,
        };
    };

    const containerData = () => {
        return {
            height: `${liftHeight * numberOfLevels}vh`,
            width: `${liftWidth}vw`,
        };
    };

    const shaftData = position => {
        return {
            fontSize: numberOfLevels > 11 && liftHeight < 9 ? ".8rem" : "1.5rem",
            color: positionFloor === position ? "white" : "rgb(24, 92, 45)",
        };
    };

    const lifts = [
        {
            id: 0,
            position: positionA,
            styling: leftSide,
            handler: runLiftA,
        },
        {
            id: 1,
            position: positionB,
            styling: rightSide,
            handler: runLiftB,
        },
    ];

    // RETURN **************************************************

    return (
        <div className={container}>
            <LiftStateContext.Provider value={{ liftState, levels }}>
                <LiftDispatchContext.Provider value={dispatch}>
                    <ControlPanel />
                    <InitialState />
                    <div className={block} style={containerData()}>
                        <Shaft levels={levels} callElevator={callElevator} shaftData={shaftData} />
                        {lifts.map(lift => (
                            <Lift
                                insideLiftRequest={lift.handler}
                                styling={lift.styling}
                                key={lift.id}
                                liftData={liftData(lift.position)}
                                position={lift.position}
                                fontSizes={{
                                    fontSize: numberOfLevels > 11 && liftHeight < 9 ? ".8rem" : "1.5rem",
                                }}
                            />
                        ))}
                    </div>
                </LiftDispatchContext.Provider>
            </LiftStateContext.Provider>
        </div>
    );
};

export default NewBuilding;