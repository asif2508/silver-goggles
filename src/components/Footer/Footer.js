import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/NewLogo.svg";
const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between px-4 flex-col md:flex-row md:py-10 lg:px-28 xl:py-5">
        <div className="left">
          <img src={logo} className="w-64" alt="" />
          <p className="text-base font-primayfont py-3 md:w-3/4 lg:w-3/4 xl:w-2/3">
            EduKith Taking students from Confusion to College through profiling,
            mentoring, and counseling
          </p>
        </div>
        <div className="right flex flex-col justify-around md:flex-row md:mx-10">
          <div className="nav1 md:w-32 lg:mx-10">
            <h3 className="text-xl font-bold text-dark-blue py-3">
              Quick Links
            </h3>
            <ul className="flex flex-col">
              <Link className="text-base pt-1" to="/">
                Home
              </Link>
              <Link className="text-base" to="/login">
                Login
              </Link>
              <Link className="text-base" to="/edit-mentor-profile">
                Become Mentor
              </Link>
            </ul>
          </div>
          <div className="nav2 my-3 md:my-0">
            <h3 className="text-xl font-bold text-dark-blue py-3">Company</h3>
            <ul className="flex flex-col">
              <Link className="text-base pt-1" to="/about">
                About
              </Link>
              <Link className="text-base" to="/contact">
                Contact
              </Link>
              <Link className="text-base" to="/mentors">
                Our Mentors
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottombar bottom-0 bg-dark-blue w-full text-white py-3 flex justify-center">
        <p className="">Copyright © EduKith 2022. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
