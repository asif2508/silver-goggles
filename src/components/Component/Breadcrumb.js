import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import Colors from "../../utils/Colors";

const Breadcrumb = ({ navigations }) => {
  console.log(navigations);
  return (
    <div className="breadcrumb mt-6 lg:mt-9">
      <div className="flex space-x-1 items-center">
        <AiFillHome
          size={16}
          color={Colors.textBlack}
          className="hidden lg:block"
        />
        <AiFillHome size={13} color={Colors.textBlack} className="lg:hidden" />

        {navigations.map((data, index) => (
          <div className="flex justify-center items-center">
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
            <p className="text-xs text-textBlack font-primayfont font-semibold items-center lg:text-base">
              {data}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
