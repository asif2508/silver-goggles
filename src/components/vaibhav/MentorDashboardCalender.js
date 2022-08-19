import React, { useState } from "react";
import HeaderSeprater from "../Component/HeaderSeprater";
import Header from "../Header/Header";
import DashboardMentorNavigator from "./DashboardMentorNavigator";
import Colors from "../../utils/Colors";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import BasicTimePicker from "./BasicTimePicker";

const Slots = ({ data }) => {
  const [showswitch, setShowswitch] = useState(true);
  const [value, setValue] = useState(null);
  const [isAddClicked, setisAddClicked] = useState(false);

  function getTime(val) {
    setValue(val.target.value);
  }

  return (
    <div>
      <div className="py-8 flex flex-col justify-center items-center">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-row">
            <FormControlLabel
              onClick={() => setShowswitch(!showswitch)}
              control={<Switch />}
            />

            <p className="font-primayfont font-bold mt-2 text-base text-dark-blue">
              {data.day}
            </p>
          </div>
          <div className="font-primayfont hidden lg:flex text-dark-blue text-xs font-medium flex-wrap space-y-4">
            {
              data.timings.map((item, index) => {
                return (
                  <div className="flex bg-buttongrey px-2 py-1 rounded-l w-max justify-center items-center">
                    <p className="">{item.startTime} To {item.endTime}</p>
                    <AiOutlineClose className="ml-1 h-3 w-3" />
                  </div>
                )
              })
            }
          </div>
          <div>
            <AiOutlinePlus size={24} onClick={() => setisAddClicked(true)} />
          </div>
        </div>
        <div className="px-11 w-full">
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
          <div className="font-primayfont flex lg:hidden mt-6 text-dark-blue text-xs font-medium flex-wrap w-full">
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
      <hr
        className="w-full"
        style={{ color: Colors.hrlightBlue }}
      />
    </div>
  )
}

const MentorDashboardCalender = () => {
  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  };

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
        {
          "startTime": "1:00",
          "endTime": "2:00"
        }
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
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <DashboardMentorNavigator activeCalender={true} />
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
            <hr
              className="w-full"
              style={{ color: Colors.hrlightBlue }}
            />

            <div className="flex flex-col mt-5">
              {check.map((data, index) => (
                <Slots key={index} data={data} />
              ))}
            </div>

            <hr
              className="w-full"
              style={{ color: Colors.hrlightBlue }}
            />
            <button className="font-primayfont font-bold text-base bg-primary px-28 h-12 rounded-lg mt-12 text-white">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboardCalender;
