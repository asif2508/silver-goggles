import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import CustomButton from "../../../Component/CustomButton";

const WellDonePopUp = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <>
      <div
        className="w-full justify-center h-full flex items-center"
        style={{ boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.3)" }}
      >
        <div
          id="container"
          onClick={handleOnClose}
          className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex justify-center items-center"
          style={{ width: "100%" }}
        >
          <div
            className="bg-white shadow-xl p-2 rounded-lg w-11/12 font-primayfont px-6 flex flex-col justify-center items-center"
          >
            <BsCheck2Circle className="text-green w-16 h-16" />
            <p className="mt-3 font-primayfont font-bold text-dark-blue text-2xl text-center">
              WELL DONE!
            </p>
            <p className="font-primayfont font-medium text-base text-dark-blue mt-2">
              Thank you for partnering with us. We hope and wish that you will
              become a very good mentor and we will be able to grow together as a team.
            </p>
            <div className="items-center text-center justify-between mt-5">
              <CustomButton text="Go To Dashboard" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WellDonePopUp;
