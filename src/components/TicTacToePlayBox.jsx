import React from "react";

const TicTacToePlayBox = ({ toggle }) => {
  return (
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
  );
};

export default TicTacToePlayBox;
