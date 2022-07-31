import React from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import Colors from "../../utils/Colors";
import Constants from "../../utils/Constants";

const PopUpMentorBookNow = ({ visible, onClose }) => {
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
          className="bg-white shadow-xl p-2 rounded-lg w-2/3 font-primayfont pl-6 flex flex-col justify-center"
          style={{ width: 482 }}
        >
          <h1 className="font-bold text-2xl mt-4 h-8 font-primayfont text-dark-blue">
            Confirm Your Booking
          </h1>
          <h2 className="font-normal h-7 text-base font-primayfont text-dark-blue mt-1">
            Mentorship session with{" "}
            <span style={{ color: Colors["primary-dark"] }}>Kapil Batra</span>
          </h2>
          <div className="mb-4 mt-3 flex items-center">
            <AiOutlineCalendar
              color={Colors.dark_blue}
              className="h-6 w-6 mr-1"
            />
            <p className=" text-dark-blue font-primayfont text-base font-normal">
              Thu,12 jun
            </p>
            <AiOutlineClockCircle
              color={Colors.dark_blue}
              className="h-6 w-6 mr-1 ml-8"
            />
            <p className="text-dark-blue font-primayfont text-base font-normal">
              2:30 pm - 3:00 pm
            </p>
          </div>
          <hr style={{ color: Colors.lightgrey }} />
          <h1 className="font-normal text-base mt-6 font-primayfont text-dark-blue">
            Message for your mentor
          </h1>
          <textarea
            className="w-full h-40 mt-4 rounded-lg px-4 py-3 text-dark-blue"
            style={{ background: Colors.grey }}
            type="text"
            placeholder="Write about your doubts and other queries.."
          />{" "}
          <br />
          <div
            className="rounded-lg h-10 text-white cursor-pointer font-bold flex justify-center items-center mb-7 w-full mt-6 "
            style={{
              background: Constants.gradient,
            }}
            onClick={onclose}
          >
            <p>Confirm Booking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpMentorBookNow;
