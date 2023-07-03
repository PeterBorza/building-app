import styles from "./Projects.module.scss";
import { QuizContextProvider } from "../../Context";
import QuizBox from "./QuizBox/QuizBox";

const Projects = () => {
  return (
    <div className={styles.container}>
      <QuizContextProvider>
        <QuizBox />
      </QuizContextProvider>
    </div>
  );
};

export default Projects;
