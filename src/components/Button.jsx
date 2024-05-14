import React from "react";

const Button = ({ text, onClick, bgColor = "blue" }) => {
  console.log(bgColor);
  return (
    <button
      onClick={onClick}
      className={`bg-${bgColor}-600   text-white py-2 px-4 rounded-md`}
    >
      {text}
    </button>
  );
};

export default Button;
