import React from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import greencheck from "../../../images/checkcirclegreen.svg";
import Colors from "../../../utils/Colors";
import CustomButton from "../CustomButton";

const Packages = ({ data }) => {
  return (
    <div
      className="rounded-lg mb-4 w-full px-4 py-6 flex flex-col"
      style={{ borderWidth: 1, borderColor: "rgba(0, 16, 60, 0.45)" }}
    >
      <div className="flex justify-between items-start w-full">
        <div>
          <h3 className="text-sm font-primayfont text-dark-blue font-medium">
            {data.name}
          </h3>
          <h2 className="text-xl mt-3 font-primayfont text-dark-blue font-bold">{`${data.price}/${data.duration}`}</h2>
        </div>
        <div>
          <BiChevronDown
            size={26}
            color={Colors.dark_blue}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div
        className="w-full mt-4"
        style={{
          borderColor: "rgba(0, 16, 60, 0.15)",
          borderWidth: 0.5,
          borderStyle: "solid",
        }}
      />
      <div className="features flex flex-col w-full">
        {data.features.map((feature, index) => (
          <div className="my-2 flex items-start">
            <img src={greencheck} alt="check" />
            <p className="text-base font-primayfont text-dark-blue font-normal ml-3">{feature}</p>
          </div>
        ))}
      </div>
      <div className="button mt-3">
        <CustomButton text={"Book Now"} />
      </div>
    </div>
  );
};

export default Packages;
