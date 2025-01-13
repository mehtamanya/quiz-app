import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import LeaderBoard from "./components/Leaderboard";
import Axios from "./components/axios";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/axios" element={<Axios />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
