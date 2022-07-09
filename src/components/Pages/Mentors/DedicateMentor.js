import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import { AiFillHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import Colors from "../../../utils/Colors";
import kalpesh from "../../../images/kalpesh.jpg";
import logo from "../../../images/logo.png";
import CustomExperienceBox from "../../Component/CustomExperienceBox";

const DedicateMentor = () => {
  const { name } = useParams();
  const skills = ["HTML", "CSS", "JavaScript", "React", "NodeJS", "MongoDB"];
  const experiences = [
    {
      img: logo,
      title: "Full Stack Developer",
      activefrom: "Jan 2020",
      activeTo: "Present",
    },
    {
      img: logo,
      title: "Full Stack Developer",
      activefrom: "Jan 2020",
      activeTo: "Present",
    },
    {
      img: logo,
      title: "Full Stack Developer",
      activefrom: "Jan 2020",
      activeTo: "Present",
    },
  ];
  const studies = [
    {
      img: logo,
      title: "Studied MBA from IIM",
      activefrom: "July 2022",
      activeTo: "Present",
    },
    {
      img: logo,
      title: "Studied MBA from IIM",
      activefrom: "July 2022",
      activeTo: "Present",
    },
  ];

  return (
    <div className="min-h-half h-full">
      <div className="header">
        <Header />
      </div>
      <div className="maincontainer px-4">
        <div className="breadcrumb mt-6">
          <div className="flex space-x-1 items-center">
            <AiFillHome size={13} color={Colors.textBlack} />
            <BiChevronRight size={13} color={Colors.textBlack} />
            <p className="text-xs text-textBlack font-primayfont font-semibold items-center">
              Our Mentors
            </p>
            <BiChevronRight size={13} color={Colors.black} />
            <p className="text-xs text-textBlack font-primayfont font-semibold items-center">
              Kalpesh Lohar
            </p>
          </div>
        </div>
        <div className="userInro mt-6 w-full2343">
          <div className="upperpart flex justify-between">
            <img
              src={kalpesh}
              alt="mentor photo"
              height={82}
              width={74}
              className="w-3/12 rounded"
            />
            <div className="about w-9/12 ml-4 flex flex-col">
              <h2 className="text-lg font-primayfont text-dark-blue font-bold">
                Kalpesh Lohar
              </h2>
              <p className="text-base font-primayfont text-dark-blue font-normal pr-2">
                CTO at EduKith
              </p>
              <p className="text-base font-primayfont text-dark-blue font-normal mt-1">
                🎯 Studied B.tech from GTU
              </p>
            </div>
          </div>
          <div
            className="w-full mt-4"
            style={{
              borderColor: "rgba(0, 16, 60, 0.15)",
              borderWidth: 0.5,
              borderStyle: "solid",
            }}
          />
          <p className="text-base text-dark-blue font-primayfont font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisc ing elit. Pharetra
            urna quam faucibus neque. Rho ncus phasellus nec non consequat
            fermentum in tincidunt faucibus.
          </p>
          <div className="skills mt-6">
            <h3 className="text-xl font-primayfont text-dark-blue font-bold">
              Skills
            </h3>
            <div className="flex mt-4 flex-wrap">
              {skills.map((skill, index) => (
                <div
                  className="h-8 py-2 px-4 bg-chipGrey rounded-3xl mr-4 mb-4"
                  key={index}
                >
                  <p className="h-8 text-sm text-dark-blue font-primayfont font-medium">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="experience mt-2">
            <h3 className="text-xl font-primayfont text-dark-blue font-bold">
              Experience
            </h3>
            <div className="flex mt-4 flex-col">
              {experiences.map((data, index) => (
                <CustomExperienceBox data={data} />
              ))}
            </div>
          </div>
          <div className="education mt-2">
            <h3 className="text-xl font-primayfont text-dark-blue font-bold">
              Education
            </h3>
            <div className="flex mt-4 flex-col">
              {studies.map((data, index) => (
                <CustomExperienceBox data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicateMentor;
