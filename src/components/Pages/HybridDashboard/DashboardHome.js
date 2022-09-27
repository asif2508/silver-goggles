import React, { useState } from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import Colors from "../../../utils/Colors";
import CustomButton from "../../Component/CustomButton";
import HeaderSeprater from "../../Component/HeaderSeprater";
import HybridDashboardNavigator from "../../Component/HybridDashboardNavigator";
import Img from '../../../images/Ellipse_9.svg'
import Header from "../../Header/Header";

const DashboardHome = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <HybridDashboardNavigator activeHome={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full">
           <p className="font-primayfont text-2xl font-bold mt-12">Upcoming Sessions</p>

          <div className="border-1 border-textInputBorder mb-6 rounded-lg px-4 py-4 lg:px-9 lg:py-9 lg:w-full mt-7 max-w-sessionWidth">
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
                {show ? (
                  <IoIosArrowDown onClick={() => setShow(!show)} size={24} />
                ) : (
                  <IoIosArrowUp onClick={() => setShow(!show)} size={24} />
                )}
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
                  Thu 12 June
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

            {show ? (
              <div className="lg:w-full">
                <hr className="mt-4" style={{ color: Colors.textInputBorder }} />
                <p className="font-primayfont text-dark-blue font-bold text-base mt-4">
                  Mentee:
                </p>
                <div className="mt-2 flex flex-row ">
                  <div>
                    <img className="h-14 w-14" src={Img} alt="sample" />
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
                  Mentee's Notes:
                </p>
                <p className="font-primayfont text-dark-blue font-normal text-base mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo venenatis adipiscing duis sed. Odio euismod tincidunt amet, lacus, viverra vitae. Quisque in morbi semper aenean aliquam, massa egestas vulputate.
                </p>
                <div className="mt-6 flex flex-col lg:flex-row lg:justify-between">
                  <p className="font-primayfont font-bold text-base text-dark-blue">
                    Created:
                    <span className="font-primayfont ml-1 font-normal text-dark-blue">
                      May 20,2022
                    </span>
                  </p>
                  <p className="font-primayfont font-bold text-base mt-2 lg:mt-0 text-dark-blue">
                    Payment Received:
                    <span className="font-primayfont ml-1 font-normal text-dark-blue">
                      ₹699/-
                    </span>
                  </p>
                </div>
                <div className="mt-6 flex flex-col lg:flex-row lg:space-x-6">
                  <div className="">
                    <CustomButton text="Accept" styleClass="w-full lg:w-max" />
                  </div>
                  <button className="py-2 px-8 rounded-lg text-white bg-red font-bold text-base font-primayfont w-full lg:w-max mt-4  lg:mt-0"> Decline</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
