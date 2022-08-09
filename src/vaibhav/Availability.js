import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Header from "../components/Header/Header";
import Colors from "../utils/Colors";
import Calendar from "react-calendar";

const Availability = () => {
  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  };

  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <>
      <div className="min-h-half">
        <Header />
        <div className="py-9 pl-4 lg:pl-24">
          <p className="font-primayfont font-bold text-xl text-dark-blue">
            Availability
          </p>
          <p className="font-primayfont font-normal text-sm text-dark-blue pt-4 lg:w-1/2">
            Let us know when are you available to accept the sessions. You can
            customize these as per your requirements in future. Click on the
            plus icon to add multiple slots of your availibility.
          </p>
          <p className="font-primayfont font-normal text-sm text-dark-blue pt-6">
            Your timezone (Asia/Calcutta){" "}
            <span className="font-primayfont font-semibold text-primary">
              Updated
            </span>
          </p>

          <div className="flex flex-row pt-6 overflow-x-scroll scrollbar-hide">
            <div>
              <p
                className="font-medium text-base w-max pb-1 text-dark-blue"
                onClick={() => handletab(1)}
              >
                Previous Mentors
              </p>
              {showtab === 1 && <div className="h-1 bg-primary rounded-full" />}
            </div>
            <div className="ml-6">
              <p
                className="font-medium text-base w-max pb-1 text-dark-blue"
                onClick={() => handletab(2)}
              >
                Favourite Mentors
              </p>
              {showtab === 2 && <div className="h-1 bg-primary rounded-full" />}
            </div>
          </div>
          <hr
            className="w-full -mt-1 lg:w-96"
            style={{ color: Colors.hrlightBlue }}
          />

          <div
            className={
              showtab === 1
                ? "flex flex-wrap mt-6 justify-evenly lg:justify-start "
                : "hidden"
            }
          ></div>

          <div className={showtab === 2 ? "  " : "hidden"}>
            <div className="py-6">
              <Calendar onChange={onChange} value={date} />
              {console.log(date)}
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row rounded-lg border-2 py-2 px-12">
                <MdOutlineKeyboardArrowLeft  className=" mt-1"/>
                <p>Back</p>
              </div>
              <div className="pl-4">
                <button
                  className="h-12 text-white font-bold rounded-lg px-11"
                  style={{
                    background:
                      "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Availability;

{
  /* <div className="flex flex-row pt-6 ">
<div className="rounded-lg flex flex-row border-2 py-2 px-12">
    <MdOutlineKeyboardArrowLeft className="w-4 h-4 mt-1" />
    <p className="font-primayfont font-bold text-base text-dark-blue">Back</p>
</div>
<div className="pl-4">
<button className="h-12 text-white font-bold rounded-lg px-11" style={{background:"linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)"}}>Continue</button>
</div>
</div> */
}
