import { QuizContextProvider } from "Context";
import QuizBox from "./QuizBox";

import styles from "./Projects.module.scss";

const Projects = () => (
  <QuizContextProvider>
    <div className={styles.container}>
      <QuizBox />
    </div>
  </QuizContextProvider>
);

export default Projects;
