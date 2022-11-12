import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Img from "../../../images/Ellipse_9.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HybridDashboardNavigator from "../../Component/HybridDashboardNavigator";
import Colors from "../../../utils/Colors";
import CustomButton from "../../Component/CustomButton";
import Header from "../../Header/Header";
import HeaderSeprater from "../../Component/HeaderSeprater";

import { sessionDetails } from "./UserData";

const DashboardSession = () => {
  const [showMyModel, setMyModel] = useState(false);
  const navigate = useNavigate();

  const [apiData, setapiData] = useState([]);

  const sessions = [
    {
      sessionWith: "Kapil Batra",
      designation: "UI/UX Designer, MetaCube",
      isCompleted: false,
      date: "Thu, 12 Jun",
      time: "2:30 pm - 3:00 pm",
      meetLink: "http://meet.google.com/kir-ubci-qgx",
      notes:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Commodo venena tis adipiscing duis sed. Odio euismod tincidunt amet, lacus, viverra vitae. Quisque in morbi semper aenean aliquam, massa egestas vulputate.",
      createdAt: "May 20, 2022",
      paid: "₹699/-",
    },
    {
      sessionWith: "Kapil Batra",
      designation: "UI/UX Designer, MetaCube",
      isCompleted: true,
      date: "Thu, 12 Jun",
      time: "2:30 pm - 3:00 pm",
      meetLink: "http://meet.google.com/kir-ubci-qgx",
      notes:
        "Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Commodo venena tis adipiscing duis sed. Odio euismod tincidunt amet, lacus, viverra vitae. Quisque in morbi semper aenean aliquam, massa egestas vulputate.",
      createdAt: "May 20, 2022",
      paid: "₹699/-",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    sessionDetails(setapiData);
  }, [navigate, apiData]);

  const MentorshipComponent = ({ data }) => {
    console.log(data);
    const [show, setShow] = useState(data.isCompleted ? false : true);

    return (
      <div
        key={data.mentor.id}
        className="border-1 border-textInputBorder mb-6 rounded-lg px-4 py-4 lg:px-9 lg:py-9 lg:w-full"
      >
        <div className="flex flex-row">
          <div className="w-11/12">
            <p className="font-primayfont font-bold text-dark-blue font-blue text-xl lg:text-2xl">
              Mentorship Session With
              <span className="font-primayfont text-xl lg:text-2xl ml-1 lg:ml-2 font-bold text-primary ">
                {data.mentor.name === null ? "Unavailable" : data.mentor.name}
              </span>
            </p>
          </div>
          <div className="w-1/12 flex justify-center items-center">
            {show ? (
              <IoIosArrowDown onClick={() => setShow(!show)} size={24} />
            ) : (
              <IoIosArrowUp onClick={() => setShow(!show)} size={24} />
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse justify-between">
          <p
            className={`font-primayfont mt-2 font-normal text-base lg:pr-26 ${
              data.isCompleted ? "text-green" : "text-primar-second"
            }`}
          >
            {data.paymentDetails.status === "Paid" ? "Completed" : "Pending"}
          </p>
          <div className="flex flex-row mt-2 items-center text-center">
            <AiOutlineCalendar className="w-6 h-6" color={Colors.dark_blue} />
            <p className="font-primayfont ml-1 text-dark-blue text-sm lg:text-base font-normal">
              {data.session.date === null ? "Unavailable" : data.session.date}
            </p>
            <AiOutlineClockCircle
              className="ml-4 w-6 h-6"
              color={Colors.dark_blue}
            />
            <p className="font-primayfont ml-1 text-dark-blue text-sm lg:text-base font-normal">
              {data.session.time === null ? "Unavailable" : data.session.time}
            </p>
          </div>
        </div>

        {show ? (
          <div className="lg:w-full">
            <hr className="mt-4" style={{ color: Colors.textInputBorder }} />
            <p className="font-primayfont text-dark-blue font-bold text-base mt-4">
              Mentee:
            </p>
            <div className="mt-2 flex flex-row ">
              <div>
                <img className="h-14 w-14" src={Img} alt="img" />
              </div>
              <div className="ml-2">
                <p className="font-primayfont capitalize text-dark-blue font-medium text-base">
                  {data.mentor.name === null ? "Unavailable" : data.mentor.name}
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
              Your Notes:
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
                  text="Join Meeting"
                  styleClass="w-full lg:w-max"
                />
              </div>
              <div className="">
                <CustomButton
                  text="Change Your Mind?"
                  styleClass="mt-4 w-full lg:mt-0 lg:w-max"
                  onClick={() => setMyModel(true)}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <HybridDashboardNavigator activeSession={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full mb-14">
          <p className="font-primayfont text-dark-blue font-bold text-xl capitalize mt-7">
            Your Sessions
          </p>

          <div className="flex flex-col space-y-6 mt-4 max-w-sessionWidth">
            {apiData &&
              apiData.map((data, index) => {
                return <MentorshipComponent data={data} key={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSession;
