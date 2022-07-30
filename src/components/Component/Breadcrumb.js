import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Colors from "../../utils/Colors";

const Breadcrumb = ({ navigations, onPressRoutes }) => {
  const navigation = useNavigate();

  return (
    <div className="breadcrumb mt-6 lg:mt-9">
      <div className="flex space-x-1 items-center">
        <AiFillHome
          size={16}
          color={Colors.textBlack}
          className="hidden lg:block cursor-pointer"
          onClick={() => {
            navigation("/");
          }}
        />
        <AiFillHome
          size={13}
          color={Colors.textBlack}
          className="lg:hidden cursor-pointer"
          onClick={() => {
            navigation("/");
          }}
        />

        {navigations.map((data, index) => (
          <div className="flex justify-center items-center" key={index}>
            <BiChevronRight
              size={18}
              color={Colors.textBlack}
              className="hidden lg:block"
            />
            <BiChevronRight
              size={13}
              color={Colors.textBlack}
              className="lg:hidden"
            />
            <p
              className="text-xs text-textBlack font-primayfont font-semibold items-center lg:text-base cursor-pointer"
              onClick={() => {
                navigation(onPressRoutes[index]);
              }}
            >
              {data}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
