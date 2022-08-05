import React, { useState } from "react";
import HeaderSeprater from "../Component/HeaderSeprater";
import Header from "../Header/Header";
import DashboardMentorNavigator from "./DashboardMentorNavigator";
import calender from "../../images/calender.svg";
import { AiOutlinePlus } from "react-icons/ai";

import Switch from "@mui/material/Switch";
import { FormControlLabel, FormGroup } from "@mui/material";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MentorDashboardCalender = () => {
  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  };
  const [showswitch, setShowswitch] = useState(true);
  const [data, setData]=useState(null);
  const [print, setPrint]=useState(false);


  function getData(val)
  {
    setData(val.target.value)
    
  }
  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <DashboardMentorNavigator activeCalender={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full">
          <p className="font-primayfont font-bold text-xl text-dark-blue mt-16">
            Calender
          </p>
          <div className="flex flex-row">
            <img src={calender} alt="Calender" className=" h-12 " />
            <p className="font-primayfont font-bold text-xs lg:text-2xl text-dark-blue pl-3 pr-8 my-4">
              Google Calender
            </p>
            <button className="border-2 h-12 rounded-lg text-base py-2 px-5">
              Disconnect
            </button>
          </div>
          <p className="font-primayfont text-xl font-bold text-dark-blue pt-9">
            Availability
          </p>
          <p className="font-primayfont text-sm text-dark-blue font-normal py-2">
            Edit your availability & blockout dates.
          </p>
          <div className="flex flex-row lg:hidden ">
            <p className="font-primayfont text-sm text-dark-blue font-normal">
              Your timezone (Asia/Calcutta)
            </p>
            <span className="font-primayfont text-sm font-normal text-primar-second">
              Update
            </span>
          </div>
          <div className="mb-28">
            <div className="flex flex-row">
              <div>
                <p
                  className="font-medium text-base w-max pb-1 text-dark-blue"
                  onClick={() => handletab(1)}
                >
                  Basic Information
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
                  Login security
                </p>
                {showtab === 2 && (
                  <div className="h-1 bg-primary rounded-full" />
                )}
              </div>
            </div>
            <hr />
            <div className="flex flex-row justify-between py-8">
              <div className="flex flex-row">
                <FormControlLabel
                  onClick={() => setShowswitch(!showswitch)}
                  control={<Switch />}
                />

                <p className="font-primayfont font-bold text-base text-dark-blue">
                  SUNDAYS
                </p>
              </div>
              {showswitch ? (
                <p className="font-primayfont text-base text-grey ">
                  unavailable
                </p>
              ) : (
              

                <div className="" >
                  <div className="border-2 flex flex-row rounded-lg pl-2 w-32">
                 
                      <input
                        onChange={getData}
                        type="select"
                        className="outline-none border-none w-24"
                      />
                  
                      <IoIosArrowDown />
                    
                  </div>
                  <p>To</p>
                  <div className="border-2 flex flex-row rounded-lg pl-2 w-32">
                 
                      <input
                      onChange={getData}
                        type="select"
                        className="outline-none border-none w-24"
                      />
                  
                      <IoIosArrowDown />
                    
                  </div>
                </div>
              )}

                {
                  print?
                  <p>{data}</p>
                  :null
                }
              <div>
                <AiOutlinePlus onClick={()=>setPrint(true)} />
              </div>
            </div>

            <hr />
            <div className="flex flex-row justify-between py-8">
              <div className="flex flex-row">
                <FormControlLabel control={<Switch />} />

                <p className="font-primayfont font-bold text-base text-dark-blue">
                  MONDAYS
                </p>
              </div>
              <p className="font-primayfont text-base text-grey items-center text-center">
                unavailable
              </p>

              <div>
                <AiOutlinePlus />
              </div>
            </div>

            <hr />
            <div className="flex flex-row justify-between py-8">
              <div className="flex flex-row">
                <FormControlLabel control={<Switch />} />

                <p className="font-primayfont font-bold text-base text-dark-blue">
                  TUESDAY
                </p>
              </div>
              <p className="font-primayfont text-base text-grey items-center text-center">
                unavailable
              </p>

              <div>
                <AiOutlinePlus />
              </div>
            </div>

            <hr />
            <div className="flex flex-row justify-between py-8">
              <div className="flex flex-row">
                <FormControlLabel control={<Switch />} />

                <p className="font-primayfont font-bold text-base text-dark-blue">
                  WEDNESDAYS
                </p>
              </div>
              <p className="font-primayfont text-base text-grey items-center text-center">
                unavailable
              </p>

              <div>
                <AiOutlinePlus />
              </div>
            </div>

            <hr />
            <div className="flex flex-row justify-between py-8">
              <div className="flex flex-row ">
                <FormControlLabel control={<Switch />} />

                <p className="font-primayfont font-bold text-base text-dark-blue">
                  THRUSDAYS
                </p>
              </div>
              <p className="font-primayfont text-base text-grey items-center  text-center">
                unavailable
              </p>

              <div>
                <AiOutlinePlus />
              </div>
            </div>

            <hr />
            <div className="flex flex-row justify-between py-8">
              <div className="flex flex-row">
                <FormControlLabel control={<Switch />} />

                <p className="font-primayfont font-bold text-base text-dark-blue">
                  FRIDAYS
                </p>
              </div>
              <p className="font-primayfont text-base text-grey items-center text-center">
                unavailable
              </p>

              <div>
                <AiOutlinePlus />
              </div>
            </div>

            <hr />
            <div className="flex flex-row justify-between py-8">
              <div className="flex flex-row">
                <FormControlLabel control={<Switch />} />

                <p className="font-primayfont font-bold text-base text-dark-blue">
                  SATURDAYS
                </p>
              </div>
              <p className="font-primayfont text-base text-grey items-center text-center">
                unavailable
              </p>

              <div>
                <AiOutlinePlus />
              </div>
            </div>

            <hr />
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
