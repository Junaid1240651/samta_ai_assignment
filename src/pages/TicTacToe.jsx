import React, { useEffect, useState } from "react";
import crossIcon from "../assets/cross.png";
import circleIcon from "../assets/circle.png";
import { useSelector, useDispatch } from "react-redux";
import { setPlayerData } from "../redux/playerActivity";
import PlayerName from "../components/PlayerNameModel";
import Button from "../components/Button";
import TicTacToePlayBox from "../components/TicTacToePlayBox";
import PlayerNameShow from "../components/PlayerNameShow";

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
    console.log(count);

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
  useEffect(() => {
    if (count === 9) {
      setLock(true);
      setWinner("Draw");
    }
  }, [count]);
  console.log(count);

  return (
    <div className="bg h-[100vh] p-10 flex flex-col items-center justify-evenly">
      {gameStarted && <PlayerName setGameStarted={setGameStarted} />}
      {playerActivity.player1Name && (
        <PlayerNameShow
          playerActivity={playerActivity}
          resetPlayerHandler={resetPlayerHandler}
        />
      )}
      <TicTacToePlayBox toggle={toggle} />

      <div className=" flex flex-col items-center  gap-5 mt-4 text-white">
        {winner && (
          <h1 className="text-2xl">
            {winner === "Draw" ? "It's a Draw!" : `Player ${winner} Wins!`}
          </h1>
        )}

        <Button bgColor="bg-blue-600" text={"Reset"} onClick={resetGame} />
      </div>
    </div>
  );
};

export default TicTacToe;
