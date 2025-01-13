import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Select,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
const navigate = useNavigate();
const Home = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState(10);

  const handleStartQuiz = () => {
    navigate("/quiz", {
      state: { name, category, difficulty, questions },
    });
  };
  return (
    <div>
      <h1>StepUp Quiz</h1>
      <FormControl>
        <FormLabel>Quiz Name</FormLabel>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your name"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Category</FormLabel>
        <Select
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Select Cateogry"
        >
          <option value="21">Science: Computers</option>
          <option value="22">Science: Electronics</option>
          <option value="23">Science: Mechanical</option>

          <option value="18">Science: Electrical</option>

          <option value="9">General Kniwledge</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Difficulty</FormLabel>
        <Select
          onChange={(e) => setDifficulty(e.target.value)}
          placeholder="Select Difficulty"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Number of Questions</FormLabel>
        <Select
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          placeholder="Select Number of Questions"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </Select>
      </FormControl>
      <Button onClick={handleStartQuiz}>Start Quiz</Button>
    </div>
  );
};
export default Home;
