import { container } from './Projects.module.scss';
import { QuizContextProvider } from '../../Context';
import QuizBox from './QuizBox/QuizBox';

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
