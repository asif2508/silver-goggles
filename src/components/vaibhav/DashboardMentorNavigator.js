import React from "react";
import { AiFillCreditCard, AiOutlineCalendar } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineManageAccounts, MdOutlinePayments, MdOutlineReviews } from "react-icons/md";
import Icon from "../../images/Ellipse.svg";
import { Link } from "react-router-dom";
import Colors from "../../utils/Colors";


const DashboardMentorNavigator = ({
  activeHome = false,
  activeSession = false,
  activeManagePackage = false,
  activeCalender = false,
  activePayment = false,
  activeReview = false,
  activeManageProfile = false,
}) => {
  return (
    <>
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
          <Link to="/mentor/dashboard/mentordashboardhome" className="">
            <div className="inline-flex items-center text-center h-full">
              <BiHomeAlt
                size={20}
                color={activeHome ? Colors["primay-light"] : Colors.dark_blue}
              />
              <p
                className={`ml-2 lg:ml-4 font-primayfont text-sm font-semibold align-middle mt-1 lg:text-lg ${
                  activeHome ? "text-primary" : "text-dark-blue"
                } `}
              >
                Home
              </p>
            </div>
          </Link>
          <Link to="/mentor/dashboard/mentordashboardsession" className="ml-6 lg:ml-0 lg:mt-5">
            <div className="inline-flex items-center text-center h-full">
              <AiFillCreditCard
                size={20}
                color={
                  activeSession ? Colors["primay-light"] : Colors.dark_blue
                }
              />
              <p
                className={`ml-2 lg:ml-4 font-primayfont text-sm font-semibold align-middle mt-1 lg:text-lg ${
                  activeSession ? "text-primary" : "text-dark-blue"
                } `}
              >
               Your Session
              </p>
            </div>
          </Link>
          <Link to="#" className="ml-6 lg:ml-0 lg:mt-5">
            <div className="inline-flex items-center text-center h-full">
              <FiUsers
                size={20}
                color={
                  activeManagePackage ? Colors["primay-light"] : Colors.dark_blue
                }
              />
              <p
                className={`ml-2 lg:ml-4 font-primayfont text-sm font-semibold align-middle mt-1 lg:text-lg ${
                  activeManagePackage ? "text-primary" : "text-dark-blue"
                } `}
              >
               Manage Packages
              </p>
            </div>
          </Link>
          <Link
            to="/mentor/dashboard/mentordashboardcalender"
            className="ml-6 lg:ml-0 lg:mt-5"
          >
            <div className="inline-flex items-center text-center h-full">
              <AiOutlineCalendar
                size={20}
                color={
                  activeCalender
                    ? Colors["primay-light"]
                    : Colors.dark_blue
                }
              />
              <p
                className={`ml-2 lg:ml-4 font-primayfont text-sm font-semibold align-middle mt-1 lg:text-lg ${
                  activeCalender ? "text-primary" : "text-dark-blue"
                } `}
              >
               Calender
              </p>
            </div>
          </Link>
          <Link
            to="/mentor/dashboard/mentordashboardpayment"
            className="ml-6 lg:ml-0 lg:mt-5"
          >
            <div className="inline-flex items-center text-center h-full">
              <MdOutlinePayments
                size={20}
                color={
                  activePayment
                    ? Colors["primay-light"]
                    : Colors.dark_blue
                }
              />
              <p
                className={`ml-2 lg:ml-4 font-primayfont text-sm font-semibold align-middle mt-1 lg:text-lg ${
                  activePayment ? "text-primary" : "text-dark-blue"
                } `}
              >
               Payments
              </p>
            </div>
          </Link>
          <Link
            to="/mentor/dashboard/mentordashboardreview"
            className="ml-6 lg:ml-0 lg:mt-5"
          >
            <div className="inline-flex items-center text-center h-full">
              <MdOutlineReviews
                size={20}
                color={
                  activeReview
                    ? Colors["primay-light"]
                    : Colors.dark_blue
                }
              />
              <p
                className={`ml-2 lg:ml-4 font-primayfont text-sm font-semibold align-middle mt-1 lg:text-lg ${
                  activeReview ? "text-primary" : "text-dark-blue"
                } `}
              >
               Reviews
              </p>
            </div>
          </Link>
          <Link
            to="/mentor/dashboard/mentordashboardmanageprofile"
            className="ml-6 lg:ml-0 lg:mt-5"
          >
            <div className="inline-flex items-center text-center h-full">
              <MdOutlineManageAccounts
                size={20}
                color={
                  activeManageProfile
                    ? Colors["primay-light"]
                    : Colors.dark_blue
                }
              />
              <p
                className={`ml-2 lg:ml-4 font-primayfont text-sm font-semibold align-middle mt-1 lg:text-lg ${
                  activeManageProfile ? "text-primary" : "text-dark-blue"
                } `}
              >
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
    </>
  );
};

export default DashboardMentorNavigator;
