import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Colors from "../../utils/Colors";
import MentorBox from "../Component/MentorBox";
import Header from "../Header/Header";
import HeaderSeprater from "../Component/HeaderSeprater";
import DashboardNavigator from "../Component/DashboardMenteeNavigator";

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
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <DashboardNavigator activeMentors={true} />

        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full">
          <p className="font-primayfont text-dark-blue font-bold text-xl mt-7">
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
