import React, { useState } from "react";
import Colors from "../../utils/Colors";

const ChangeMindPopUp = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;

 


  return (
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
          className="bg-white shadow-xl p-2 rounded-lg w-2/3 font-primayfont  flex flex-col justify-center"
          style={{ width: 254 }}
        >
          <button
            className="h-12 text-green border-2 rounded-lg"
          
            style={{ borderColor: Colors.hrgrey }}
          >
            Reschedule
          </button>
          <button
            className="h-12 text-red  border-2 rounded-lg mt-3"
           
            style={{ borderColor: Colors.hrgrey }}
          >
            Cancle
          </button>
          <div
            className="rounded-lg h-10 text-white cursor-pointer font-bold flex justify-center items-center  w-full mt-3 "
            style={{
              background: "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
            }}
            onClick={onclose}
          >
            <p>Change Your Mind</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ChangeMindPopUp;
