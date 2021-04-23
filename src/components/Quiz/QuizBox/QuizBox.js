import { useState } from "react";
import styles from "./QuizBox.module.scss";
const QuizBox = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const q = [
        {
            question: "question 1?",
            answers: ["no", "yes", "maybe"],
            id: "1",
        },
        {
            question: "question 2?",
            answers: ["no", "yes", "maybe"],
            id: "2",
        },
        {
            question: "question 3?",
            answers: ["no", "yes", "maybe"],
            id: "3",
        },
    ];

    const correctAnswers = [0, 1, 2];

    // const { q, correctAnswers, showScore, score, setScore, setShowScore } = useContext(MyContext);

    const nextQuestion = currentQuestion + 1;
    const handleNextQuestion = index => {
        index === correctAnswers[currentQuestion] && setScore(prev => prev + 100 / q.length);

        nextQuestion < q.length
            ? setCurrentQuestion(nextQuestion)
            : setTimeout(() => setShowScore(true), 1000);
    };

    return (
        <div className={styles.quizBox}>
            {!showScore ? (
                <>
                    <div>
                        <h2>
                            Question <span>{nextQuestion}</span>/{q.length}
                        </h2>
                        <h1>{q[currentQuestion].question}</h1>
                    </div>
                    <div className={styles.btnWrap}>
                        {q[currentQuestion].answers.map((answer, index) => (
                            <button key={index} onClick={() => handleNextQuestion(index)}>
                                {answer}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <div className={styles.scoreStyle}>
                    <h1>
                        Your score is <span>{score}%</span>
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
