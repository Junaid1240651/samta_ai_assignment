import React, { useState } from "react";
import crossIcon from "../assets/cross.png";
import circleIcon from "../assets/circle.png";
import { useSelector, useDispatch } from "react-redux";
import { setPlayerData } from "../redux/playerActivity";
import PlayerName from "../components/playerName";
import Button from "../components/Button";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);
  const playerActivity = useSelector((state) => state.playerData.playerData);
  const dispatch = useDispatch();
  const [gameStarted, setGameStarted] = useState(
    playerActivity.player1Name ? false : true
  );

  const toggle = (e, num) => {
    if (lock || data[num] !== "") return;

    const currentPlayer = count % 2 === 0 ? "X" : "O";
    e.target.innerHTML = `<img src="${
      currentPlayer === "X" ? crossIcon : circleIcon
    }" alt='${currentPlayer}' />`;
    data[num] = currentPlayer;
    setCount((prevCount) => prevCount + 1);
    checkWin();
  };

  const checkWin = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        setLock(true);
        setWinner(data[a]);
        updateScores(data[a]);
        return;
      }
    }

    if (count === 9) {
      setLock(true);
      setWinner("Draw");
    }
  };

  const updateScores = (winner) => {
    dispatch(
      setPlayerData({
        ...playerActivity,
        player1Score:
          winner === "X"
            ? playerActivity.player1Score + 1
            : playerActivity.player1Score,
        player2Score:
          winner === "O"
            ? playerActivity.player2Score + 1
            : playerActivity.player2Score,
      })
    );
  };

  const resetGame = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
    setLock(false);
    setWinner(null);
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => (box.innerHTML = ""));
  };

  const resetPlayerHandler = () => {
    dispatch(
      setPlayerData({
        player1Name: "",
        player2Name: "",
        player1Score: 0,
        player2Score: 0,
      })
    );
    setGameStarted(true);
  };

  return (
    <div className="bg h-[100vh] p-10 flex flex-col items-center justify-evenly">
      {gameStarted && <PlayerName setGameStarted={setGameStarted} />}
      {playerActivity.player1Name && (
        <div className="flex flex-col items-center space-y-4">
          <div className="text-white">
            <h1 className="md:text-2xl sm:text-xl">
              Player Name 1 : {playerActivity.player1Name} ( Score :{" "}
              {playerActivity.player1Score})
            </h1>
          </div>
          <div className="text-white">
            <h1 className="md:text-2xl sm:text-xl">
              Player Name 2 : {playerActivity.player2Name} ( Score :{" "}
              {playerActivity.player2Score})
            </h1>
          </div>
          <Button
            text={"Reset Players"}
            onClick={resetPlayerHandler}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          />
        </div>
      )}

      <div className="row-container  flex">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>

      <div className=" flex flex-col items-center  gap-5 mt-4 text-white">
        {winner && (
          <h1 className="text-2xl">
            {winner === "Draw" ? "It's a Draw!" : `Player ${winner} Wins!`}
          </h1>
        )}

        <Button text={"Reset"} onClick={resetGame} />
      </div>
    </div>
  );
};

export default TicTacToe;
