import React, { useState } from "react";
import Img from "../../images/Group_214.svg";
import Header from "../Header/Header";
import HeaderSeprater from "../Component/HeaderSeprater";
import DashboardNavigator from "../Component/DashboardMenteeNavigator";

const ManageProfileDash = () => {
  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  };
  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <DashboardNavigator activeManageProfile={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full">
          <p className="font-primayfont font-bold text-dark-blue text-xl mt-7">
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
            <button
              className={
                showtab === 2
                  ? "ml-9 w-28 h-8 font-primayfont text-dark-blue font-medium text-base underline bg-primary"
                  : "ml-9 w-28 h-8 font-primayfont text-dark-blue font-medium text-base"
              }
              onClick={() => handletab(2)}
            >
              Login Security
            </button>
          </div>

          <div className={showtab === 1 ? "" : "hidden"}>
            <div className="flex flex-row">
              <img className="mt-6" src={Img} />
              <button
                className=" font-primayfont mt-14 ml-4 w-48 h-12 text-white  rounded-lg font-bold text-base"
                style={{
                  background:
                    " linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                }}
              >
                Choose Photo
              </button>
            </div>
            {/* Basic information from start */}

            <form className="pr-4">
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
          <div class={showtab === 2 ? "pt-6 pr-4" : "hidden"}>
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
                  background:
                    " linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
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
