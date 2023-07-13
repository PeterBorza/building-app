import React, { useContext, useEffect } from "react";

import { DigitContext } from "Context";

import styles from "./Digits.module.scss";
import classNames from "classnames";

const Digits = () => {
  const [digits, keyPressed, setKeyPressed] = useContext(DigitContext);

  const typedKey = key => digits.filter(digit => String(digit.key) === key);

  useEffect(() => {
    const setKeyPress = e => setKeyPressed(e.key);
    window.addEventListener("keydown", setKeyPress);
    return window.removeEventListener("keydown", setKeyPress);
  }, [setKeyPressed]);

  const selectedNumber = key =>
    typedKey(key).map(num =>
      num.stripes.map(stripe => (
        <div
          key={`digit-${stripe}`}
          className={classNames(
            styles.position_dimension,
            styles[`box${stripe}`]
          )}
        />
      ))
    );

  return (
    <div className={styles.digitContainer}>
      <div className={styles.container} tabIndex={0} title={"start typing "}>
        <div className={styles.digit_box}>{selectedNumber(keyPressed)}</div>
      </div>
    </div>
  );
};

export default Digits;
