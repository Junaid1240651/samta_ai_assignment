import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg gap-5 h-[100vh] w-[100%] items-center justify-center">
      <Button text={"To Do"} onClick={() => navigate("/todo/assignment")} />
      <Button
        text={"Tick Tack Toe"}
        onClick={() => navigate("/tick-tac-toe/assignment")}
      />
    </div>
  );
};

export default Home;
