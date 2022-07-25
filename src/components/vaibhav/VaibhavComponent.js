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

  const mentors = [
    {
      img: "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
      name: "Kalpesh Lohar",
      designation: "Product Designer",
      study: "B.Tech in Computer Science",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing el it. Faucibus mauris semper massa ultrices eget sit vu lputate. Ante diam metus convallis nullam.",
      skills: ["UI Design", "Product Design", "Web Design", "Counselling"],
      price: "₹699 Onwards",
      isFavourite: true,
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
      name: "Kalpesh Lohar",
      designation: "Product Designer",
      study: "B.Tech in Computer Science",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing el it. Faucibus mauris semper massa ultrices eget sit vu lputate. Ante diam metus convallis nullam.",
      skills: ["UI Design", "Product Design", "Web Design", "Counselling"],
      price: "₹699 Onwards",
      isFavourite: false,
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png",
      name: "Kalpesh Lohar",
      designation: "Product Designer",
      study: "B.Tech in Computer Science",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing el it. Faucibus mauris semper massa ultrices eget sit vu lputate. Ante diam metus convallis nullam.",
      skills: ["UI Design", "Product Design", "Web Design", "Counselling"],
      price: "₹699 Onwards",
      isFavourite: true,
    },
  ];
  return (
    <>
      <div className="min-h-half">
        <Header />
        <hr
          className="hidden lg:block "
          style={{ color: Colors.white_smoke }}
        />
        <div className="ml-4 mt-8 lg:ml-24">
          <Breadcrumb navigations={["Our Mentors"]} />
        </div>
        <div className="px-4 mt-6 lg:ml-24">
          <div className="flex flex-col lg:flex-row">
            <div
              className="rounded-lg h-12 flex py-3 px-4 lg:flex-row justify-center items-center"
              style={{
                borderColor: Colors.border,
                borderWidth: 1,
                color: Colors.text_color,
              }}
            >
              <input
                className="w-full outline-none border-none text-dark-blue text-sm font-normal"
                type="search"
                placeholder="Search by Company/College or Job Title"
              />
              <BsSearch className="text-dark-blue h-6 w-6 ml-2" />
            </div>
            <div className="flex mt-6 flex-row overflow-x-scroll whitespace-nowrap font-primayfont lg:px-3 scrollbar-hide">
              <div
                className="rounded-lg py-2 inline-flex px-3 justify-center items-center"
                style={{ borderColor: Colors.border, borderWidth: 1 }}
              >
                <p className="text-base font-primayfont font-normal text-dark-blue  ">
                  Domain Expertise
                </p>
                <IoIosArrowDown className="ml-1 w-5 h-5" />
              </div>
              <div
                className="rounded-lg py-2 inline-flex px-3 justify-center items-center ml-3"
                style={{ borderColor: Colors.border, borderWidth: 1 }}
              >
                <p className="text-base font-primayfont font-normal text-dark-blue  ">
                  Price
                </p>
                <IoIosArrowDown className="ml-1 w-5 h-5" />
              </div>
              <div
                className="rounded-lg py-2 inline-flex px-3 justify-center items-center ml-3"
                style={{ borderColor: Colors.border, borderWidth: 1 }}
              >
                <p className="text-base font-primayfont font-normal text-dark-blue  ">
                  Availability
                </p>
                <IoIosArrowDown className="ml-1 w-5 h-5" />
              </div>
              <div
                className="rounded-lg py-2 inline-flex px-3 justify-center items-center ml-3"
                style={{ borderColor: Colors.border, borderWidth: 1 }}
              >
                <p className="text-base font-primayfont font-normal text-dark-blue  ">
                  Services
                </p>
                <IoIosArrowDown className="ml-1 w-5 h-5" />
              </div>
              <div
                className="rounded-lg py-2 inline-flex px-3 justify-center items-center ml-3"
                style={{ borderColor: Colors.border, borderWidth: 1 }}
              >
                <p className="text-base font-primayfont font-normal text-dark-blue  ">
                  Sort
                </p>
                <IoIosArrowDown className="ml-1 w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div>
              <h2 className="font-primayfont text-base font-semibold text-dark-blue">
                Top Keywords:
              </h2>
            </div>
            <div className="my-4 flex w-full flex-wrap">
              {searchChips.map((text) => (
                <p
                  className="flex flex-row py-2 px-3 mb-4 capitalize rounded-lg  font-medium font-primayfont text-base text-center items-center text-dark-blue mr-3  cursor-pointer"
                  style={{ background: Colors.grey }}
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="flex flex-row mt-7 items-center">
              <GiCancel className="" />
              <p className="text-base flex text-dark-blue font-semibold ml-1 font-primayfont">
                Clear All Filter
              </p>
            </div>
          </div>
          <hr className="mt-6 -mx-4" style={{ color: Colors.hrgrey }} />
        </div>
        <div className="flex flex-wrap mt-9 justify-evenly">
          {mentors.map((data, index) => (
            <MapComponent data={data} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VaibhavComponent;
