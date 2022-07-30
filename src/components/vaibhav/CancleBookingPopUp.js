import React from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import Colors from "../../utils/Colors";

const PopUpOtp = () => {
 
  return (
    <div
      className="w-full justify-center h-full flex items-center"
      style={{ boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.3)" }}
    >
      <div
        id="container"
       
        className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex justify-center items-center"
        style={{ width: "100%" }}
      >
        <div
          className="bg-white shadow-xl p-2 rounded-lg w-2/3 font-primayfont pl-6 flex flex-col justify-center"
          style={{ width: 482 }}
        >
         <p className="font-primayfont font-bold">Cancle Your Booking</p>
          <div
            className="rounded-lg h-10 text-white cursor-pointer font-bold flex justify-center items-center mb-7 w-full mt-6 "
            style={{
              background: "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
            }}
            
          >
            <p>Verify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpOtp;
