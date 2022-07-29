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
    <div className="ml-4">
      <Header />
        <div className="mt-6">
          <div className="flex flex-col  mx-32 w-32 h-32  ">
            <img className="w-16 h-16 mx-6" src={Icon} />
            <p className=" text-base text-dark-blue font-bold font-primayfont mt-2 ">
              Kalpesh Lohar
            </p>
            <p className="font-primayfont text-dark-blue text-xs mx-3 font-normal">
              Complete Profile
            </p>
          </div>
          <div className="flex flex-row overflow-x-scroll whitespace-nowrap font-primayfont scrollbar-hide">
          <Link to="/dashboard" >
            <div className="inline-flex items-center text-center">
              <BiHomeAlt />
              <p className="ml-2">Home</p>
              
            </div>
            </Link>
            <Link to="/dashboard/session">
            <div className="inline-flex items-center text-center ml-6">
              <AiFillCreditCard />
              <p className="ml-2">Session</p>
            </div>
            </Link>
            <Link to="/dashboard/mentor">
            <div className="inline-flex items-center text-center ml-6">
              <FiUsers />
              <p className="ml-2">Your mentors</p>
            </div>
            </Link>
            <Link to="/dashboard/manageprofile">
            <div className="inline-flex items-center text-center ml-6">
              <MdOutlineManageAccounts />
              <p className="ml-2">Manage Profile</p>
            </div>
            </Link>
          </div>
        </div>
      <p className="font-primayfont text-dark-blue font-bold text-xl">
        Your Mentors
      </p>
      <div
        className="rounded-lg h-12 px-4 mr-4 flex py-3 border-2 justify-center items-center "
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
          onClick={()=>handletab(2)}
        >
          Favourite Mentors
        </button>
      </div>
      {/* pervious mentor start here */}
      <div className={showtab===1?"flex flex-wrap my-9 justify-evenly":"hidden"}>
        {perviousMentor.map((data, index) => (
          <MentorBox data={data} key={index} />
          
        ))}

          
      </div>
    
      {/* pervious mentor end here */}

      {/* Favourite Mentor start here */}
      <div className={showtab===2?"flex flex-wrap my-9 justify-evenly ":"hidden"}>
        {mentors.map((data, index) => (
          <MentorBox data={data} key={index} />
        ))}
      </div>
      {/* Favourite Mentor end here */}
    </div>
  );
};

export default MentorDash;
