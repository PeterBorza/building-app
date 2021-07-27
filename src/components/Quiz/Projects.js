import QuizBox from "./QuizBox/QuizBox";
import { container } from "./Projects.module.scss";
import { QuizContextProvider } from "../../Context/quizContext";

const Projects = () => {
    return (
        <div className={container}>
            <QuizContextProvider>
                <QuizBox />
            </QuizContextProvider>
        </div>
    );
};

export default Projects;
