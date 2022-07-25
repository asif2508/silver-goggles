import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import Colors from "../../utils/Colors";
import Breadcrumb from "../Component/Breadcrumb";
import Header from "../Header/Header";
import MapComponent from "./MapComponent";
import { BsSearch } from "react-icons/bs";

const VaibhavComponent = () => {
  const searchChips = [
    "ui design",
    "product design",
    "web designer",
    "counselling",
    "english",
    "Video editing",
    "iit",
    "Startup",
  ];
  return (
    <>
      <div className="min-h-half mb-24">
        <Header />
        <hr
          className="hidden lg:block "
          style={{ color: Colors.white_smoke }}
        />
        <div className="ml-4  mt-9 lg:ml-24">
          <Breadcrumb navigations={["Our Mentors"]} />
        </div>
        <div className="ml-4 mt-6 lg:ml-24">
          <div className="flex flex-col lg:flex-row">
            <div
              className="rounded-lg  h-12 flex py-3 px-4 lg:flex-row border-2 font-primayfont"
              style={{
                borderColor: Colors.border,
                color: Colors.text_color,
              }}
            >
              <input
              className="w-full outline-none border-none text-dark-blue"
                type="search"
                placeholder="Search by Company/College or Job Title"
              />
              <BsSearch className="text-dark-blue h-6 w-6 ml-2" />
            </div>
            <div className="flex justify-center items-center flex-row overflow-x-scroll  py-2  whitespace-nowrap font-primayfont lg:px-3 scrollbar-hide">
              <div
                className=" rounded-lg  h-12 pl-3 border-2 pt-2 inline-flex"
                style={{borderColor: Colors.border }}
              >
                <button
                  className="text-base font-primayfont font-normal  text-dark-blue "
                  
                >
                  Domain Expertise
                </button>{" "}
                <span className="w-6 h-6 items-center text-center mt-2">
                  <IoIosArrowDown className="ml-1" />{" "}
                </span>
              </div>
              <div
                className=" rounded-lg  h-12 pl-3 border-2 ml-2 inline-flex"
                style={{borderColor: Colors.border }}
              >
                <button
                  className="text-base font-primayfont  font-normal text-dark-blue "
                 
                >
                  Price
                </button>{" "}
                <span className="w-6 h-6 items-center text-center ml-2">
                  <IoIosArrowDown className="mt-3" />{" "}
                </span>
              </div>
              <div
                className=" rounded-lg  h-12 pl-3 pt-2 border-2 inline-flex ml-4"
                style={{borderColor: Colors.border }}
              >
                <button
                  className="text-base font-primayfont font-normal  text-dark-blue"
                 
                >
                  Availability
                </button>{" "}
                <span className="w-6 h-6 items-center text-center mt-1">
                  <IoIosArrowDown className="ml-1" />{" "}
                </span>
              </div>
              <div
                className=" rounded-lg  h-12 pl-3 pt-2 border-2 inline-flex ml-4"
                style={{borderColor: Colors.border }}
              >
                <button
                  className="text-base font-primayfont font-normal mb-2 text-dark-blue"
                 
                >
                  Services
                </button>{" "}
                <span className="w-6 h-6 items-center text-center mt-1">
                  <IoIosArrowDown className="ml-1 mt-1" />{" "}
                </span>
              </div>
              <div
                className="rounded-lg  h-12 pl-3 pt-2 border-2 inline-flex ml-4"
                style={{borderColor: Colors.border }}
              >
                <button
                  className="text-base w-10 font-normal mb-2 font-primayfont text-dark-blue"
                 
                >
                  Sort
                </button>{" "}
                <span className="w-6 h-6 items-center text-center mt-1">
                  <IoIosArrowDown className="mt-1" />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 px-4">
            <div>
              <h2 className="font-primayfont text-base font-medium text-dark-blue">
                Top Keywords :
              </h2>
            </div>
            <div className="my-4 flex w-full flex-wrap">
              {searchChips.map((text) => (
                <p
                  className="flex flex-row py-2 px-2 mb-4 capitalize rounded-lg   font-medium font-primayfont text-xs text-center items-center text-dark-blue mr-4  cursor-pointer"
                  style={{ background: Colors.grey }}
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="flex flex-row  mt-8">
              <GiCancel className="mt-1" />
              <p className="text-base flex text-dark-blue font-semibold ml-4 font-primayfont">
                Clear All Filter
              </p>
            </div>
          </div>
          <hr className="mt-6" style={{ color: Colors.hrgrey }} />
        </div>

        <MapComponent />
      </div>
    </>
  );
};

export default VaibhavComponent;
