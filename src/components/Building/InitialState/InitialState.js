import { useContext } from "react";

import { liftContext } from "../LiftContext";

import styles from "./InitialState.module.scss";

const InitialState = () => {
    const { LiftStateContext } = liftContext;
    const { control } = styles;
    const { liftState } = useContext(LiftStateContext);
    const { numberOfLevels, liftHeight, liftWidth, speed, disabled } =
        liftState;
    const isButtonDisabled = { color: disabled ? "red" : "rgb(19, 83, 83)" };

    return (
        <div className={control}>
            <h2>initialState</h2>
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

export default InitialState;
