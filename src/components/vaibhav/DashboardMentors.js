import React, { useState } from "react";
import { BsPencil, BsSearch } from "react-icons/bs";
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

        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full mb-14">
          <p className="font-primayfont text-dark-blue font-bold text-xl capitalize mt-7">
            Your mentors
          </p>
          <div
            className="rounded-lg h-12 px-4 mt-6 flex py-3 justify-center items-center lg:hidden border-dark-blue border-1"
            style={{
              color: Colors.text_color,
            }}
          >
            <input
              className="w-full outline-none border-none text-dark-blue text-sm font-primayfont h-full font-normal"
              type="search"
              placeholder="Search anything on this page.."
            />
            <BsSearch className="text-primary h-6 w-6 ml-2" />
          </div>
          <div className="flex flex-row h-9 mt-6 lg:justify-between">
            <div className="flex flex-row">
              <div>
                <p
                  className="font-medium text-base w-max pb-1 text-dark-blue"
                  onClick={() => handletab(1)}
                >
                  Previous Mentors
                </p>
                {showtab === 1 && (
                  <div className="h-1 bg-primary rounded-full" />
                )}
              </div>
              <div className="ml-6">
                <p
                  className="font-medium text-base w-max pb-1 text-dark-blue"
                  onClick={() => handletab(2)}
                >
                  Favourite Mentors
                </p>
                {showtab === 2 && (
                  <div className="h-1 bg-primary rounded-full" />
                )}
              </div>
            </div>
            <div
              className="rounded-lg h-12 px-3 mr-4 py-3 border-2 lg:flex justify-center items-center hidden lg:ml-24 lg:w-80"
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
          <hr
            className="w-full -mt-1 lg:w-96"
            style={{ color: Colors.hrlightBlue }}
          />

          {/* pervious mentor start here */}
          <div
            className={
              showtab === 1
                ? "flex flex-wrap mt-6 justify-evenly lg:justify-start "
                : "hidden"
            }
          >
            {perviousMentor.map((data, index) => (
              <div className="flex flex-col lg:flex-row">
                <div className="lg:-mx-4">
                  <MentorBox data={data} key={index} />
                </div>
                <div className="flex w-full justify-center mb-9 lg:h-full lg:mt-9 lg:ml-16">
                  <BsPencil size={20} color={Colors.dark_blue} />
                  <p className="font-primayfont font-semibold text-dark-blue ml-2">
                    Write a review
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* pervious mentor end here */}

          {/* Favourite Mentor start here */}
          <div
            className={
              showtab === 2
                ? "flex flex-wrap mt-6 justify-evenly lg:justify-start "
                : "hidden"
            }
          >
            {mentors.map((data, index) => (
              <div className="flex flex-col lg:flex-row">
                <div className="lg:-mx-4">
                  <MentorBox data={data} key={index} />
                </div>
                <div className="flex w-full justify-center mb-9 lg:h-full lg:mt-9 lg:ml-16">
                  <BsPencil size={20} color={Colors.dark_blue} />
                  <p className="font-primayfont font-semibold text-dark-blue ml-2">
                    Write a review
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Favourite Mentor end here */}
        </div>
      </div>
    </div>
  );
};

export default MentorDash;
