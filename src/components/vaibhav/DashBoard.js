import React, { useState, useEffect } from "react";
import { AiFillCreditCard, AiOutlineClose } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineManageAccounts } from "react-icons/md";
import Icon from "../../images/Ellipse.svg";
import CircleImg from "../../images/Group_7048.svg";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Colors from "../../utils/Colors";
import PopUpOtp from "./PopUpOtp";

const DashBoard = () => {
  const [showMyModel, setMyModel] = useState(false);
  const handleOnClose = () => setMyModel(false);

  const[isClicked, setisClicked] = useState(false);
  return (
    <>
      <div className="min-h-half">
        <Header />
        <div
          className="w-full hidden lg:block"
          style={{
            borderColor: "rgba(0, 16, 60, 0.15)",
            backgroundColor: "rgba(0, 16, 60, 0.15)",
            borderWidth: 0.5,
            borderStyle: "solid",
          }}
        />
        <div className="flex flex-col lg:flex-row">
          <div className="mt-6 px-4 flex flex-col lg:pl-28 lg:pr-28 lg:h-screen">
            <div className="flex flex-col w-full lg:flex-row items-center ">
              <img className="w-16 h-16" src={Icon} />
              <div className="w-full lg:ml-4">
                <p className="w-full lg:w-max text-center text-base text-dark-blue font-bold font-primayfont mt-2 ">
                  Kalpesh Lohar
                </p>
                <p className="w-full lg:w-max text-center font-primayfont text-dark-blue text-xs font-normal">
                  Complete Profile
                </p>
              </div>
            </div>
            <div className="flex flex-row lg:mt-16 lg:flex-col overflow-x-scroll whitespace-nowrap font-primayfont scrollbar-hide">
              <Link to="/dashboard">
                <div className="inline-flex items-center text-center">
                  <BiHomeAlt />
                  <p className="ml-2">Home</p>
                </div>
              </Link>
              <Link to="/dashboard/session" className="lg:mt-7">
                <div className="inline-flex items-center text-center ml-6 lg:ml-0">
                  <AiFillCreditCard />
                  <p className="ml-2">Session</p>
                </div>
              </Link>
              <Link to="/dashboard/mentor" className="lg:mt-7">
                <div className="inline-flex items-center text-center ml-6 lg:ml-0">
                  <FiUsers />
                  <p className="ml-2">Your mentors</p>
                </div>
              </Link>
              <Link to="/dashboard/manageprofile" className="lg:mt-7">
                <div className="inline-flex items-center text-center ml-6 lg:ml-0">
                  <MdOutlineManageAccounts />
                  <p className="ml-2">Manage Profile</p>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="h-[150vh] hidden lg:block"
            style={{
              borderColor: "rgba(0, 16, 60, 0.15)",
              backgroundColor: "rgba(0, 16, 60, 0.15)",
              borderWidth: 0.5,
              borderStyle: "solid",
            }}
          />
          <div className="mt-12 px-4 lg:h-full lg:w-full">
            <div
              className={` flex-row items-center text-center pl-6 py-2 w-3/4 mb-10 rounded-lg  ${isClicked?"hidden":"flex"}`}
              style={{ background: Colors.bg_grey }}
            >
              <p className="font-primayfont font-normal text-base text-dark-blue">
                Complete profile by verifying your phone number.
              </p>
              <p
                className="text-primary font-primayfont font-semibold text-base cursor-pointer"
                onClick={() => setMyModel(true)}
              >
                Click Here.
              </p>
              <AiOutlineClose className={`h-6 w-6 ml-44` } onClick={()=>setisClicked(true)} />
            </div>
            <p className="font-primayfont text-dark-blue font-bold text-xl">
              Upcoming Session
            </p>
            <p className="font-primayfont text-dark-blue font-normal text-sm mt-2">
              You have no Upcoming bookings
            </p>

            <div className="flex justify-center items-center">
              <button
                className="h-12 mt-6 rounded-lg text-white font-bold text-base"
                style={{
                  background:
                    "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                }}
              >
                Explore Mentors
              </button>
            </div>
            <div className="mt-14 mb-12 w-full">
              <img src={CircleImg} className="w-full" />
            </div>
          </div>
        </div>
        <PopUpOtp onClose={handleOnClose} visible={showMyModel} />
      </div>
    </>
  );
};

export default DashBoard;
