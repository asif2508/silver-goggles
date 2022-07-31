import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import CircleImg from "../../images/Group_7048.svg";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import Colors from "../../utils/Colors";
import PopUpOtp from "./PopUpOtp";
import HeaderSeprater from "../Component/HeaderSeprater";
import DashboardNavigator from "../Component/DashboardMenteeNavigator";

const DashBoard = () => {
  const [showMyModel, setMyModel] = useState(false);
  const handleOnClose = () => setMyModel(false);
  const navigation = useNavigate();

  const [isClicked, setisClicked] = useState(false);

  const mentors = [
    {
      img: "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
      name: "Brooklyn Simmons",
      designation: "Product Designer",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
      name: "Brooklyn Simmons",
      designation: "Product Designer",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
      name: "Brooklyn Simmons",
      designation: "Product Designer",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
      name: "Brooklyn Simmons",
      designation: "Product Designer",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
      name: "Brooklyn Simmons",
      designation: "Product Designer",
    },
  ];

  return (
    <>
      <div className="min-h-half">
        <Header />
        <HeaderSeprater />

        <div className="flex flex-col lg:flex-row">
          <DashboardNavigator activeHome={true} />
          <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full">
            <div
              className={`inline-flex px-3 py-2 max-w-lg rounded-lg w-full flex-wrap mt-7 ${
                isClicked ? "hidden" : "flex"
              }`}
              style={{ background: Colors.bg_grey }}
            >
              <p className="font-primayfont font-normal text-base text-dark-blue w-11/12">
                Complete profile by verifying your phone number.
                <span
                  className="text-primary font-primayfont font-semibold text-base cursor-pointer ml-1"
                  onClick={() => setMyModel(true)}
                >
                  Click Here.
                </span>
              </p>
              <AiOutlineClose
                size={24}
                className="w-1/12"
                onClick={() => setisClicked(true)}
              />
            </div>
            <p className="font-primayfont mt-9 text-dark-blue font-bold text-xl">
              Upcoming Session
            </p>
            <p className="font-primayfont text-dark-blue font-normal text-sm mt-2">
              You have no Upcoming bookings
            </p>

            <div className="flex justify-center items-center lg:justify-start">
              <button
                className="py-2 px-7 mt-6 rounded-lg text-white font-bold text-base"
                style={{
                  background:
                    "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                }}
                onClick={() => navigation("/mentors")}
              >
                Explore Mentors
              </button>
            </div>

            <div className="mt-8 w-full flex justify-center items-center">
              <img
                src={CircleImg}
                className="w-full sm:w-3/4 md:w-2/3 lg:w-6/12 lg:max-w-threethirty"
              />
            </div>

            <div className="mt-10">
              <div className="flex justify-between items-end">
                <p className="font-primayfont text-dark-blue font-bold text-xl">
                  Recommended Mentors
                </p>
                <p
                  className="font-primayfont text-primar-second font-medium text-base cursor-pointer"
                  onClick={() => navigation("/mentors")}
                >
                  See all
                </p>
              </div>
              <div className="mt-5 mb-20">
                {mentors.map((mentor, index) => {
                  return (
                    <div className="mb-5 flex justify-between">
                      <div className="flex flex-col lg:w-max w-full lg:flex-row items-center lg:justify-center ">
                        <img className="w-12 h-12" src={mentor.img} />
                        <div className="ml-3">
                          <p className="w-full text-base text-dark-blue font-medium">
                            {mentor.name}
                          </p>
                          <p className="w-full text-sm text-grey">
                            {mentor.designation}
                          </p>
                        </div>
                      </div>
                      <div>
                        <button className="px-8 py-2 border-1 border-textInputBorder rounded-lg text-dark-blue">
                          View profile
                        </button>
                        <button className="ml-6 px-8 py-2 border-1 border-textInputBorder rounded-lg text-dark-blue">
                          Book
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <PopUpOtp onClose={handleOnClose} visible={showMyModel} />
      </div>
    </>
  );
};

export default DashBoard;
