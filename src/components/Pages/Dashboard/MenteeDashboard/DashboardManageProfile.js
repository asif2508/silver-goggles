import React, { useEffect, useState } from "react";
import Img from "../../../../images/Group_214.svg";
import HeaderSeprater from "../../../Component/HeaderSeprater";
import Header from "../../../Header/Header";
import Colors from "../../../../utils/Colors";
import DashboardNavigator from "../../../Component/MenteeDashboard/DashboardMenteeNavigator";
import { useNavigate } from "react-router-dom";

const DashBoardManageProfile = () => {
  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  };
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <DashboardNavigator activeManageProfile={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full mb-14">
          <p className="font-primayfont text-dark-blue font-bold text-xl capitalize mt-7">
            Manage Profile
          </p>
          <div className="flex flex-row h-9 mt-6 lg:justify-between">
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
          </div>
          <hr
            className="w-full -mt-1 lg:w-96"
            style={{ color: Colors.hrlightBlue }}
          />
          <div className={showtab === 1 ? "lg:max-w-md" : "hidden"}>
            <div className="flex flex-row items-center pt-6">
              <img src={Img} />
              <button
                className="font-primayfont ml-4 py-2 h-12 px-9 text-white rounded-lg font-bold text-base"
                style={{
                  background:
                    " linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                }}
              >
                Choose Photo
              </button>
            </div>
            {/* Basic information from start */}

            <form className="mt-4">
              <div className="mb-4">
                <label
                  className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                  htmlFor="username"
                >
                  Country
                </label>
                <input
                  className="rounded-lg w-full py-3 text-gray-700 border-textInputBorder outline-white border-1 px-4"
                  id="username"
                  type="text"
                  placeholder="Name Your Country"
                  border-hrlightBlue
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                  htmlFor="username"
                >
                  Phone Number
                </label>
                <input
                  className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
                  id="username"
                  type="text"
                  placeholder="1234567890"
                  border-hrlightBlue
                />
              </div>
              <label
                className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                htmlFor="username"
              >
                Enter your timezone
              </label>
              <div
                className="rounded-lg w-full  py-3 text-gray-700 border-1 px-4 mb-4"
                border-htlightblue
              >
                <input
                  className="outline-none w-full"
                  id="username"
                  type="select"
                  placeholder="IST"
                />
                {/* <IoIosArrowDown /> */}
              </div>
              <div className="mb-4">
                <label
                  className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                  htmlFor="username"
                >
                  What is your domain?
                </label>
                <input
                  className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
                  id="username"
                  type="text"
                  placeholder="Computer Science"
                  border-hrlightBlue
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                  htmlFor="username"
                >
                  Company/school
                </label>
                <input
                  className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
                  id="username"
                  type="text"
                  placeholder="Name of Your Company/School"
                  border-hrlightBlue
                />
              </div>
              <div>
                <label
                  className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                  htmlFor="username"
                >
                  About you
                </label>
                <textarea
                  className=" rounded-lg w-full h-36 pt-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
                  id="username"
                  type="text"
                  placeholder="Tell us something about you"
                  border-hrlightBlue
                />
              </div>
              <button
                className=" font-primayfont mt-6 w-48 py-3 text-white  rounded-lg font-bold text-base"
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
          <div className={showtab === 2 ? "pt-6" : "hidden"}>
            <form className="lg:max-w-md">
              <div className="mb-2">
                <label
                  className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  className="rounded-lg w-full py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
                  id="username"
                  type="email"
                  placeholder="email@example.com"
                  border-hrlightBlue
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                  htmlFor="username"
                >
                  Password
                </label>
                <input
                  className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
                  id="username"
                  type="password"
                  placeholder="Your Password here"
                  border-hrlightBlue
                />
              </div>
              <button
                className=" font-primayfont mt-6  w-full  py-3 text-white  rounded-lg font-bold text-base"
                style={{
                  background:
                    " linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                }}
              >
                Update
              </button>
              <button className=" font-primayfont mt-4 w-full  py-3 text-white bg-red rounded-lg font-bold text-base">
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

export default DashBoardManageProfile;
