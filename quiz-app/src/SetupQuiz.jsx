// src/SetupQuiz.jsx
import React, { useState } from "react";

const SetupQuiz = ({ onStartQuiz }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("9"); // Default category "General Knowledge"
  const [difficulty, setDifficulty] = useState("easy");
  const [numQuestions, setNumQuestions] = useState(10);

  const handleSubmit = () => {
    // Trigger the onStartQuiz function passed from App.jsx
    onStartQuiz({ name, category, difficulty, numQuestions });
  };

  return (
    <div className="setup-quiz-container">
      <h2 className="heading">Setup Your Quiz</h2>

      <div className="form-control">
        <label htmlFor="quizName">Quiz Name</label>
        <input
          type="text"
          id="quizName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter quiz name"
        />
      </div>

      <div className="form-control">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="11">Entertainment: Film</option>
          <option value="17">Science: Computers</option>
          <option value="18">Science: Gadgets</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="difficulty">Difficulty</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="numQuestions">Number of Questions</label>
        <select
          id="numQuestions"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      <button className="start-button" onClick={handleSubmit}>
        Start Quiz
      </button>
    </div>
  );
};

export default SetupQuiz;
