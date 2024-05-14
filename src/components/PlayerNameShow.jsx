import React from "react";
import Button from "./Button";

const PlayerNameShow = ({ playerActivity, resetPlayerHandler }) => {
  return (
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
        bgColor="bg-blue-600"
        text={"Reset Players"}
        onClick={resetPlayerHandler}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      />
    </div>
  );
};

export default PlayerNameShow;
