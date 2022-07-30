import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Colors from "../../utils/Colors";
import MentorBox from "../Component/MentorBox";
import Header from "../Header/Header";
import { AiFillCreditCard } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineManageAccounts } from "react-icons/md";
import Icon from "../../images/Ellipse.svg";
import { Link, NavLink } from "react-router-dom";
import HomeDashBoard from "./HomeDashBoard";
import SessionDashBoard from "./SessionDashBoard";

const MentorDash = () => {
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
  ];
  const perviousMentor = [
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
      isFavourite: false,
    },
  ];

  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  };
  return (
    <div className="min-h-half">
      <Header />
      <div
        className="w-full hidden lg:block"
        style={{
          borderColor: "rgba(0, 16, 60, 0.15)",
          backgroundColor: "rgba(0, 16, 60, 0.15)",
          borderWidth: 0.5,
          borderStyle: "solid",
        }}
      />
      <div className="flex flex-col lg:flex-row">
        <div className="mt-6 px-4 flex flex-col lg:pl-28 lg:pr-28 lg:h-screen">
          <div className="flex flex-col w-full lg:flex-row items-center ">
            <img className="w-16 h-16" src={Icon} />
            <div className="w-full lg:ml-4">
              <p className="w-full lg:w-max text-center text-base text-dark-blue font-bold font-primayfont mt-2 ">
                Kalpesh Lohar
              </p>
              <p className="w-full lg:w-max text-center font-primayfont text-dark-blue text-xs font-normal">
                Complete Profile
              </p>
            </div>
          </div>
          <div className="flex flex-row lg:mt-16 lg:flex-col overflow-x-scroll whitespace-nowrap font-primayfont scrollbar-hide">
            <Link to="/dashboard">
              <div className="inline-flex items-center text-center">
                <BiHomeAlt />
                <p className="ml-2">Home</p>
              </div>
            </Link>
            <Link to="/dashboard/session" className="lg:mt-7">
              <div className="inline-flex items-center text-center ml-6 lg:ml-0">
                <AiFillCreditCard />
                <p className="ml-2">Session</p>
              </div>
            </Link>
            <Link to="/dashboard/mentor" className="lg:mt-7">
              <div className="inline-flex items-center text-center ml-6 lg:ml-0">
                <FiUsers />
                <p className="ml-2">Your mentors</p>
              </div>
            </Link>
            <Link to="/dashboard/manageprofile" className="lg:mt-7">
              <div className="inline-flex items-center text-center ml-6 lg:ml-0">
                <MdOutlineManageAccounts />
                <p className="ml-2">Manage Profile</p>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="h-[150vh] hidden lg:block"
          style={{
            borderColor: "rgba(0, 16, 60, 0.15)",
            backgroundColor: "rgba(0, 16, 60, 0.15)",
            borderWidth: 0.5,
            borderStyle: "solid",
          }}
        />
        <div className="mt-12 px-4 lg:h-full lg:w-full">
          <p className="font-primayfont text-dark-blue font-bold text-xl">
            Your Mentors
          </p>
          <div
            className="rounded-lg h-12 px-4 mr-4 flex py-3 border-2 justify-center items-center lg:hidden "
            style={{
              borderColor: Colors.border,

              color: Colors.text_color,
            }}
          >
            <input
              className="w-full outline-none border-none text-dark-blue text-sm font-normal"
              type="search"
              placeholder="Search anything on this page"
            />
            <BsSearch className="text-primary h-6 w-6 ml-2" />
          </div>
          <div className="flex flex-row h-9 mt-6">
            <button
              className={
                showtab === 1
                  ? "font-medium text-base underline text-primary "
                  : "font-medium text-base"
              }
              onClick={() => handletab(1)}
            >
              Previous Mentors
            </button>
            <button
              className={
                showtab === 2
                  ? "ml-24 font-medium text-base underline text-primary"
                  : "ml-24 font-medium text-base"
              }
              onClick={() => handletab(2)}
            >
              Favourite Mentors
            </button>

            <div
            className="rounded-lg h-12 px-4 mr-4 py-3 border-2 lg:flex justify-center items-center hidden lg:block lg:ml-24 lg:w-80"
            style={{
              borderColor: Colors.border,

              color: Colors.text_color,
            }}
          >
            <input
              className="w-full outline-none border-none text-dark-blue text-sm font-normal lg:w-4/5"
              type="search"
              placeholder="Search anything on this page"
            />
            <BsSearch className="text-primary h-6 w-6 ml-2" />
          </div>
          </div>
          {/* pervious mentor start here */}
          <div
            className={
              showtab === 1 ? "flex flex-wrap my-9 justify-evenly" : "hidden"
            }
          >
            {perviousMentor.map((data, index) => (
              <MentorBox data={data} key={index} />
            ))}
          </div>
          {/* pervious mentor end here */}

          {/* Favourite Mentor start here */}
          <div
            className={
              showtab === 2 ? "flex flex-wrap my-9 justify-evenly " : "hidden"
            }
          >
            {mentors.map((data, index) => (
              <MentorBox data={data} key={index} />
            ))}
          </div>
          {/* Favourite Mentor end here */}
        </div>
      </div>
    </div>
  );
};

export default MentorDash;
