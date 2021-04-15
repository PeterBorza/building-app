import {
  LiftStateContext,
  LiftDispatchContext,
} from "../LiftContext/lift-context";
import { useContext } from "react";
import styles from "./Lift.module.scss";
import classNames from "classnames";

const Lift = ({
  insideLiftRequest,
  styling,
  liftData,
  position,
  fontSizes,
}) => {
  const { levels, liftState } = useContext(LiftStateContext);
  const dispatch = useContext(LiftDispatchContext);
  const { liftStyle, active } = styles;

  return (
    <div className={classNames(liftStyle, styling)} style={liftData}>
      {levels.map((liftButton) => (
        <button
          disabled={liftState.disabled}
          key={liftButton}
          className={classNames({ [active]: liftButton === position })}
          onClick={() => {
            dispatch({ type: insideLiftRequest, value: liftButton });
            setTimeout(() => dispatch({ type: "isMoving" }), liftState.speed);
          }}
          style={fontSizes}
        >
          {liftButton}
        </button>
      ))}
    </div>
  );
};

export default Lift;