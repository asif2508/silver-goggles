import React from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineManageAccounts } from "react-icons/md";
import Icon from "../../images/Ellipse.svg";
import CircleImg from '../../images/Group_7048.svg';
import Header from "../Header/Header";
import { Link, NavLink } from "react-router-dom";
import HomeDashBoard from "./HomeDashBoard";
import SessionDashBoard from "./SessionDashBoard";
const DashBoard = () => {
  return (
    <>
      <div className="ml-4">
        <Header />
        <div className="mt-6">
          <div className="flex flex-col  mx-32 w-32 h-32  ">
            <img className="w-16 h-16 mx-6" src={Icon} />
            <p className=" text-base text-dark-blue font-bold font-primayfont mt-2 ">
              Kalpesh Lohar
            </p>
            <p className="font-primayfont text-dark-blue text-xs mx-3 font-normal">
              Complete Profile
            </p>
          </div>
          <div className="flex flex-row overflow-x-scroll whitespace-nowrap font-primayfont scrollbar-hide">
          <Link to="/dashboard" >
            <div className="inline-flex items-center text-center">
              <BiHomeAlt />
              <p className="ml-2">Home</p>
              
            </div>
            </Link>
            <Link to="/dashboard/session">
            <div className="inline-flex items-center text-center ml-6">
              <AiFillCreditCard />
              <p className="ml-2">Session</p>
            </div>
            </Link>
            <Link to="/dashboard/mentor">
            <div className="inline-flex items-center text-center ml-6">
              <FiUsers />
              <p className="ml-2">Your mentors</p>
            </div>
            </Link>
            <Link to="/dashboard/manageprofile">
            <div className="inline-flex items-center text-center ml-6">
              <MdOutlineManageAccounts />
              <p className="ml-2">Manage Profile</p>
            </div>
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <p className="font-primayfont text-dark-blue font-bold text-xl">
            Upcoming Session
          </p>
          <p className="font-primayfont text-dark-blue font-normal text-sm mt-2">
            You have no Upcoming bookings
          </p>
          
            <button
              className="w-48 h-12 mx-24 mt-6 rounded-lg text-white font-bold text-base"
              style={{
                background: "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
              }}
            >
              Explore Mentors
            </button>
         <div className="mt-14 mb-12">
            <img src={CircleImg} />
         </div>
        </div>

      </div>
    </>
  );
};

export default DashBoard;
