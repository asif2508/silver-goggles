import React from "react";
import {  AiOutlineArrowDown, AiOutlinePlus } from "react-icons/ai";
import Colors from "../../utils/Colors";
import HeaderSeprater from "../Component/HeaderSeprater";
import Header from "../Header/Header";
import DashboardMentorNavigator from "./DashboardMentorNavigator";
import home from '../../images/home.svg';
import { IoIosArrowDown } from "react-icons/io";
import Icon from "../../images/Ellipse.svg";

const MentorDashboardPayment = () => {
  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <DashboardMentorNavigator activePayment={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full">
          <p className="font-primayfont font-bold text-xl text-dark-blue mt-9">
            Payments
          </p>
          <div className="flex flex-row justify-between pt-9">
            <div>
              <p className="font-primayfont font-medium text-xl text-dark-blue">
                Add Account
              </p>
            </div>
            <div>
              <AiOutlinePlus size={24} />
            </div>
          </div>
          <hr style={{ color: Colors.border }} className="mt-2 mb-6" />
         
          <div className="lg:flex lg:flex-row">
            <div className="lg:w-3/4">
              <label
                className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                htmlFor="username"
              >
                Add Account
              </label>
              <input
                className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
                id="username"
                type="text"
                placeholder="Choose"
                style={{
                  borderColor: "rgba(0, 16, 60, 0.15)",
                }}
              />
           
           
              <label
                className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                htmlFor="username"
              >
                Account Number
              </label>
              <input
                className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
                id="username"
                type="number"
                placeholder="1234567890"
                style={{
                  borderColor: "rgba(0, 16, 60, 0.15)",
                }}
              />
           
           
              <label
                className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                htmlFor="username"
              >
                IFSC Code
              </label>
              <input
                className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
                id="username"
                type="number"
                placeholder="1234567890"
                style={{
                  borderColor: "rgba(0, 16, 60, 0.15)",
                }}
              />
           
              <label
                className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                htmlFor="username"
              >
                Account Holder Name
              </label>
              <input
                className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
                id="username"
                type="text"
                placeholder="ABC"
                style={{
                  borderColor: "rgba(0, 16, 60, 0.15)",
                }}
              />
           </div>
            <div className="border-1 rounded-lg h-80 mx-14 mt-9 px-4 pt-6 mb-12 lg:w-1/4 lg:h-72">
                <div className="">
                    <img src={home}  alt="Home"/>
                    <p className="font-primayfont font-bold text-2xl text-dark-blue">Punjab National Bank</p>
                    <div className="flex flex-row">
                    <p className="font-primayfont font-bold text-base text-dark-blue">ACC: </p> <span className="font-primayfont text-dark-blue text-base">123456789012345</span>
                    </div>
                    <div className="flex flex-row">
                    <p className="font-primayfont font-bold text-base text-dark-blue">IFSC: </p> <span className="font-primayfont text-dark-blue text-base">ABC56789012DSC</span>
                    </div>
                    <div className="flex flex-row">
                    <p className="font-primayfont font-bold text-base text-dark-blue">HOLDER: </p> <span className="font-primayfont text-dark-blue text-base">ABC Name</span>
                    </div>
                </div>
            </div>
           
          </div>
         
          <button className=" h-12 mb-12 px-36 text-white font-bold rounded-lg lg:px-16" style={{background:"linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)"}}>Save</button>
          <div className="flex flex-row justify-between pt-9">
            <div>
              <p className="font-primayfont font-bold text-xl text-dark-blue">
                Payment Deatils
              </p>
            </div>
            <div>
              <IoIosArrowDown size={24} />
              
            </div>
          </div>
          <hr style={{ color: Colors.border }} className="mt-2 mb-6" />

          <div className="flex flex-row lg:w-max w-full  items-center lg:justify-center ">
          <img className="w-12 h-12 lg:w-12 lg:h-12" src={Icon} />
          <div className="w-full ml-4">
            <p className="w-full lg:w-max  text-base text-dark-blue font-bold font-primayfont mt-2 lg:text-xl">
              Kalpesh Lohar
            </p>
            <p className="w-full lg:w-max  font-primayfont text-dark-blue text-xs lg:text-sm font-normal mt-1">
              Complete Profile
            </p>
          </div>

        </div>
        <div className="flex flex-row justify-between">
        <div>
          <p className="font-primayfont font-bold text-dark-blue text-base pt-6">Thu, 12 Jun</p>
          <p className="font-primayfont text-dark-blue ">Last Payment</p>
        </div>
        <div>
          <p className="font-primayfont font-bold text-dark-blue text-base pt-6">Paid:<span>699/-</span></p>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboardPayment;
