import React, { useState, useEffect } from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import Colors from "../../../utils/Colors";
import CustomButton from "../../Component/CustomButton";
import HeaderSeprater from "../../Component/HeaderSeprater";
import HybridDashboardNavigator from "../../Component/HybridDashboardNavigator";
import Img from "../../../images/Ellipse_9.svg";
import Header from "../../Header/Header";
import { sessionDetails } from "./UserData";

const DashboardHome = () => {
  const [show, setShow] = useState(true);
  const [apiData, setapiData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    sessionDetails(setapiData);
  }, []);

  console.log(apiData);

  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <HybridDashboardNavigator activeHome={true} />

        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full">
          <p className="font-primayfont text-2xl font-bold mt-12">
            Upcoming Sessions
          </p>
          {apiData &&
            apiData.map((data) => {
              return (
                <div className="border-1 border-textInputBorder mb-6 rounded-lg px-4 py-4 lg:px-9 lg:py-9 lg:w-full mt-7 max-w-sessionWidth">
                  <div className="flex flex-row">
                    <div className="w-11/12">
                      <p className="font-primayfont font-bold text-dark-blue font-blue text-xl lg:text-2xl">
                        Mentorship Session With
                        <span className="font-primayfont text-xl lg:text-2xl ml-1 lg:ml-2 font-bold text-primary ">
                          {data.mentor.name === null
                            ? "Unavailable"
                            : data.mentor.name}
                        </span>
                      </p>
                    </div>

                    <div className="w-1/12 flex justify-center items-center">
                      {show ? (
                        <IoIosArrowDown
                          onClick={() => setShow(!show)}
                          size={24}
                        />
                      ) : (
                        <IoIosArrowUp
                          onClick={() => setShow(!show)}
                          size={24}
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row-reverse justify-between">
                    <p className="font-primayfont mt-2 font-normal text-base lg:pr-26 text-primar-second">
                      {data.paymentDetails.status
                        ? data.paymentDetails.status
                        : "Pending"}
                    </p>
                    <div className="flex flex-row mt-2 items-center text-center">
                      <AiOutlineCalendar
                        className="w-6 h-6"
                        color={Colors.dark_blue}
                      />
                      <p className="font-primayfont ml-1 text-dark-blue text-sm lg:text-base font-normal">
                        {data.session.date === null
                          ? "Unavailable"
                          : data.session.date}
                      </p>
                      <AiOutlineClockCircle
                        className="ml-4 w-6 h-6"
                        color={Colors.dark_blue}
                      />
                      <p className="font-primayfont ml-1 text-dark-blue text-sm lg:text-base font-normal">
                        {data.session.time === null
                          ? "Unavailable"
                          : data.session.time}
                      </p>
                    </div>
                  </div>

                  {show ? (
                    <div className="lg:w-full">
                      <hr
                        className="mt-4"
                        style={{ color: Colors.textInputBorder }}
                      />
                      <p className="font-primayfont text-dark-blue font-bold text-base mt-4">
                        Mentee:
                      </p>
                      <div className="mt-2 flex flex-row ">
                        <div>
                          <img
                            className="h-14 w-14"
                            src={
                              data.mentor.profileImg
                                ? data.mentor.profileImg
                                : Img
                            }
                            alt="sample"
                          />
                        </div>
                        <div className="ml-2">
                          <p className="font-primayfont capitalize text-dark-blue font-medium text-base">
                            {data.mentor.name === null
                              ? "Unavailable"
                              : data.mentor.name}
                          </p>
                          <p
                            className="font-primayfont font-normal text-sm mt-1"
                            style={{ color: Colors.dark_grey }}
                          >
                            {data.mentor.designation === null
                              ? "Unavailable"
                              : data.mentor.designation}
                            ,
                            {data.mentor.company === null
                              ? "Unavailable"
                              : data.mentor.company}
                          </p>
                        </div>
                      </div>
                      <p className="mt-6 font-primayfont font-bold text-dark-blue text-base">
                        Meeting Link:
                      </p>
                      <Link
                        className="font-primayfont mt-2 text-base font-normal text-dark-blue"
                        to="/"
                      >
                        {data.session.meetLink === null
                          ? "Unavailable"
                          : data.session.meetLink}
                      </Link>
                      <p className="mt-6 font-primayfont font-bold text-dark-blue text-base">
                        Mentee's Notes:
                      </p>
                      <p className="font-primayfont text-dark-blue font-normal text-base mt-2">
                        {data.session.details === null
                          ? "Unavailable"
                          : data.session.details}
                      </p>
                      <div className="mt-6 flex flex-col lg:flex-row lg:justify-between">
                        <p className="font-primayfont font-bold text-base text-dark-blue">
                          Created:
                          <span className="font-primayfont ml-1 font-normal text-dark-blue">
                            {data.session.date}
                          </span>
                        </p>
                        <p className="font-primayfont font-bold text-base mt-2 lg:mt-0 text-dark-blue">
                          Payment Received:
                          <span className="font-primayfont ml-1 font-normal text-dark-blue">
                            {data.paymentDetails.amount === null
                              ? "Unavailable"
                              : data.paymentDetails.amount}
                          </span>
                        </p>
                      </div>
                      <div className="mt-6 flex flex-col lg:flex-row lg:space-x-6">
                        <div className="">
                          <CustomButton
                            text="Accept"
                            styleClass="w-full lg:w-max"
                          />
                        </div>
                        <button className="py-2 px-8 rounded-lg text-white bg-red font-bold text-base font-primayfont w-full lg:w-max mt-4  lg:mt-0">
                          {" "}
                          Decline
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
