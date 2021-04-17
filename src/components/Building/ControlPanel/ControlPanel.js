import styles from "./ControlPanel.module.scss";
import { LiftStateContext, LiftDispatchContext } from "../LiftContext/lift-context";
import { useContext, useState } from "react";
import { fieldValues } from "../LiftContext/lift-actions";

// *************************************************************

const ControlPanel = () => {
    const { controlPanel } = styles;
    const { liftState } = useContext(LiftStateContext);
    const { liftHeight, liftWidth, numberOfLevels, speed } = liftState;
    const [error, setError] = useState(false);
    const [values, setValues] = useState({
        lh: liftHeight,
        bw: liftWidth,
        nl: numberOfLevels,
        liftSpeed: speed,
    });
    const dispatch = useContext(LiftDispatchContext);

    const submitNewData = e => {
        e.preventDefault();

        const { lh, bw, nl, liftSpeed } = values;
        Number(lh) === 0 || Number(bw) === 0 || Number(nl) === 0 || Number(liftSpeed) === 0
            ? setError(true)
            : dispatch(fieldValues("numberOfLevels", values.nl));
        dispatch(fieldValues("liftHeight", values.lh));
        dispatch(fieldValues("liftWidth", values.bw));
        dispatch(fieldValues("speed", values.liftSpeed));
    };

    // *************************************************************

    return (
        <div className={controlPanel}>
            {error ? (
                <>
                    <p>Not working with 0</p>
                    <button onClick={() => setError(false)}>Try again</button>
                </>
            ) : (
                <form onSubmit={submitNewData}>
                    Levels:
                    <input type="text" value={values.nl} onChange={e => setValues({ ...values, nl: e.target.value })} />
                    Lift height:
                    <input type="text" value={values.lh} onChange={e => setValues({ ...values, lh: e.target.value })} />
                    Block width:
                    <input type="text" value={values.bw} onChange={e => setValues({ ...values, bw: e.target.value })} />
                    Speed
                    <input
                        type="text"
                        value={values.liftSpeed}
                        onChange={e => setValues({ ...values, liftSpeed: e.target.value })}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default ControlPanel;
