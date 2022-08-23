import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import home from '../../../../images/home.svg';
import { IoIosArrowDown } from "react-icons/io";
import Icon from "../../../../images/Ellipse.svg";
import Header from "../../../Header/Header";
import HeaderSeprater from "../../../Component/HeaderSeprater";
import DashboardMentorNavigator from "../../../Component/MentorDashboard/DashboardMentorNavigator";
import HrBottom from "../../../Component/HrBottom";
import CustomButton from "../../../Component/CustomButton";

const MentorDashboardPayment = () => {
  const data = [
    {
      img: Icon,
      name: "Kalpesh Lohar",
      designation: "CTO",
      price: "699",
      date: "Thu, 12 Jun",
    },
    {
      img: Icon,
      name: "Kalpesh Lohar",
      designation: "CTO",
      price: "699",
      date: "Thu, 12 Jun",
    },
    {
      img: Icon,
      name: "Kalpesh Lohar",
      designation: "CTO",
      price: "699",
      date: "Thu, 12 Jun",
    },
  ];

  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <DashboardMentorNavigator activePayment={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full lg:max-w-sessionWidth">
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
          <HrBottom />

          <div className="mt-6 lg:flex lg:flex-row flex flex-col items-center lg:space-x-9 justify-between">
            <div className="lg:w-3/4 text-dark-blue font-primayfont w-full lg:max-w-md">
              <div>
                <label
                  className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                  htmlFor="username"
                >
                  Bank Name
                </label>
                <input
                  className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-hrlightBlue outline-white border-1 px-4"
                  id="bankname"
                  type="text"
                  placeholder="Enter Bank Name"
                />
              </div>
              <div className="mt-4">
                <label
                  className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                  htmlFor="username"
                >
                  Account Number
                </label>
                <input
                  className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-hrlightBlue outline-white border-1 px-4"
                  id="bankname"
                  type="text"
                  placeholder="1234567890"
                />
              </div>
              <div className="mt-4">
                <label
                  className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                  htmlFor="username"
                >
                  IFSC Code
                </label>
                <input
                  className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-hrlightBlue outline-white border-1 px-4"
                  id="bankname"
                  type="text"
                  placeholder="1234567890"
                />
              </div>
              <div className="mt-4">
                <label
                  className="block text-textBlack text-sm font-normal font-primayfont mb-2"
                  htmlFor="username"
                >
                  Account Holder Name
                </label>
                <input
                  className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-hrlightBlue outline-white border-1 px-4"
                  id="bankname"
                  type="text"
                  placeholder="ABC"
                />
              </div>
            </div>
            <div className="border-1 border-textInputBorder rounded-lg w-max mt-9 px-7 py-5 space-y-1">
              <img src={home} alt="Home" />
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

          <CustomButton text='Save' className="mt-12" style='w-full lg:max-w-buttonWidth w-full mt-12' />

          <div className="flex flex-row justify-between pt-9">
            <div>
              <p className="font-primayfont font-bold text-xl text-dark-blue">
                Payment Details
              </p>
            </div>
            <div>
              <IoIosArrowDown size={24} />
            </div>
          </div>
          <div className="mb-2 mt-2">
            <HrBottom />
          </div>
          <div className="mb-16">
            {
              data.map((item, index) => {
                return (
                  <RenderPayments data={item} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderPayments = ({ data }) => {
  return (
    <div className="mt-4">
      <div className="flex flex-row lg:w-max w-full  items-center lg:justify-center ">
        <img className="w-12 h-12 lg:w-12 lg:h-12" src={data.img} />
        <div className="w-full ml-4">
          <p className="w-full lg:w-max  text-base text-dark-blue font-bold font-primayfont mt-2 lg:text-xl">
            {data.name}
          </p>
          <p className="w-full lg:w-max  font-primayfont text-dark-blue text-xs lg:text-sm font-normal mt-1">
            {data.designation}
          </p>
        </div>

      </div>
      <div className="flex flex-row justify-between mb-4">
        <div>
          <p className="font-primayfont font-bold text-dark-blue text-base pt-6">{data.date}</p>
          <p className="font-primayfont text-dark-blue ">Last Payment</p>
        </div>
        <div>
          <p className="font-primayfont font-bold text-dark-blue text-base pt-6">Paid:<span className="font-normal"> {data.price}/-</span></p>
        </div>
      </div>
      <HrBottom />
    </div>
  )
}

export default MentorDashboardPayment;
