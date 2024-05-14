import React, { useState } from "react";
import Button from "./Button";
import { setPlayerData } from "../redux/playerActivity";
import { useDispatch } from "react-redux";

const PlayerName = ({ setGameStarted }) => {
  const [playerNames, setPlayerNames] = useState({
    player1: "",
    player2: "",
  });
  const dispatch = useDispatch();

  const startGame = () => {
    setGameStarted(false);
  };

  const handleInputChange = (playerNumber, playerName) => {
    setPlayerNames({
      ...playerNames,
      [playerNumber]: playerName,
    });
  };

  const handleStartGame = () => {
    if (!playerNames.player1 || !playerNames.player2)
      return alert("Please enter both player names");
    dispatch(
      setPlayerData({
        player1Name: playerNames.player1,
        player2Name: playerNames.player2,
        player1Score: 0, // Set initial score to 0 for both players
        player2Score: 0,
      })
    );
    startGame();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
      <div className="flex flex-col items-start bg border-2 border-white p-6 rounded-lg relative z-10  max-w-lg">
        <h2 className="text-white text-2xl font-bold mb-4">
          Enter Player Names
        </h2>
        <div className="mb-4 flex flex-col md:flex-row gap-5 ">
          <label
            for="Player 1 Name"
            class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              onChange={(e) => handleInputChange("player1", e.target.value)}
              required
              type="text"
              id="role"
              class="peer text-white rounded-md p-2 mr-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Player 1 Name"
              autoComplete="off"
            />

            <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg text-white p-0.5 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Player 1 Name
            </span>
          </label>
          <label
            for="Player 2 Name"
            class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              onChange={(e) => handleInputChange("player2", e.target.value)}
              required
              type="text"
              id="role"
              class="peer text-white rounded-md p-2 mr-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Player 2 Name"
              autoComplete="off"
            />

            <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg text-white p-0.5 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Player 2 Name
            </span>
          </label>
        </div>

        <Button
          bgColor="bg-blue-600"
          text="Start Game"
          onClick={handleStartGame}
        />
      </div>
    </div>
  );
};

export default PlayerName;
