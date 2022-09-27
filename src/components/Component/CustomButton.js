import React from "react";
import Constants from "../../constants/Constants";

const CustomButton = ({ text, styleClass, onClick }) => {
  return (
    <button
      className={`py-2 px-8 rounded-lg text-white font-bold text-base font-primayfont ${styleClass}`}
      style={{ background: Constants.gradient }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
