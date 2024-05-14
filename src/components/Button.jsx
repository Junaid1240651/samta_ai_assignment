import React from "react";

const Button = ({ text, onClick, bgColor }) => {
  console.log(bgColor);
  return (
    <button
      onClick={onClick}
      className={`${bgColor}   text-white py-2 px-4 rounded-md`}
    >
      {text}
    </button>
  );
};

export default Button;
