import styles from "./Buttons.module.scss";

import { FlipBox, GlowButton, Neon, SimpleDrop } from "../utils";

const Buttons = () => {
  const buttonGroup = {
    neonBtn: <Neon></Neon>,
    glowBtn: <GlowButton></GlowButton>,
  };
  return (
    <div className={styles.buttons_style}>
      <SimpleDrop>
        <FlipBox child={buttonGroup.neonBtn}>{buttonGroup.glowBtn}</FlipBox>
      </SimpleDrop>
    </div>
  );
};

export default Buttons;
