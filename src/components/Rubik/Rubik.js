import React, { useContext, useEffect, useRef, useState } from "react";
import { GlowButton } from "components/utils";
import { RubikContext } from "./rubik-context";

import styles from "./Rubik.module.scss";

export const Rubik = () => {
  const rubikData = useContext(RubikContext);
  const wrapper = useRef(null);
  const [moveX, setMoveX] = useState("");

  useEffect(() => {
    wrapper.current.style.transform += moveX;
    setMoveX("");
  }, [moveX]);

  const handlRotation = axis => setMoveX(`rotate${axis}(90deg)`);

  const sideStyles = (transform, url) => ({
    transform,
    backgroundImage: `url(${url})`,
  });

  const sides = rubikData
    .transforms()
    .map((side, i) => (
      <div
        key={`side${i}`}
        className={styles.rubikSide}
        style={sideStyles(side, rubikData.images[i])}
      />
    ));

  return (
    <>
      <div className={styles.buttonsWrapper}>
        <GlowButton handler={handlRotation("Y")} title="right" />
        <GlowButton handler={handlRotation("X")} title="up" />
        <GlowButton handler={handlRotation("Z")} title="front" />
      </div>
      <div ref={wrapper} className={styles.rubikWrapper}>
        {sides}
      </div>
    </>
  );
};
