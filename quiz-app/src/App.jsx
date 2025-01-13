// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SetupQuiz from "./SetupQuiz";
import Quiz from "./Quiz";
import Leaderboard from "./Leaderboard";

const App = () => {
  const [quizConfig, setQuizConfig] = useState(null);

  const handleStartQuiz = (config) => {
    setQuizConfig(config);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SetupQuiz onStartQuiz={handleStartQuiz} />} />
        <Route
          path="/quiz"
          element={
            quizConfig ? (
              <Quiz quizConfig={quizConfig} />
            ) : (
              <SetupQuiz onStartQuiz={handleStartQuiz} />
            )
          }
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
};

export default App;
