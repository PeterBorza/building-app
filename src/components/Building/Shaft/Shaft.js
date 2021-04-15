import styles from "./Shaft.module.scss";
import { useContext } from "react";
import { LiftStateContext } from "../LiftContext/lift-context";

const Shaft = ({ callElevator, shaftData }) => {
  const { liftState, levels } = useContext(LiftStateContext);
  const { disabled } = liftState;
  return (
    <div className={styles.shaftButtons}>
      {levels.map((floorButton) => (
        <button
          disabled={disabled}
          key={floorButton}
          onClick={() => callElevator(floorButton)}
          style={shaftData(floorButton)}
        >
          {!disabled ? (
            floorButton
          ) : (
            <div className={styles.movingLiftStyle}></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default Shaft;
