import { createContext } from "react";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
    const quizData = {
        questions: [
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
        ],

        correctAnswers: [0, 1, 2],
    };

    return (
        <QuizContext.Provider value={quizData}>{children}</QuizContext.Provider>
    );
};
