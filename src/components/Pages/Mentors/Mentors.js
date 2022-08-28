import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Colors from "../../../utils/Colors";
import Breadcrumb from "../../Component/Breadcrumb";
import MentorBox from "../../Component/MentorBox";
import Header from "../../Header/Header";
import HeaderSeprater from "../../Component/HeaderSeprater";
import { Calendar } from "react-calendar";
import Slider from "@mui/material/Slider";
import HrBottom from "../../Component/HrBottom";

const Mentors = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const [isMenuOpen4, setIsMenuOpen4] = useState(false);
  const [isMenuOpen5, setIsMenuOpen5] = useState(false);

  const [value, setValue] = React.useState([2000, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `₹${value}`;
  }

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
      workIn: "Google",
      study: "B.Tech",
      studiedFrom: "IIT Bombay",
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
      workIn: "Google",
      study: "B.Tech",
      studiedFrom: "IIT Bombay",
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
      workIn: "Google",
      study: "B.Tech",
      studiedFrom: "IIT Bombay",
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
      workIn: "Google",
      study: "B.Tech",
      studiedFrom: "IIT Bombay",
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
        <HeaderSeprater />

        <div className="ml-4 mt-8 lg:ml-24">
          <Breadcrumb
            navigations={["Our Mentors"]}
            onPressRoutes={["/mentors"]}
          />
        </div>
        <div className="px-4 mt-6 lg:px-24">
          <div className="flex flex-col lg:flex-row">
            <div
              className="rounded-lg border-textInputBorder h-12 flex py-3 px-4 lg:flex-row justify-center text-text_color border-1 items-center lg:w-96"
            >
              <input
                className="w-full outline-none border-none text-dark-blue text-sm font-normal"
                type="search"
                placeholder="Search by Company/College or Job Title"
              />
              <BsSearch className="text-dark-blue h-6 w-6 ml-2" />
            </div>
            <div className="flex mt-6 lg:mt-0 flex-row overflow-x-scroll whitespace-nowrap font-primayfont lg:px-3 scrollbar-hide">
              <div
                className="rounded-lg py-2 h-12 inline-flex px-3 border-1 border-textInputBorder"
              >
                <p className="text-base pt-1 font-primayfont font-normal text-dark-blue  ">
                  Domain
                </p>
                {isMenuOpen ? (
                  <BsChevronUp
                    className="ml-1 mt-1 cursor-pointer"
                    size={20}
                    color={Colors.dark_blue}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  />
                ) : (
                  <BsChevronDown
                    className="ml-1 mt-1 cursor-pointer"
                    size={20}
                    color={Colors.dark_blue}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  />
                )}
              </div>
              {isMenuOpen && (
                <div
                  className="mt-14 rounded-lg bg-white cursor-pointer absolute"
                  style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
                >
                  <li className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-newGrey ">
                    Exam Prep Mentors
                  </li>
                  <li className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-newGrey ">
                    Start up Mentors
                  </li>
                  <li className="list-none px-4 py-1  text-dark-blue capitalize font-primayfont hover:bg-newGrey  ">
                    Product Management
                  </li>
                  <li className="list-none px-4 py-1  text-dark-blue capitalize font-primayfont hover:bg-newGrey  ">
                    Web Development
                  </li>
                  <li className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-newGrey  ">
                    Design
                  </li>
                </div>
              )}

              <div
                className="rounded-lg py-2 h-12 inline-flex px-3 justify-center items-center ml-3 border-1 border-textInputBorder"
              >
                <p className="text-base font-primayfont font-normal text-dark-blue  ">
                  Price
                </p>
                {isMenuOpen1 ? (
                  <BsChevronUp
                    className="ml-1 cursor-pointer"
                    size={20}
                    color={Colors.dark_blue}
                    onClick={() => setIsMenuOpen1(!isMenuOpen1)}
                  />
                ) : (
                  <BsChevronDown
                    className="ml-1 cursor-pointer"
                    size={20}
                    color={Colors.dark_blue}
                    onClick={() => setIsMenuOpen1(!isMenuOpen1)}
                  />
                )}
              </div>

              {isMenuOpen1 && (
                <div
                  className="mt-14 w-64 rounded-lg bg-white cursor-pointer absolute px-3 py-3"
                  style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
                >
                  <div className="flex justify-between w-full">
                    <p className="text-dark-blue font-primayfont">
                    </p>
                    <p className="text-dark-blue font-primayfont">
                      ₹{value[0]}
                    </p>
                  </div>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    min={0}
                    max={10000}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                  <div className="flex justify-between w-full">
                    <p className="text-dark-blue font-primayfont">
                      FREE
                    </p>
                    <p className="text-dark-blue font-primayfont">
                      ₹{value[1]}
                    </p>
                  </div>
                </div>
              )}
              <div
                className="rounded-lg py-2 h-12 inline-flex px-3 justify-center items-center ml-3 border-1 border-textInputBorder"
              >
                <p className="text-base font-primayfont font-normal text-dark-blue  ">
                  Availability
                </p>
                {isMenuOpen2 ? (
                  <BsChevronUp
                    className="ml-1 cursor-pointer"
                    size={20}
                    color={Colors.dark_blue}
                    onClick={() => setIsMenuOpen2(!isMenuOpen2)}
                  />
                ) : (
                  <BsChevronDown
                    className="ml-1 cursor-pointer"
                    size={20}
                    color={Colors.dark_blue}
                    onClick={() => setIsMenuOpen2(!isMenuOpen2)}
                  />
                )}
              </div>
              {isMenuOpen2 && (
                <div
                  className="ml-32 mt-14 rounded-lg bg-white cursor-pointer absolute"
                  style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
                >
                  <Calendar />
                </div>
              )}
              <div
                className="rounded-lg h-12 py-2 inline-flex px-3 justify-center items-center ml-3 border-textInputBorder border-1"
              >
                <p className="text-base font-primayfont font-normal text-dark-blue">
                  Services
                </p>
                {isMenuOpen3 ? (
                  <BsChevronUp
                    className="ml-1 cursor-pointer"
                    size={20}
                    color={Colors.dark_blue}
                    onClick={() => setIsMenuOpen3(!isMenuOpen3)}
                  />
                ) : (
                  <BsChevronDown
                    className="ml-1 cursor-pointer"
                    size={20}
                    color={Colors.dark_blue}
                    onClick={() => setIsMenuOpen3(!isMenuOpen3)}
                  />
                )}
              </div>
              {isMenuOpen3 && (
                <div
                  className="ml-80 mt-14 rounded-lg bg-white cursor-pointer absolute"
                  style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
                >
                  <li className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-newGrey ">
                    Quick call
                  </li>
                  <li className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-newGrey  ">
                    CV Review
                  </li>
                  <li className="list-none px-4 py-1  text-dark-blue capitalize font-primayfont hover:bg-newGrey  ">
                    Career Strategy
                  </li>
                </div>
              )}
              <div
                className="rounded-lg py-2 h-12 inline-flex px-3 justify-center items-center ml-3 border-1 border-textInputBorder"
              >
                <p className="text-base font-primayfont font-normal text-dark-blue">
                  Sort
                </p>
                {isMenuOpen4 ? (
                  <BsChevronUp
                    className="ml-1 cursor-pointer"
                    size={20}
                    color={Colors.dark_blue}
                    onClick={() => setIsMenuOpen4(!isMenuOpen4)}
                  />
                ) : (
                  <BsChevronDown
                    className="ml-1 cursor-pointer"
                    size={20}
                    color={Colors.dark_blue}
                    onClick={() => setIsMenuOpen4(!isMenuOpen4)}
                  />
                )}
              </div>
              {isMenuOpen4 && (
                <div
                  className="mt-14 rounded-lg bg-white cursor-pointer absolute"
                  style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
                >
                  <li className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-newGrey ">
                    Quick call
                  </li>
                  <li className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-newGrey  ">
                    CV Review
                  </li>
                  <li className="list-none px-4 py-1  text-dark-blue capitalize font-primayfont hover:bg-newGrey  ">
                    Career Strategy etc.
                  </li>
                </div>
              )}

              <div
                className="rounded-lg py-2 h-12 inline-flex px-3 justify-center items-center ml-3 border-1 border-textInputBorder"
              >
                <p className="text-base font-primayfont font-normal text-dark-blue  ">
                  Competitive Exam
                </p>
                {isMenuOpen5 ? (
                  <BsChevronUp
                    className="ml-1 cursor-pointer"
                    size={20}
                    color={Colors.dark_blue}
                    onClick={() => setIsMenuOpen5(!isMenuOpen5)}
                  />
                ) : (
                  <BsChevronDown
                    className="ml-1 cursor-pointer"
                    size={20}
                    color={Colors.dark_blue}
                    onClick={() => setIsMenuOpen5(!isMenuOpen5)}
                  />
                )}
              </div>
              {isMenuOpen5 && (
                <div
                  className="mt-14 rounded-lg bg-white cursor-pointer absolute"
                  style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
                >
                  <li className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-newGrey ">
                    Not Applicable
                  </li>
                  <li className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-newGrey  ">
                    JEE
                  </li>
                  <li className="list-none px-4 py-1  text-dark-blue capitalize font-primayfont hover:bg-newGrey  ">
                    CAT
                  </li>
                  <li className="list-none px-4 py-1  text-dark-blue capitalize font-primayfont hover:bg-newGrey ">
                    GATE
                  </li>
                </div>
              )}
            </div>
          </div>
          <div className="mt-6">
            <div>
              <h2 className="font-primayfont text-base font-semibold text-dark-blue lg:text-xl">
                Top Keywords:
              </h2>
            </div>
            <div className="my-4 flex w-full flex-wrap">
              {searchChips.map((text, index) => (
                <p
                  className="flex flex-row py-2 px-3 mb-4 capitalize rounded-lg  font-medium font-primayfont text-base text-center items-center text-dark-blue mr-3  cursor-pointer"
                  style={{ backgroundColor: Colors.grey }}
                  key={index}
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="flex flex-row mt-5 items-center">
              <GiCancel className="" />
              <p className="text-base flex text-dark-blue font-semibold ml-1 font-primayfont">
                Clear All Filter
              </p>
            </div>
          </div>
          <HrBottom />

        </div>
        <div className="flex flex-wrap my-9 justify-evenly">
          {mentors.map((data, index) => (
            <MentorBox data={data} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Mentors;
