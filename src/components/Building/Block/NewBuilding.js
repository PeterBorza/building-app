import styles from "./Building.module.scss";
import { useEffect, useReducer, useState } from "react";
import {
    LiftStateContext,
    LiftDispatchContext,
    initialState,
} from "../LiftContext/lift-context";
import { liftReducer, levelsArray } from "../LiftContext/lift-reducer";
import Lift from "../Lift/Lift";
import Shaft from "../Shaft/Shaft";
import InitialState from "../InitialState/InitialState";
import ControlPanel from "../ControlPanel/ControlPanel";
import {
    runLiftA,
    runLiftB,
    isMoving,
    upperLiftPosition,
} from "../LiftContext/lift-actionTypes";
import {
    elevatorButtonsControl,
    buttonsAreOn,
} from "../LiftContext/lift-actions";

const NewBuilding = () => {
    const { container, block, leftSide, rightSide } = styles;
    const [levels, setLevels] = useState([]);
    const [liftState, dispatch] = useReducer(liftReducer, initialState);

    const {
        numberOfLevels,
        speed,
        liftHeight,
        liftWidth,
        positionA,
        positionB,
        positionFloor,
    } = liftState;

    useEffect(() => {
        setLevels(levelsArray(numberOfLevels));
        dispatch(elevatorButtonsControl(upperLiftPosition, numberOfLevels - 1));
    }, [numberOfLevels]);

    const callElevator = floorButton => {
        setTimeout(() => dispatch(buttonsAreOn(isMoving, true)), speed);
        let difA = Math.abs(positionA - floorButton);
        let difB = Math.abs(positionB - floorButton);

        difA < difB || positionA <= positionB
            ? dispatch(elevatorButtonsControl(runLiftA, floorButton))
            : dispatch(elevatorButtonsControl(runLiftB, floorButton));
    };

    // DATA ****************************************************

    const liftDynamicStyle = position => {
        return {
            height: `${liftHeight}vh`,
            transition: `transform ${speed}ms ease-in-out`,
            transform: `translateY(${-position * 100}%)`,
        };
    };

    const containerDynamicStyle = () => {
        return {
            height: `${liftHeight * numberOfLevels}vh`,
            width: `${liftWidth}vw`,
        };
    };

    const shaftDynamicStyle = position => {
        return {
            fontSize:
                numberOfLevels > 11 && liftHeight < 9 ? ".8rem" : "1.5rem",
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
                    <div className={block} style={containerDynamicStyle()}>
                        <Shaft
                            levels={levels}
                            callElevator={callElevator}
                            shaftDynamicStyle={shaftDynamicStyle}
                        />
                        {lifts.map(lift => (
                            <Lift
                                insideLiftRequest={lift.handler}
                                styling={lift.styling}
                                key={lift.id}
                                liftDynamicStyle={liftDynamicStyle(
                                    lift.position
                                )}
                                position={lift.position}
                                fontSizes={{
                                    fontSize:
                                        numberOfLevels > 11 && liftHeight < 9
                                            ? ".8rem"
                                            : "1.5rem",
                                }}
                            />
                        ))}
                    </div>
                    <InitialState />
                </LiftDispatchContext.Provider>
            </LiftStateContext.Provider>
        </div>
    );
};

export default NewBuilding;
