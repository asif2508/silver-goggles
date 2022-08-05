import React,{useState} from "react";
import Colors from "../../utils/Colors";
import HeaderSeprater from "../Component/HeaderSeprater";
import Header from "../Header/Header";
import DashboardMentorNavigator from "./DashboardMentorNavigator";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import Img from "../../images/Ellipse_9.svg";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const MentorDashboardHome = () => {
  const [showMyModel, setMyModel] = useState(false);
  const handleOnClose = () => setMyModel(false);
  const navigation = useNavigate();

  const [isClicked, setisClicked] = useState(false);
  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <DashboardMentorNavigator activeHome={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full">
        <div
              className={`inline-flex px-3 py-2 max-w-lg rounded-lg w-full flex-wrap mt-20 ${
                isClicked ? "hidden" : "flex"
              }`}
              style={{ background: Colors.bg_grey }}
            >
              <p className="font-primayfont font-normal text-base text-dark-blue w-11/12">
              View your demo profile which is visible to your mentees.
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
            <p className="font-primayfont text-2xl font-bold mt-12">Upcoming Sessions</p>

            <div className="border-1 border-textInputBorder mb-6 rounded-lg px-4 py-4 lg:px-9 lg:py-9 lg:w-full mt-7">
        <div className="flex flex-row">
          <div className="w-11/12">
            <p className="font-primayfont font-bold text-dark-blue font-blue text-xl lg:text-2xl">
              Mentorship Session With
              <span className="font-primayfont text-xl lg:text-2xl ml-1 lg:ml-2 font-bold text-primary ">
               Kalpesh Lohar
              </span>
            </p>
          </div>
          <div className="w-1/12 flex justify-center items-center">
           
              <IoIosArrowDown  />
         
              {/* <IoIosArrowUp onClick={() => setShow(!show)} size={24} /> */}
           
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse justify-between">
          <p
            className="font-primayfont mt-2 font-normal text-base lg:pr-26 text-primar-second" 
           
          >
           Pending
          </p>
          <div className="flex flex-row mt-2 items-center text-center">
            <AiOutlineCalendar className="w-6 h-6" color={Colors.dark_blue} />
            <p className="font-primayfont ml-1 text-dark-blue text-sm lg:text-base font-normal">
              THU 12 June
            </p>
            <AiOutlineClockCircle
              className="ml-4 w-6 h-6"
              color={Colors.dark_blue}
            />
            <p className="font-primayfont ml-1 text-dark-blue text-sm lg:text-base font-normal">
            2:30 pm - 3:00 pm
            </p>
          </div>
        </div>

       
          <div className="lg:w-full">
            <hr className="mt-4" style={{ color: Colors.textInputBorder }} />
            <p className="font-primayfont text-dark-blue font-bold text-base mt-4">
              Mentor:
            </p>
            <div className="mt-2 flex flex-row ">
              <div>
                <img className="h-14 w-14" src={Img} alt="image" />
              </div>
              <div className="ml-2">
                <p className="font-primayfont capitalize text-dark-blue font-medium text-base">
                 Kalpesh Lohar
                </p>
                <p
                  className="font-primayfont font-normal text-sm mt-1"
                  style={{ color: Colors.dark_grey }}
                >
                 Design Intern
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
             http://meet.google.com/kir-ubci-qgx
            </Link>
            <p className="mt-6 font-primayfont font-bold text-dark-blue text-base">
              Your Notes:
            </p>
            <p className="font-primayfont text-dark-blue font-normal text-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo venenatis adipiscing duis sed. Odio euismod tincidunt amet, lacus, viverra vitae. Quisque in morbi semper aenean aliquam, massa egestas vulputate.
            </p>
            <div className="mt-6 flex flex-col lg:flex-row lg:justify-between">
              <p className="font-primayfont font-bold text-base text-dark-blue">
                Created:
                <span className="font-primayfont ml-1 font-normal text-dark-blue">
                 MAY 20,2022
                </span>
              </p>
              <p className="font-primayfont font-bold text-base mt-2 lg:mt-0 text-dark-blue">
                Paid:
                <span className="font-primayfont ml-1 font-normal text-dark-blue">
                699
                </span>
              </p>
            </div>
            <div className="mt-6 flex flex-col lg:flex-row lg:space-x-6">
              <div className="">
              <button className="w-full lg:w-44 bg-primary font-bold text-white rounded-lg h-12">Accept</button>
              </div>
              <div className="">
                <button className="mt-4 w-full lg:mt-0 lg:w-44 bg-red text-white font-bold rounded-lg h-12"> Decline</button>
              </div>
            </div>
          </div>
       
      </div>















        </div>
      </div>
    </div>
  );
};

export default MentorDashboardHome;
