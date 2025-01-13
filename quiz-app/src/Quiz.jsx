// src/Quiz.jsx
import React, { useState, useEffect } from "react";

const Quiz = ({ quizConfig }) => {
  const { name, category, difficulty, numQuestions } = quizConfig;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Fetch quiz questions from an API (for example, Open Trivia DB API)
    const fetchQuestions = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      const data = await response.json();
      setQuestions(data.results);
    };

    fetchQuestions();
  }, [category, difficulty, numQuestions]);

  const handleAnswer = (isCorrect) => {
    // Logic to handle user's answer (could be for scoring or next question)
    if (isCorrect) {
      console.log("Correct answer!");
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (!questions.length) {
    return <div>Loading quiz questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>{name}</h2>
      <h3>
        Question {currentQuestionIndex + 1}: {currentQuestion.question}
      </h3>
      <div>
        {currentQuestion.incorrect_answers
          .concat(currentQuestion.correct_answer)
          .map((answer, idx) => (
            <button
              key={idx}
              onClick={() =>
                handleAnswer(answer === currentQuestion.correct_answer)
              }
            >
              {answer}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Quiz;
