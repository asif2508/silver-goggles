import React, { useState } from "react";
import Img from "../../images/Group_214.svg";
import Icon from "../../images/Ellipse.svg";
import { AiFillCreditCard } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

import Header from "../Header/Header";
const ManageProfileDash = () => {
  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  };
  return (
    <div>
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
      <p className="font-primayfont font-bold text-dark-blue text-xl">
        Manage Profile
      </p>
      <div className="flex flex-row mt-6">
        <button
          className={
            showtab === 1
              ? "w-36 h-8 font-primayfont text-dark-blue font-medium text-base underline bg-primary"
              : "w-36 h-8 font-primayfont text-dark-blue font-medium text-base"
          }
          onClick={() => handletab(1)}
        >
          Basic Information
        </button>
        <button className={
             showtab === 2
            ? "ml-9 w-28 h-8 font-primayfont text-dark-blue font-medium text-base underline bg-primary"
            : "ml-9 w-28 h-8 font-primayfont text-dark-blue font-medium text-base"
        }
        onClick={()=>handletab(2)}
        >
          Login Security
        </button>
      </div>

      <div className={showtab===1?"":"hidden"}>
        <div className="flex flex-row">
          <img className="mt-6" src={Img} />
          <button
            className=" font-primayfont mt-14 ml-4 w-48 h-12 text-white  rounded-lg font-bold text-base"
            style={{
              background: " linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
            }}
          >
            Choose Photo
          </button>
        </div>
        {/* Basic information from start */}
       
          <form className="pr-4" >
            <div class="mb-4">
              <label
                class="block text-textBlack text-sm font-normal font-primayfont mb-2"
                for="username"
              >
                Country
              </label>
              <input
                class=" rounded w-full h-12 text-gray-700 leading-6 border-grey border-2 pl-4"
                id="username"
                type="text"
                placeholder="Name Your Country"
                style={{
                  borderColor: "rgba(0, 16, 60, 0.15)",
                }}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-textBlack text-sm font-normal font-primayfont mb-2"
                for="username"
              >
                Phone Number
              </label>
              <input
                class=" rounded w-full h-12 text-gray-700 leading-6 border-grey border-2 pl-4"
                id="username"
                type="text"
                placeholder="1234567890"
                style={{
                  borderColor: "rgba(0, 16, 60, 0.15)",
                }}
              />
            </div>
            <label
              class="block text-textBlack text-sm font-normal font-primayfont mb-2"
              for="username"
            >
              Enter your timezone
            </label>
            <div
              class=" rounded w-full h-12 text-gray-700 border-2 pl-4 mb-4"
              style={{
                borderColor: "rgba(0, 16, 60, 0.15)",
              }}
            >
              <input
                className="outline-none w-full"
                id="username"
                type="select"
                placeholder="IST"
              />
              {/* <IoIosArrowDown /> */}
            </div>
            <div class="mb-4">
              <label
                class="block text-textBlack text-sm font-normal font-primayfont mb-2"
                for="username"
              >
                What is your domain?
              </label>
              <input
                class=" rounded w-full h-12 text-gray-700 leading-6 border-grey border-2 pl-4"
                id="username"
                type="text"
                placeholder="Computer Science"
                style={{
                  borderColor: "rgba(0, 16, 60, 0.15)",
                }}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-textBlack text-sm font-normal font-primayfont mb-2"
                for="username"
              >
                Company/school
              </label>
              <input
                class=" rounded w-full h-12 text-gray-700 leading-6 border-grey border-2 pl-4"
                id="username"
                type="text"
                placeholder="Name of Your Company/School"
                style={{
                  borderColor: "rgba(0, 16, 60, 0.15)",
                }}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-textBlack text-sm font-normal font-primayfont mb-2"
                for="username"
              >
                About you
              </label>
              <textarea
                class=" rounded w-full h-36 pt-3 text-gray-700 leading-6 border-grey border-2 pl-4"
                id="username"
                type="text"
                placeholder="Tell us something about you"
                style={{
                  borderColor: "rgba(0, 16, 60, 0.15)",
                }}
              />
            </div>
            <button
              className=" font-primayfont mt-6 mb-14 w-48 h-12 text-white  rounded-lg font-bold text-base"
              style={{
                background:
                  " linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
              }}
            >
              Update
            </button>
          </form>
        
      </div>
      {/* Basic Infromation from end */}

      {/* Login security form start */}
      <div class={showtab===2?"pt-6 pr-4":"hidden"}>
        <form className="mr-4">
          <div class="mb-4">
            <label
              class="block text-textBlack text-sm font-normal font-primayfont mb-2"
              for="username"
            >
              Email
            </label>
            <input
              class=" rounded w-full h-12 text-gray-700 leading-6 border-grey border-2 pl-4"
              id="username"
              type="email"
              placeholder="email@example.com"
              style={{
                borderColor: "rgba(0, 16, 60, 0.15)",
              }}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-textBlack text-sm font-normal font-primayfont mb-2"
              for="username"
            >
              Password
            </label>
            <input
              class=" rounded w-full h-12 text-gray-700 leading-6 border-grey border-2 pl-4"
              id="username"
              type="password"
              placeholder="Your Password here"
              style={{
                borderColor: "rgba(0, 16, 60, 0.15)",
              }}
            />
          </div>
          <button
            className=" font-primayfont mt-6  w-full h-12 text-white  rounded-lg font-bold text-base"
            style={{
              background: " linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
            }}
          >
            Update
          </button>
          <button className=" font-primayfont mt-4 mb-14 w-full h-12 text-white bg-red rounded-lg font-bold text-base">
            Delete Account
          </button>
        </form>
      </div>
      {/* login security form end here */}
      </div>
    </div>
    </div>
    
  );
};

export default ManageProfileDash;
