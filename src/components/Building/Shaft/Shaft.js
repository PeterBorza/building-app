import { useContext } from "react";

import { liftContext } from "../LiftContext";

import { shaftButtons, movingLiftStyle } from "./Shaft.module.scss";

const Shaft = ({ callElevator, shaftDynamicStyle }) => {
    const { liftState, levels } = useContext(liftContext.LiftStateContext);
    const { disabled } = liftState;

    return (
        <div className={shaftButtons}>
            {levels.map(floorButton => (
                <button
                    disabled={disabled}
                    key={floorButton}
                    onClick={() => callElevator(floorButton)}
                    style={shaftDynamicStyle(floorButton)}
                >
                    {!disabled ? (
                        floorButton
                    ) : (
                        <div className={movingLiftStyle}></div>
                    )}
                </button>
            ))}
        </div>
    );
};

export default Shaft;
