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

const Mentors = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const [isMenuOpen4, setIsMenuOpen4] = useState(false);
  const [isMenuOpen5, setIsMenuOpen5] = useState(false);

  // Our States
  const [value, setValue] =  React.useState([2,10]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };  
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
              className="rounded-lg h-12 flex py-3 px-4 lg:flex-row justify-center items-center lg:w-96"
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
            <div className="flex mt-6 lg:mt-0 flex-row overflow-x-scroll whitespace-nowrap font-primayfont lg:px-3 scrollbar-hide">
              <div
                className="rounded-lg py-2 h-12 inline-flex px-3 border-1"
                style={{ borderColor: Colors.border }}
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
                  className="-ml-28 mt-12 rounded-lg h-44 w-44 bg-white cursor-pointer"
                  style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
                >
                  <li className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white">
                    Exam Prep Mentors
                  </li>
                  <li className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">
                    Start up Mentors
                  </li>
                  <li className="list-none px-4 py-1  text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">
                    Product Management
                  </li>
                  <li className="list-none px-4 py-1  text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">
                    Web Development{" "}
                  </li>
                  <li className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">
                    Design{" "}
                  </li>
                </div>
              )}

              <div
                className="rounded-lg py-2 h-12 inline-flex px-3 justify-center items-center ml-3"
                style={{ borderColor: Colors.border, borderWidth: 1 }}
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
                  className="-ml-20 mt-12 rounded-lg h-28 w-48 bg-white cursor-pointer"
                  style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
                >
                  <li className="list-none px-1 py-1  text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">
                    Product Management
                  </li>
                  <li>
                    <Slider
                       value={value}
                       onChange={rangeSelector}
                       valueLabelDisplay="auto"
                    />
                     <p className="w-4">
                    {" "}
                    ₹{value[0]} and ₹{value[1]}{" "}
                  
                  </p>
                  </li>
                </div>
              )}
              <div
                className="rounded-lg py-2 h-12 inline-flex px-3 justify-center items-center ml-3"
                style={{ borderColor: Colors.border, borderWidth: 1 }}
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
                  className="-ml-28 mt-12 rounded-lg h-52 w-40 bg-white cursor-pointer"
                  style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
                >
                  <Calendar
                   
                  />
                 
                </div>
              )}
              <div
                className="rounded-lg h-12 py-2 inline-flex px-3 justify-center items-center ml-3"
                style={{ borderColor: Colors.border, borderWidth: 1 }}
              >
                <p className="text-base font-primayfont font-normal text-dark-blue  ">
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
                  className="-ml-28 mt-12 rounded-lg h-28 w-40 bg-white cursor-pointer"
                  style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
                >
                  <li className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white">
                    Quick call
                  </li>
                  <li className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">
                    CV Review
                  </li>
                  <li className="list-none px-4 py-1  text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">
                    Career Strategy
                  </li>
                </div>
              )}
              <div
                className="rounded-lg py-2 h-12 inline-flex px-3 justify-center items-center ml-3"
                style={{ borderColor: Colors.border, borderWidth: 1 }}
              >
                <p className="text-base font-primayfont font-normal text-dark-blue  ">
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
                  className="-ml-20 mt-12 rounded-lg h-28 w-40 bg-white cursor-pointer"
                  style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
                >
                  <li className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white">
                    Quick call
                  </li>
                  <li className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">
                    CV Review
                  </li>
                  <li className="list-none px-4 py-1  text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">
                    Career Strategy etc.
                  </li>
                </div>
              )}

              <div
                className="rounded-lg py-2 h-12 inline-flex px-3 justify-center items-center ml-3"
                style={{ borderColor: Colors.border, borderWidth: 1 }}
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
                  className="-ml-44 mt-12 rounded-lg h-32   w-40 bg-white cursor-pointer"
                  style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
                >
                  <li className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white">
                    Not Applicable
                  </li>
                  <li className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">
                    JEE
                  </li>
                  <li className="list-none px-4 py-1  text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">
                    CAT
                  </li>
                  <li className="list-none px-4 py-1  text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white">
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
                  style={{ background: Colors.grey }}
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
          <hr
            className="mt-6 -mx-4 lg:-mx-24"
            style={{ color: Colors.hrgrey }}
          />
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
