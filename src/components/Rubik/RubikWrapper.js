import { Rubik } from "./Rubik";
import { RubikContextProvider } from "./rubik-context";

import styles from "./Rubik.module.scss";

const RubikWrapper = () => {
  return (
    <RubikContextProvider>
      <div className={styles.rubikContainer}>
        <Rubik />
      </div>
    </RubikContextProvider>
  );
};

export default RubikWrapper;
