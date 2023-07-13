import { useCallback, useContext, useState } from "react";

import { actions } from "../LiftContext";
import LabeledInput from "./LabeledInput";
import { BuildingContext } from "Context";

import styles from "./ControlPanel.module.scss";

const { controlPanel, errorPanel, controlButton } = styles;

const ControlPanel = () => {
  const { liftState, dispatch } = useContext(BuildingContext);
  const { fieldValues } = actions;
  const { liftHeight, liftWidth, numberOfLevels, speed } = liftState;
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    stateNumberOfLevels: numberOfLevels,
    stateLiftHeight: liftHeight,
    stateLiftWidth: liftWidth,
    stateSpeed: speed,
  });

  const onChangeHandler = e =>
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

  const submitNewData = useCallback(
    e => {
      e.preventDefault();
      if (Object.values(values).some(val => val === "")) {
        setError(true);
        return;
      }
      Object.entries(values).forEach(([key, val]) =>
        dispatch(fieldValues(val, key))
      );
    },
    [values, dispatch, fieldValues]
  );

  const labels = ["Levels:", "Lift Height", "Block Width", "Speed"];

  const inputFields = Object.entries(values).map(([key, val], index) => {
    return (
      <LabeledInput
        key={val}
        defaultValue={val}
        name={key}
        handler={onChangeHandler}
        labelText={labels[index]}
      />
    );
  });

  return (
    <div className={controlPanel}>
      {error ? (
        <div className={errorPanel}>
          <span>You must provide a greater than 0 value to all fields!</span>
          <button className={controlButton} onClick={() => setError(false)}>
            Try again
          </button>
        </div>
      ) : (
        <>
          <h2>Controls</h2>
          <form onSubmit={submitNewData}>
            {inputFields}
            <button className={controlButton} type="submit">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ControlPanel;
