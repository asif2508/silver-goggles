import React from "react";
import Colors from "../../utils/Colors";

const CustomButton = ({text,style}) => {
  return (
    <button
      className={`py-2 px-8 rounded-lg text-white font-bold text-base font-primayfont ${style}`}
      style={{
        background: `linear-gradient(180deg, ${Colors["primay-light"]} 0%, ${Colors["primary-dark"]} 100%)`,
      }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
