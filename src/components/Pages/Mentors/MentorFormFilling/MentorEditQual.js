import React, { useEffect } from "react";
import Breadcrumb from "../../../Component/Breadcrumb";
import Header from "../../../Header/Header";
import Asset from "../../../../images/asset_edit_mentor_2.svg";
import AssetLarge from "../../../../images/asset_edit_mentor_2_large.svg";
import CustomButton from "../../../Component/CustomButton";
import HeaderSeprater from "../../../Component/HeaderSeprater";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MentorEditQual = () => {
  const [skills, setSkills] = React.useState([]);
  const [skillString, setSkillString] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />
      <div className="px-4 md:px-16 mt-8 lg:px-24 flex flex-col">
        <Breadcrumb navigations={["Become a Mentor"]} />
        <div className="header mt-7 lg:mt-12">
          <h3 className="font-primayfont text-dark-blue text-xl lg:text-2xl font-extrabold">
            Applying As A Mentor
          </h3>
          <p className="font-primayfont text-dark-blue text-sm font-normal lg:text-base mt-4">
            Filling out the form only takes a few minutes. These details will
            help us know about you more & why you’d like to become a mentor.
            Please give it your best.
          </p>
          <div className="w-full flex flex-col justify-center">
            <img
              src={Asset}
              alt="Navigate"
              className="mt-9 h-20 flex lg:hidden"
              style={{ width: 420, minHeight: 80, maxHeight: 80 }}
            />
            <img
              src={AssetLarge}
              alt="Navigate"
              className="mt-20 h-20 hidden lg:flex"
              style={{ minHeight: 80, maxHeight: 80 }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="fields w-full lg:w-3/4">
            <h3 className="font-primayfont text-dark-blue text-xl lg:text-2xl font-bold mt-9">
              Education:
            </h3>
            <p className="font-primayfont text-dark-blue text-sm font-normal lg:text-base mt-4">
              Provide your education details such as graduation & post
              graduation(optional). These details will be visible on your main
              profile.
            </p>

            {/* First and Last name  */}
            <div className="flex space-x-4 lg:space-x-9">
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  University
                </p>
                <input
                  type="text"
                  placeholder="ABC University"
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                />
              </div>
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  Degree
                </p>
                <input
                  type="text"
                  placeholder="e.g. B.Tech"
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                />
              </div>
            </div>
            <div className="flex space-x-4 lg:space-x-9">
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  Start month
                </p>
                <select
                  name="Gender"
                  id="gender-select"
                  ons
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                >
                  <option className="bg-white text-dark-blue" value="male">
                    Choose
                  </option>
                </select>
              </div>
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  Last month
                </p>
                <select
                  name="Gender"
                  id="gender-select"
                  ons
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                >
                  <option className="bg-white text-dark-blue" value="male">
                    Choose
                  </option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 lg:space-x-9 mt-6">
              <div className="field w-1/2">
                <CustomButton text="Save" style="w-full" />
              </div>
              <div className="field w-1/2">
                <CustomButton text="Add Another" style="w-full" />
              </div>
            </div>

            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <h3 className="font-primayfont text-dark-blue text-xl lg:text-2xl font-bold mt-9">
                  Studied MBA from IIM
                </h3>
                <p className="font-primayfont text-dark-blue text-sm font-normal lg:text-base mt-4">
                  July 2019 - june 2021
                </p>
              </div>
            </div>

            <div className="w-full mt-9 lg:mt-12 mb-16 lg:mb-24">
              <CustomButton
                text="Save & Next"
                style="w-full"
                onClick={() => {
                  navigate("/become-mentor/in-review");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorEditQual;
