import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import Header from "../../../Header/Header";
import Colors from "../../../../utils/Colors";
import Calendar from "react-calendar";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import HrBottom from "../../../Component/HrBottom";
import CustomButton from "../../../Component/CustomButton";
import { useNavigate } from "react-router-dom";

const Slots = ({ data, navigate }) => {
  const [isAddClicked, setisAddClicked] = useState(false);
  const [switchOn, setswitchOn] = React.useState(false);

  function handleSwitchChange() {
    if (switchOn) {
      setswitchOn(false);
    } else {
      setswitchOn(true);
    };
  };

  React.useEffect(() => {
    if (data.timings.length > 0) {
      setswitchOn(true);
    } else {
      setswitchOn(false);
    }
  }, [navigate]);

  return (
    <div>
      <div className="py-8 flex flex-col justify-center items-center">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-row lg:w-56">
            <Switch onChange={handleSwitchChange} checked={switchOn} />

            <p className="font-primayfont font-bold mt-2 text-base text-dark-blue">
              {data.day}
            </p>
          </div>
          {/* for larger devices  */}
          <div className="px-11 w-full hidden lg:flex">
            <div className="font-primayfont hidden lg:flex mt-6 text-dark-blue text-xs font-medium flex-wrap w-full">
              {data.timings.length > 0 ?
                (data.timings.map((item, index) => {
                  return (
                    <div key={index} className="flex bg-buttongrey px-2 py-2 rounded-lg mr-2 w-max h-12 justify-start items-center mb-4">
                      <p className="">{item.startTime} To {item.endTime}</p>
                      <AiOutlineClose className="ml-1 h-3 w-3" />
                    </div>
                  )
                })) : (
                  <p className="text-text_color text-base font-primayfont w-full">Unavailable</p>
                )}
            </div>
            {isAddClicked && <div className="flex flex-col items-center mt-4 font-primayfont text-dark-blue text-base space-x-6">
              <div className="border-1 flex flex-row rounded-lg pl-2 items-center px-3 py-2">
                <p className="text-xs font-primayfont text-dark-blue w-max">9:00 AM</p>
                <IoIosArrowDown className="ml-1" color={Colors.dark_blue} />
              </div>
              <div className="flex mt-4 items-center">
                <p className="text-base font-bold mr-6">to</p>
                <div className="border-1 flex flex-row rounded-lg pl-2 items-center px-3 py-2">
                  <p className="text-xs font-primayfont text-dark-blue w-max">9:00 AM</p>
                  <IoIosArrowDown className="ml-1" color={Colors.dark_blue} />
                </div>
              </div>
            </div>}

          </div>
          <div>
            <AiOutlinePlus size={24} onClick={() => setisAddClicked(true)} />
          </div>
        </div>
        {/* for smaller devices  */}
        <div className="px-11 w-full flex flex-col lg:hidden">
          {isAddClicked && <div className="flex items-center mt-4 font-primayfont text-dark-blue space-x-6">
            <div className="border-1 flex flex-row rounded-lg pl-2 items-center px-3 py-2">
              <p className="text-xs font-primayfont text-dark-blue w-max">9:00 AM</p>
              <IoIosArrowDown className="ml-1" color={Colors.dark_blue} />
            </div>
            <p className="text-xs font-bold">to</p>
            <div className="border-1 flex flex-row rounded-lg pl-2 items-center px-3 py-2">
              <p className="text-xs font-primayfont text-dark-blue w-max">9:00 AM</p>
              <IoIosArrowDown className="ml-1" color={Colors.dark_blue} />
            </div>
          </div>}
          <div className="font-primayfont mt-6 text-dark-blue text-xs font-medium flex-wrap w-full">
            {data.timings.length > 0 ?
              (data.timings.map((item, index) => {
                return (
                  <div key={index} className="flex bg-buttongrey px-2 py-2 rounded-lg mr-2 w-max justify-start items-center mb-4">
                    <p className="">{item.startTime} To {item.endTime}</p>
                    <AiOutlineClose className="ml-1 h-3 w-3" />
                  </div>
                )
              })) : (
                <p className="text-text_color text-base font-primayfont w-full text-center">Unavailable</p>
              )}
          </div>
        </div>
      </div>
      <HrBottom />
    </div>
  )
}

const AddAvailability = () => {
  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  };

  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  const navigate = useNavigate();

  const check = [
    {
      "day": "Sunday",
      "timings": [
        {
          "startTime": "1:00",
          "endTime": "2:00"
        },
        {
          "startTime": "20:00",
          "endTime": "20:30"
        }
      ]
    },
    {
      "day": "Monday",
      "timings": [
      ]
    },
    {
      "day": "Tuesday",
      "timings": [
        {
          "startTime": "20:00",
          "endTime": "20:30"
        }
      ]
    },
    {
      "day": "Wednesday",
      "timings": [
        {
          "startTime": "10:00",
          "endTime": "12:00"
        },
        {
          "startTime": "20:00",
          "endTime": "20:30"
        }
      ]
    },
    {
      "day": "Thursday",
      "timings": [
        {
          "startTime": "10:00",
          "endTime": "12:00"
        }
      ]
    },
    {
      "day": "Friday",
      "timings": [
        {
          "startTime": "10:00",
          "endTime": "12:00"
        },
        {
          "startTime": "1:00",
          "endTime": "2:00"
        },
        {
          "startTime": "20:00",
          "endTime": "20:30"
        }
      ]
    },
    {
      "day": "Saturday",
      "timings": [
        {
          "startTime": "10:00",
          "endTime": "12:00"
        },
        {
          "startTime": "1:00",
          "endTime": "2:00"
        },
        {
          "startTime": "20:00",
          "endTime": "20:30"
        }
      ]
    }
  ];

  return (
    <>
      <div className="min-h-half">
        <Header />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full">
          <p className="font-primayfont text-xl font-bold text-dark-blue pt-9">
            Availability
          </p>
          <p className="font-primayfont text-sm mt-2 text-dark-blue font-normal py-2">
            Edit your availability & blockout dates.
          </p>
          <div className="mt-6">
            <div className="flex flex-row cursor-pointer">
              <div>
                <p
                  className="font-medium text-base w-max pb-1 text-dark-blue"
                  onClick={() => handletab(1)}
                >
                  Available Hours
                </p>
                {showtab === 1 && (
                  <div className="h-1 bg-primary rounded-full" />
                )}
              </div>
              <div className="ml-6">
                <p
                  className="font-medium text-base w-max pb-1 text-dark-blue"
                  onClick={() => handletab(2)}
                >
                  Blockout Dates
                </p>
                {showtab === 2 && (
                  <div className="h-1 bg-primary rounded-full" />
                )}
              </div>
            </div>
            <HrBottom />

            <div className={showtab === 1 ? "  " : "hidden"}>
              <div className="flex flex-col mt-5">
                {check.map((data, index) => (
                  <Slots key={index} navigate={navigate} data={data} />
                ))}
              </div>

              <CustomButton text='Continue' style='max-w-buttonWidth w-full mt-12 mb-28' />
            </div>

            <div className={showtab === 2 ? "  " : "hidden"}>
              <div className="py-6">
                <Calendar onChange={onChange} value={date} />
                {console.log(date)}
              </div>
              <div className="flex flex-row mb-28">
                <div
                  className="py-2 px-8 rounded-lg border-1 border-textInputBorder bg-white font-bold text-base font-primayfont max-w-buttonWidth w-full text-dark-blue flex justify-center items-center"
                >
                  <MdOutlineKeyboardArrowLeft className="mr-1" size={18} color={Colors.dark_blue} />
                  Back
                </div>
                <button
                  className="ml-4 py-2 px-8 rounded-lg text-white font-bold text-base font-primayfont max-w-buttonWidth w-full"
                  style={{
                    background: `linear-gradient(180deg, ${Colors["primay-light"]} 0%, ${Colors["primary-dark"]} 100%)`,
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

export default AddAvailability;