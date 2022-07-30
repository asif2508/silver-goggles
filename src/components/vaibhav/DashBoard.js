import React, { useState, useEffect } from "react";
import { AiFillCreditCard, AiOutlineClose } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineManageAccounts } from "react-icons/md";
import Icon from "../../images/Ellipse.svg";
import CircleImg from "../../images/Group_7048.svg";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import Colors from "../../utils/Colors";
import PopUpOtp from "./PopUpOtp";
import HeaderSeprater from "../Component/HeaderSeprater";

const DashBoard = () => {
  const [showMyModel, setMyModel] = useState(false);
  const handleOnClose = () => setMyModel(false);
  const navigation = useNavigate();

  const [isClicked, setisClicked] = useState(false);
  return (
    <>
      <div className="min-h-half">
        <Header />
        <HeaderSeprater />

        <div className="flex flex-col lg:flex-row">
          <div className="mt-6 px-4 flex flex-col lg:items-center lg:h-screen">
            <div className="flex flex-col lg:w-max w-full lg:flex-row items-center lg:justify-center ">
              <img className="w-16 h-16 lg:w-20 lg:h-20" src={Icon} />
              <div className="w-full lg:ml-4">
                <p className="w-full lg:w-max text-center text-base text-dark-blue font-bold font-primayfont mt-2 lg:text-xl">
                  Kalpesh Lohar
                </p>
                <p className="w-full lg:w-max text-center font-primayfont text-dark-blue text-xs lg:text-sm font-normal mt-1">
                  Complete Profile
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-row lg:px-28 lg:mt-16 lg:flex-col overflow-x-scroll sm:justify-center whitespace-nowrap font-primayfont scrollbar-hide">
              <Link to="/dashboard" className="">
                <div className="inline-flex items-center text-center h-full">
                  <BiHomeAlt size={18} color={Colors["primay-light"]} />
                  <p className="ml-2 font-primayfont text-primary text-sm font-semibold align-middle mt-1 lg:text-lg">
                    Home
                  </p>
                </div>
              </Link>
              <Link to="/dashboard/session" className="ml-6 lg:ml-0 lg:mt-5">
                <div className="inline-flex items-center text-center h-full">
                  <AiFillCreditCard size={18} color={Colors.dark_blue} />
                  <p className="ml-2 font-primayfont text-dark-blue text-sm font-semibold align-middle mt-1 lg:text-lg">
                    Session
                  </p>
                </div>
              </Link>
              <Link to="/dashboard/mentor" className="ml-6 lg:ml-0 lg:mt-5">
                <div className="inline-flex items-center text-center h-full">
                  <FiUsers size={18} color={Colors.dark_blue} />
                  <p className="ml-2 font-primayfont text-dark-blue text-sm font-semibold align-middle mt-1 lg:text-lg">
                    Your mentors
                  </p>
                </div>
              </Link>
              <Link
                to="/dashboard/manageprofile"
                className="ml-6 lg:ml-0 lg:mt-5"
              >
                <div className="inline-flex items-center text-center h-full">
                  <MdOutlineManageAccounts size={18} color={Colors.dark_blue} />
                  <p className="ml-2 font-primayfont text-dark-blue text-sm font-semibold align-middle mt-1 lg:text-lg">
                    Manage Profile
                  </p>
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
          <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full">
            <div
              className={`inline-flex px-3 py-2 max-w-lg rounded-lg w-full flex-wrap mt-7 ${
                isClicked ? "hidden" : "flex"
              }`}
              style={{ background: Colors.bg_grey }}
            >
              <p className="font-primayfont font-normal text-base text-dark-blue w-11/12">
                Complete profile by verifying your phone number.
                <span
                  className="text-primary font-primayfont font-semibold text-base cursor-pointer ml-1"
                  onClick={() => setMyModel(true)}
                >
                  Click Here.
                </span>
              </p>
              <AiOutlineClose
                size={24}
                className="w-1/12"
                onClick={() => setisClicked(true)}
              />
            </div>
            <p className="font-primayfont mt-9 text-dark-blue font-bold text-xl">
              Upcoming Session
            </p>
            <p className="font-primayfont text-dark-blue font-normal text-sm mt-2">
              You have no Upcoming bookings
            </p>

            <div className="flex justify-center items-center lg:justify-start">
              <button
                className="py-2 px-7 mt-6 rounded-lg text-white font-bold text-base"
                style={{
                  background:
                    "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                }}
                onClick={() => navigation("/mentors")}
              >
                Explore Mentors
              </button>
            </div>

            <div className="mt-14 mb-12 w-full flex justify-center items-center">
              <img
                src={CircleImg}
                className="w-full sm:w-3/4 md:w-2/3 lg:w-6/12"
              />
            </div>
          </div>
        </div>
        <PopUpOtp onClose={handleOnClose} visible={showMyModel} />
      </div>
    </>
  );
};

export default DashBoard;
