import React, {useState} from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Colors from "../utils/Colors";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Calendar from "react-calendar";

const DropDown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenu1, setIsMenu1] = useState(false);
  const [isMenu2, setIsMenu2] = useState(false);
  const [isMenu3, setIsMenu3] = useState(false);
  const [isMenu4, setIsMenu4] = useState(false);
  return (
    <>
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
              <div className="border-1 rounded-lg py-3 px-3 flex flex-row">
              <div>
                <p>Domain</p>
              </div>
              <div>
              {isMenu1 ? (
              <BsChevronUp
                className="ml-1 cursor-pointer"
                size={20}
                color={Colors.dark_blue}
                onClick={() => setIsMenu1(!isMenu1)}
              />
            ) : (
              <BsChevronDown
                className="ml-1 cursor-pointer"
                size={20}
                color={Colors.dark_blue}
                onClick={() => setIsMenu1(!isMenu1)}
              />
            )}
              </div>
              </div>
              {isMenu1 && <div className="mt-28 -ml-28 rounded-lg bg-white cursor-pointer" style={{ boxShadow: '0px 0px 8px rgba(0, 16, 60, 0.1)' }}>
                <li className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white">Exam Prep Mentors</li>
                <li className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">Start up Mentors</li>
                <li  className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">Product Management</li>
                <li  className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">Web Development </li>
                <li  className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">Design </li>
            </div>}
            <div className="border-1 rounded-lg py-3 px-3 flex flex-row">
              <div>
                <p>Domain</p>
              </div>
              <div>
              {isMenuOpen ? (
              <BsChevronUp
                className="ml-1 cursor-pointer"
                size={20}
                color={Colors.dark_blue}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            ) : (
              <BsChevronDown
                className="ml-1 cursor-pointer"
                size={20}
                color={Colors.dark_blue}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            )}
              </div>
              </div>
              {isMenuOpen && <div className="mt-28 -ml-28 rounded-lg bg-white cursor-pointer" style={{ boxShadow: '0px 0px 8px rgba(0, 16, 60, 0.1)' }}>
                <li className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white">Exam Prep Mentors</li>
                <li className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">Start up Mentors</li>
                <li  className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">Product Management</li>
                <li  className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">Web Development </li>
                <li  className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">Design </li>
            </div>}
            <div className="border-1 rounded-lg py-3 px-3 flex flex-row">
              <div>
                <p>Domain</p>
              </div>
              <div>
              {isMenuOpen ? (
              <BsChevronUp
                className="ml-1 cursor-pointer"
                size={20}
                color={Colors.dark_blue}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            ) : (
              <BsChevronDown
                className="ml-1 cursor-pointer"
                size={20}
                color={Colors.dark_blue}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            )}
              </div>
              </div>
              {isMenuOpen && <div className="mt-28 -ml-28 rounded-lg bg-white cursor-pointer" style={{ boxShadow: '0px 0px 8px rgba(0, 16, 60, 0.1)' }}>
                <li className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white">Exam Prep Mentors</li>
                <li className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">Start up Mentors</li>
                <li  className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">Product Management</li>
                <li  className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">Web Development </li>
                <li  className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-grey hover:text-white ">Design </li>
            </div>}
             
             
             
             
            </div>
          </div>
    </>
  );
};

export default DropDown;
