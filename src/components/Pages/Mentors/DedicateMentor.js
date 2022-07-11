import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import { AiFillHome } from "react-icons/ai";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import Colors from "../../../utils/Colors";
import kalpesh from "../../../images/kalpesh.jpg";
import logo from "../../../images/logo.png";
import CustomExperienceBox from "../../Component/DedicateMentor/CustomExperienceBox";
import Packages from "../../Component/DedicateMentor/Packages";
import SimilarMentorBox from "../../Component/DedicateMentor/SimilarMentorBox";
import Review from "../../Component/DedicateMentor/Review";

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

  const packages = [
    {
      name: "Mentorship Program",
      price: "₹4999",
      duration: "month",
      features: [
        "Upto 4 calls per month",
        "Tasks & exercises",
        "No hidden charges",
        "Customised road map guidence",
      ],
    },
    {
      name: "Quick Call - Study Abroad",
      price: "₹4999",
      duration: "month",
      features: [
        "Upto 4 calls per month",
        "Tasks & exercises",
        "No hidden charges",
        "Customised road map guidence",
      ],
    },
  ];

  const similarMentors = [
    {
      img: kalpesh,
      name: "Kalpesh Lohar",
      work: "Full Stack Developer",
    },
    {
      img: kalpesh,
      name: "Kalpesh Lohar",
      work: "Full Stack Developer",
    },
    {
      img: kalpesh,
      name: "Kalpesh Lohar",
      work: "Full Stack Developer",
    },
    {
      img: kalpesh,
      name: "Kalpesh Lohar",
      work: "Full Stack Developer",
    },
  ];

  const reviews = [
    {
      user: "John Doe",
      workAt: "IIM",
      rating: 4.5,
      date: "10 Jan, 2020",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit orci tino ci dunt at tincidunt pretium pretium. Turpis adipiscing pellentesque vitae sem donec proin et pellentesque mi. Lacus, quam vitae tempor ullamcorper sed ac phasellus.",
    },
    {
      user: "John Doe",
      workAt: "ISB",
      rating: 5,
      date: "15 Jan, 2020",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit orci tino ci dunt at tincidunt pretium pretium. Turpis adipiscing pellentesque vitae sem donec proin et pellentesque mi. Lacus, quam vitae tempor ullamcorper sed ac phasellus.",
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
                <CustomExperienceBox key={index} data={data} />
              ))}
            </div>
          </div>
          <div className="education mt-2">
            <h3 className="text-xl font-primayfont text-dark-blue font-bold">
              Education
            </h3>
            <div className="flex mt-4 flex-col">
              {studies.map((data, index) => (
                <CustomExperienceBox key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
        <div className="see more flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <BiChevronUp size={24} color={Colors.textBlack} />
            <h3 className="text-base font-primayfont text-dark-blue font-bold">
              See More
            </h3>
          </div>
        </div>
        <div className="packages mt-6">
          <h3 className="text-xl font-primayfont text-dark-blue font-bold">
            Packages
          </h3>
          <div className="flex flex-col mt-7">
            {packages.map((data, index) => (
              <Packages key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="similar-mentors mt-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-primayfont text-dark-blue font-bold">
              Similar Mentors
            </h3>
            <h2 className="text-base mt-2 font-primayfont text-primar-second font-medium">
              See all
            </h2>
          </div>
          <div className="flex flex-col mt-5">
            {similarMentors.map((data, index) => (
              <SimilarMentorBox key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="reviews mt-4 mb-10">
          <h3 className="text-xl font-primayfont text-dark-blue font-bold">
            {`Reviews (${reviews.length})`}
          </h3>
          <div className="flex flex-col mt-5">
            {reviews.map((data, index) => (
              <Review key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicateMentor;
