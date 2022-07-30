import React, { useState } from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import Colors from "../../utils/Colors";
import Header from "../Header/Header";
import Img from "../../images/Ellipse_9.svg";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillCreditCard } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineManageAccounts } from "react-icons/md";
import Icon from "../../images/Ellipse.svg";
import { Link, NavLink } from "react-router-dom";
import PopUpOtp from "./PopUpOtp";
import ChangeMindPopUp from "./ChangeMindPopUp";


const SessionDashBoard = () => {
  const [showMyModel, setMyModel] = useState(false);
  const handleOnClose = () => setMyModel(false);

  const [show, setShow] = useState(true);
  return (
    <div className="min-h-half">
      {" "}
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
      <div className="flex flex-col lg:flex-row mx-6">
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
        <div className="lg:ml-11 lg:pr-24">
        <p className="font-primayfont text-dark-blue font-bold text-xl capitalize">
          Your Sessions
        </p>
        <div className=" border-2 mt-4 rounded-lg pl-4 mb-12 py-4 lg:w-full">
          <div className="flex flex-row">
            <div className="w-full">
              <p className="font-primayfont mt-4 text-dark-blue font-blue text-xl w-64">
                Mentorship Session With{" "}
                <p className="font-primayfont text-xl font-bold text-primary ">
                  Kapil Batra
                </p>
              </p>
            </div>

            <IoIosArrowDown
              onClick={() => setShow(!show)}
              className="mt-10 w-6 h-6 mr-6 lg:mr-6"
            />
          </div>

          <p className="font-primayfont text-primar-second font-normal text-base llg:pr-26 ">
            Pending
          </p>
          <div className="flex flex-row items-center text-center">
            <AiOutlineCalendar className="w-6 h-6" />
            <p className="font-primayfont ml-1 ">Thu, 12 Jun</p>
            <AiOutlineClockCircle className="ml-2 w-6 h-6" />
            <p className="font-primayfont ml-1">Thu, 12 Jun</p>
          </div>

          {show ? (
            <div className="lg:w-full">
              <hr className="mt-4" style={{ color: Colors.lightgrey }} />
              <p className="font-primayfont text-dark-blue font-bold text-base mt-4">
                Mentor:
              </p>
              <div className="mt-2 flex flex-row ">
                <div>
                  <img className="h-14 w-14" src={Img} alt="image" />
                </div>
                <div className="ml-2">
                  <p className="font-primayfont text-dark-blue font-medium text-base">
                    kapil Batra
                  </p>
                  <p
                    className="font-primayfont  font-normal text-sm"
                    style={{ color: Colors.dark_grey }}
                  >
                    UI/UX Designer, MetaCube
                  </p>
                </div>
              </div>
              <p className="mt-6 font-primayfont font-bold text-dark-blue text-base">
                Meeting Link:
              </p>
              <Link to="/">http://meet.google.com/kir-ubci-qgx</Link>
              <p className="mt-6 font-primayfont font-bold text-dark-blue text-base">
                Your Notes:
              </p>
              <p className="font-primayfont text-dark-blue font-normal text-base mt-2">
                Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                Commodo venena tis adipiscing duis sed. Odio euismod tincidunt
                amet, lacus, viverra vitae. Quisque in morbi semper aenean
                aliquam, massa egestas vulputate.
              </p>
              <p className="font-primayfont font-bold mt-6 text-dark-blue">
                Created:
                <span className="font-primayfont font-normal text-dark-blue">
                  May 20,2022
                </span>
              </p>
              <p className="font-primayfont font-bold mt-2 text-dark-blue">
                Paid:
                <span className="font-primayfont font-normal text-dark-blue">
                  ₹699/-
                </span>
              </p>
              <div className="mt-6">
                <button className="bg-primary font-bold text-base text-white w-80 h-12 rounded-lg text-center items-center">
                  Join Meeting
                </button>
                <button className="bg-primary font-bold text-base text-white w-80 h-12 rounded-lg text-center items-center my-4 md:justify-between"
               onClick={() => setMyModel(true)}
                >
                  Change Your Mind?
                </button>
              </div>
            </div>
          ) : null}
        </div>
        </div>
      </div>
      <ChangeMindPopUp onClose={handleOnClose} visible={showMyModel} />
    </div>
  );
};

export default SessionDashBoard;
