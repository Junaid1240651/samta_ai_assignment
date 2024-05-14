import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ToDo from "./pages/ToDo.jsx";
import TicTacToe from "./pages/TicTacToe.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo/assignment" element={<ToDo />} />
      <Route path="/tick-tac-toe/assignment" element={<TicTacToe />} />
    </Routes>
  );
};

export default App;
