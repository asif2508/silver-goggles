import { lineHeight } from "@mui/system";
import React from "react";
import Colors from "../../utils/Colors";

const MyModel = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;

  return (
    <div className="w-full justify-center h-full flex items-center">
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
          <h1
            className="font-bold text-xl mt-4 h-8"
            style={{ Color: Colors.dark_blue }}
          >
            Confirm Your Booking
          </h1>
          <h2 className="font-normal h-7 text-sm">
            Mentorship session with{" "}
            <span style={{ color: Colors["primary-dark"] }}>Kapil Batra</span>
          </h2>
          <div className="inline-flex mb-4">
            <p>Thu,12 jun</p>
            <p className="ml-8">2:30 pm - 3:00 pm</p>
          </div>
          <hr />
          <h1 className="font-normal text-base mt-3">
            Message for your mentor
          </h1>
          <textarea
            className="w-full h-40"
            style={{ background: Colors.grey }}
            type="text"
            placeholder=""
          />{" "}
          <br />
          <div
            className="rounded-lg h-10 text-white cursor-pointer font-bold flex justify-center items-center mb-7 w-full mt-6 "
            style={{
              background: "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
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

export default MyModel;
