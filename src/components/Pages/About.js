import React, { useEffect } from "react";
import PageHeading from "../PageHeading.js";
import missionimg from "../../images/aboutmisson.jpg";
import kalpesh from "../../images/kalpesh.jpg";
import aayu from "../../images/aayu.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <>
      <div className="min-h-half">
        {/* Heading */}
        <PageHeading title="About Us" />
        {/* Content */}
        <div className="mission flex flex-col justify-center xl:gap-x-4 xl:py-10 items-center py-8 xl:flex-row xl:px-24 xl:items-center">
          <div className="imagemission flex flex-col justify-between items-center lg:w-96 xl:w-1/2">
            <img className="w-2/3 md:w-96" src={missionimg} alt="Mission" />
          </div>
          <div className="textmisssion flex flex-col justify-center items-center pt-4 xl:items-start xl:w-1/2">
            <h2 className="heading-title">Who Are We?</h2>
            <p className="pt-4 px-12 lg:w-2/3 lg:px-0">
              Edukith is Plateform where We are Taking students from Confusion
              to College through profiling, mentoring, and counseling. Offering
              1:1 Mentorship sessions, Mock Interviews, and College Discussions
              with the best Mentor-Mentee matching.
            </p>
          </div>
        </div>
        <div className="team">
          <div className="team flex items-center justify-center py-3">
            <h2 className="heading-title">Our Leadership Team</h2>
          </div>
          <div className="members px-5 flex flex-col justify-center items-center md:flex-row md: gap-x-14">
            <div className="member1 py-5 flex justify-center items-center flex-col">
              <img
                src={aayu}
                className="rounded-full w-56"
                alt="Aayu Kharbanda"
              />
              <div className="textteam py-4 flex justify-center items-center flex-col">
                <h3 className="text-xl font-bold">Aayu Kharbanda</h3>
                <p className="mt-2">Founder and CEO</p>
              </div>
            </div>
            <div className="member2 py-5 flex justify-center items-center flex-col">
              <img
                src={kalpesh}
                className="rounded-full w-52"
                alt="Kalpesh Lohar"
              />
              <div className="textteam py-4 flex justify-center items-center flex-col">
                <h3 className="text-xl font-bold">Kalpesh Lohar</h3>
                <p className="mt-2">Founder and CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
