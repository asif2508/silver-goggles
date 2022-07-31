import React, { useEffect } from "react";
import Breadcrumb from "../../../Component/Breadcrumb";
import Header from "../../../Header/Header";
import Asset from "../../../../images/asset_edit_mentor_1.svg";
import AssetLarge from "../../../../images/asset_edit_mentor_1_large.svg";
import CustomButton from "../../../Component/CustomButton";
import HeaderSeprater from "../../../Component/HeaderSeprater";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MentorEditProfile = () => {
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
      <div className="px-4 md:px-16 lg:px-24 flex flex-col">
        <Breadcrumb
          navigations={["Become a Mentor"]}
          onPressRoutes={["/become-mentor"]}
        />
        <div className="header mt-7 lg:mt-12">
          <h3 className="font-primayfont text-dark-blue text-xl lg:text-2xl font-bold">
            Applying As A Mentor
          </h3>
          <p className="font-primayfont text-dark-blue text-sm font-normal lg:text-base mt-4">
            Filling out the form only takes a few minutes. These details will
            help us know about you more & why you’d like to become a mentor.
            Please give it your best.
          </p>
          <div className="w-full flex flex-col justify-center items-center">
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
            {/* Profile picture  */}
            <div className="field">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-9 lg:mt-11">
                Profile picture
              </p>
              <div className="mt-2 flex items-center">
                <CustomButton text="Choose file" />
                <p className="font-primayfont text-dark-blue text-sm font-normal ml-4">
                  KB.png
                </p>
              </div>
            </div>
            {/* First and Last name  */}
            <div className="flex space-x-4 lg:space-x-9">
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  First Name
                </p>
                <input
                  type="text"
                  placeholder="e.g. Kapil"
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                />
              </div>
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  Last Name
                </p>
                <input
                  type="text"
                  placeholder="e.g. Batra"
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                />
              </div>
            </div>
            {/* Email and Phone  */}
            <div className="flex space-x-4 lg:space-x-9">
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  E-mail
                </p>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                />
              </div>
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  Phone Number
                </p>
                <input
                  type="text"
                  placeholder="Your phone number"
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                />
              </div>
            </div>
            {/* location and Gender  */}
            <div className="flex space-x-4 lg:space-x-9">
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  Location
                </p>
                <input
                  type="text"
                  placeholder="Your location"
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                />
              </div>
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  Gender
                </p>
                <select
                  name="Gender"
                  id="gender-select"
                  ons
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                >
                  <option className="bg-white text-dark-blue" value="male">
                    Male
                  </option>
                  <option className="bg-white text-dark-blue" value="female">
                    Female
                  </option>
                  <option className="bg-white text-dark-blue" value="other">
                    Other
                  </option>
                </select>
              </div>
            </div>
            {/* linkedin and address  */}
            <div className="flex space-x-4 lg:space-x-9">
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  LinkedIn profile
                </p>
                <input
                  type="text"
                  placeholder="https://www.linkedin.com/in/kapil-batra-b9a8b817b/"
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                />
              </div>
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  Address
                </p>
                <input
                  type="text"
                  placeholder="2A ABC DEF Near..."
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                />
              </div>
            </div>
            {/* Language and website  */}
            <div className="flex space-x-4 lg:space-x-9">
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  Language you Spoke
                </p>
                <input
                  type="text"
                  placeholder="Hindi,English,..."
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                />
              </div>
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  Website/Portfolio Link
                </p>
                <input
                  type="text"
                  placeholder="https://www.kapil..."
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                />
              </div>
            </div>
            {/* About  */}
            <div className="field w-full">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                Tell us about yourself (This will be visible to your profile)
              </p>
              <textarea
                type="text"
                placeholder="Max 150 words"
                maxLength={150}
                className="border-1 h-40 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              />
            </div>
            {/* Why Mentor  */}
            <div className="field w-full">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                Why do you want to be a mentor? (Non-visible)
              </p>
              <textarea
                type="text"
                placeholder="Write about your expectations and future plans."
                maxLength={150}
                className="border-1 h-40 align-top border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              />
            </div>
            {/* Skills  */}
            <div className="field w-full">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                Write the best keywords which discribes your industry. (Mentees
                will find you through these.)
              </p>
              <div className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full">
                <div className="space-x-2">
                  {skills.map((skill, index) => {
                    return <Chip key={index} label={skill} />;
                  })}
                </div>
                <input
                  type="text"
                  className="outline-none"
                  value={skillString}
                  onChange={(e) => {
                    setSkills(
                      e.target.value
                        .split(",")
                        .slice(0, e.target.value.split(",").length - 1)
                    );
                    setSkillString(
                      e.target.value.split(",").length > 0
                        ? e.target.value.split(",").slice(0, -1)
                        : e.target.value
                    );
                  }}
                />
              </div>
            </div>
            <div className="w-full mt-9 lg:mt-12 mb-16 lg:mb-24">
              <div className="w-full mt-9 lg:mt-12 mb-16 lg:mb-24 flex justify-center">
                <CustomButton
                  text="Save & Next"
                  style="w-full lg:w-96"
                  onClick={() => {
                    navigate("/become-mentor/edit-qualifications");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorEditProfile;
