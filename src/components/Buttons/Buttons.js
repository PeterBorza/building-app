import { FlipBox, GlowButton, Neon, SimpleDrop } from "../utils";

import styles from "./Buttons.module.scss";

const Buttons = () => {
  return (
    <div className={styles.buttons_style}>
      <SimpleDrop>
        <FlipBox child={<Neon />}>
          <GlowButton />
        </FlipBox>
      </SimpleDrop>
    </div>
  );
};

export default Buttons;
