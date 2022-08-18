import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import Constants from "../constants/Constants";
import Colors from "../utils/Colors";
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
            className="bg-white shadow-xl p-2 rounded-lg w-2/3 font-primayfont pl-6 flex flex-col justify-center"
            style={{ width: 482 }}
          >
            <div>
              <div className="items-center text-center">
                <BsCheck2Circle className="text-green  w-16 h-16 justify-between" />
              </div>
              <p className="font-primayfont font-bold text-dark-blue text-2xl text-center">
                WELL DONE!
              </p>
              <p className="font-primayfont font-medium text-base text-dark-blue mt-2">
                Thankyou for partnering with us. We hope and wish that you will
                become a very good mentor and we will be able to grow
              </p>
              <p className="font-primayfont font-medium text-base text-dark-blue text-center">
                together as a team.
              </p>
              <div className="items-center text-center justify-between mt-5">
              <button
                style={{
                  background:
                    "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                }}
                className="rounded-lg h-12 px-16 text-white "
              >
                Go To Dashboard
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WellDonePopUp;
