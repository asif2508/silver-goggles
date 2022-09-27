import React from "react";
import Constants from "../../constants/Constants";

const CustomButton = ({
  text,
  styleClass,
  onClick,
  extraProps,
  customColor,
  customIcon,
}) => {
  return (
    <button
      className={`py-2 px-8 rounded-lg text-white font-bold text-base font-primayfont ${styleClass}`}
      style={
        customColor
          ? { backgroundColor: customColor }
          : { background: Constants.gradient }
      }
      {...extraProps}
      onClick={onClick}
    >
      <div className="flex w-full justify-center items-center">
        {text}
        <div className="ml-2">{customIcon && customIcon}</div>
      </div>
    </button>
  );
};

export default CustomButton;
