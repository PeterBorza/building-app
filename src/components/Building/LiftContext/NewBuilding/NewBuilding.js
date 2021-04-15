import styles from "./Building.module.scss";
import { useEffect, useReducer, useState } from "react";
import { LiftStateContext, LiftDispatchContext } from "../lift-context";
import Lift from "../../Lift/Lift";
import Shaft from "../../Shaft/Shaft";
import InitialState from "../../InitialState/InitialState";
import ControlPanel from "../../ControlPanel/ControlPanel";
import {
  runLiftA,
  runLiftB,
  isMoving,
  changeLevelCount,
  upperLiftPosition,
  changeHeight,
  changeWidth,
  field,
} from "../lift-actions";

const { container, block, leftSide, rightSide } = styles;
const levelsArray = (num) =>
  Array(num)
    .fill()
    .map((_, i) => i);

const initialState = {
  numberOfLevels: 7,
  speed: 2000,
  liftHeight: 12,
  liftWidth: 35,
  positionA: 0,
  positionB: 6,
  positionFloor: 0,
  disabled: false,
};

const liftReducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case runLiftA:
      return {
        ...state,
        positionA: value,
        positionFloor: value,
        disabled: true,
      };
    case runLiftB:
      return {
        ...state,
        positionB: value,
        positionFloor: value,
        disabled: true,
      };
    case isMoving:
      return {
        ...state,
        disabled: false,
      };
    case changeLevelCount:
      return {
        ...state,
        numberOfLevels: value,
      };
    case upperLiftPosition:
      return {
        ...state,
        positionB: value,
      };
    case changeHeight:
      return {
        ...state,
        liftHeight: value,
      };
    case changeWidth:
      return {
        ...state,
        liftWidth: value,
      };
    case field:
      return {
        ...state,
        [action.field]: action.value,
      };

    default:
      return state;
  }
};

const NewBuilding = () => {
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
    dispatch({ type: "upperLiftPosition", value: numberOfLevels - 1 });
  }, [numberOfLevels]);

  const callElevator = (floorButton) => {
    setTimeout(() => dispatch({ type: "isMoving" }), speed);
    let difA = Math.abs(positionA - floorButton);
    let difB = Math.abs(positionB - floorButton);
    if (difA < difB) {
      dispatch({ type: "runLiftA", value: floorButton });
    } else if (difA > difB) {
      dispatch({ type: "runLiftB", value: floorButton });
    } else if (positionA <= positionB) {
      dispatch({ type: "runLiftA", value: floorButton });
    } else {
      dispatch({ type: "runLiftB", value: floorButton });
    }
  };

  // DATA ****************************************************

  const liftData = (position) => {
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

  const shaftData = (position) => {
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
      handler: "runLiftA",
    },
    {
      id: 1,
      position: positionB,
      styling: rightSide,
      handler: "runLiftB",
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
            <Shaft
              levels={levels}
              callElevator={callElevator}
              shaftData={shaftData}
            />
            {lifts.map((lift) => (
              <Lift
                insideLiftRequest={lift.handler}
                styling={lift.styling}
                key={lift.id}
                liftData={liftData(lift.position)}
                position={lift.position}
                fontSizes={{
                  fontSize:
                    numberOfLevels > 11 && liftHeight < 9 ? ".8rem" : "1.5rem",
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
