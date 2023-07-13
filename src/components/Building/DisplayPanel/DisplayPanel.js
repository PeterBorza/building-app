import { useContext } from "react";

import { BuildingContext } from "../../../Context";

import styles from "./DisplayPanel.module.scss";

const DisplayPanel = () => {
  const { liftState } = useContext(BuildingContext);
  const { control } = styles;
  const { numberOfLevels, liftHeight, liftWidth, speed, disabled } = liftState;
  const isButtonDisabled = { color: disabled && "red" };

  return (
    <div className={control}>
      <h2>Stats</h2>
      <p>
        Number of levels: <span>{numberOfLevels}</span>
      </p>
      <p>
        Lift-height: <span>{liftHeight}vh</span>
      </p>
      <p>
        Block-width: <span>{liftWidth}vw</span>
      </p>
      <p>
        Speed: <span>{speed}ms</span>
      </p>
      <p>
        Buttons:{" "}
        <span style={isButtonDisabled}>
          {disabled ? "disabled" : "functional"}
        </span>
      </p>
    </div>
  );
};

export default DisplayPanel;
