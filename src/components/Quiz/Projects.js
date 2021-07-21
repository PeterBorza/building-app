import QuizBox from "./QuizBox/QuizBox";
import styles from "./Projects.module.scss";
import { QuizContextProvider } from "../../Context/quizContext";

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
