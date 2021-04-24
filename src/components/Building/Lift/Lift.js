import {
    LiftStateContext,
    LiftDispatchContext,
} from "../LiftContext/lift-context";
import { buttonsAreOn } from "../LiftContext/lift-actions";
import { isMoving } from "../LiftContext/lift-actionTypes";
import { useContext } from "react";
import styles from "./Lift.module.scss";
import classNames from "classnames";

const Lift = ({
    insideLiftRequest,
    styling,
    liftDynamicStyle,
    position,
    fontSizes,
}) => {
    const { levels, liftState } = useContext(LiftStateContext);
    const dispatch = useContext(LiftDispatchContext);
    const { liftStyle, active } = styles;

    return (
        <div
            className={classNames(liftStyle, styling)}
            style={liftDynamicStyle}
        >
            {levels.map(liftButton => (
                <button
                    disabled={liftState.disabled}
                    key={liftButton}
                    className={classNames({
                        [active]: liftButton === position,
                    })}
                    onClick={() => {
                        dispatch({
                            type: insideLiftRequest,
                            value: liftButton,
                        });
                        setTimeout(
                            () => dispatch(buttonsAreOn(isMoving, true)),
                            liftState.speed
                        );
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
