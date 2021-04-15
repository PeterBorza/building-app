import styles from "./ControlPanel.module.scss";
import {
  LiftStateContext,
  LiftDispatchContext,
} from "../LiftContext/lift-context";
import { useContext, useState } from "react";

// *************************************************************

const ControlPanel = () => {
  const { controlPanel } = styles;
  const { liftState } = useContext(LiftStateContext);
  const { liftHeight, liftWidth, numberOfLevels } = liftState;
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    lh: liftHeight,
    bw: liftWidth,
    nl: numberOfLevels,
  });
  const dispatch = useContext(LiftDispatchContext);

  const submitNewData = (e) => {
    e.preventDefault();

    console.log(values);
    const { lh, bw, nl } = values;
    Number(lh) === 0 || Number(bw) === 0 || Number(nl) === 0
      ? setError(true)
      : dispatch({
          type: "field",
          field: "numberOfLevels",
          value: Number(values.nl),
        });
    dispatch({
      type: "field",
      field: "liftHeight",
      value: Number(values.lh),
    });
    dispatch({
      type: "field",
      field: "liftWidth",
      value: Number(values.bw),
    });
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
          <input
            type="text"
            value={values.nl}
            onChange={(e) => setValues({ ...values, nl: e.target.value })}
          />
          Lift height:
          <input
            type="text"
            value={values.lh}
            onChange={(e) => setValues({ ...values, lh: e.target.value })}
          />
          Block width:
          <input
            type="text"
            value={values.bw}
            onChange={(e) => setValues({ ...values, bw: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ControlPanel;
