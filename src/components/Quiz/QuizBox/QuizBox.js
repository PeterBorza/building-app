import { useState, useContext } from 'react';
import styles from './QuizBox.module.scss';
import { QuizContext } from '../../../Context';

const QuizBox = () => {
	const { questions, correctAnswers } = useContext(QuizContext);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const nextQuestion = currentQuestion + 1;

	const handleNextQuestion = index => {
		index === correctAnswers[currentQuestion] &&
			setScore(prev => prev + 100 / questions.length);

		nextQuestion < questions.length
			? setCurrentQuestion(nextQuestion)
			: setTimeout(() => setShowScore(true), 1000);
	};

	return (
		<div className={styles.quizBox}>
			{!showScore ? (
				<>
					<div>
						<h2>
							Question <span>{nextQuestion}</span>/
							{questions.length}
						</h2>
						<h1>{questions[currentQuestion].question}</h1>
					</div>
					<div className={styles.btnWrap}>
						{questions[currentQuestion].answers.map(
							(answer, index) => (
								<button
									key={index}
									onClick={() => handleNextQuestion(index)}
								>
									{answer}
								</button>
							)
						)}
					</div>
				</>
			) : (
				<div className={styles.scoreStyle}>
					<h1>
						Your score is <span>{Math.floor(score)}%</span>
					</h1>
					<button
						onClick={() => {
							setShowScore(false);
							setCurrentQuestion(0);
							setScore(0);
						}}
					>
						Try again
					</button>
				</div>
			)}
		</div>
	);
};

export default QuizBox;
