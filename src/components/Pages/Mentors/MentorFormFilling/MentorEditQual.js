import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../Component/Breadcrumb";
import Header from "../../../Header/Header";
import Asset from "../../../../images/asset_edit_mentor_2.svg";
import AssetLarge from "../../../../images/asset_edit_mentor_2_large.svg";
import CustomButton from "../../../Component/CustomButton";
import HeaderSeprater from "../../../Component/HeaderSeprater";
import { useNavigate } from "react-router-dom";
import { IoIosSchool } from "react-icons/io";
import Colors from "../../../../utils/Colors";
import { ImOffice } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";

const MentorEditQual = () => {
  const navigate = useNavigate();
  const [univercity, setUnivercity] = useState("");
  const [degree, setdegree] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const educations = [];

  const works = [];

  const MapComponent = ({ data }) => {
    console.log("data in component:", data);
    return (
      <div className="flex border-1 border-textInputBorder rounded-lg px-3 py-3 justify-between max-w-lg mb-6">
        <div className="flex ">
          <div className="border-1 border-dark-blue h-11 w-11 rounded-full bg-dark-blue">
            {data.isForEducation ? (
              <IoIosSchool
                size={42}
                color={Colors.white}
                className="py-2 px-2"
              />
            ) : (
              <ImOffice size={42} color={Colors.white} className="py-2 px-2" />
            )}
          </div>
          <div className="ml-3">
            <h3 className="font-primayfont text-dark-blue text-base font-normal">
              Studied {data.work} from {data.title}
            </h3>
            <p className="font-primayfont w-max text-dark-blue bg-chipGrey rounded-lg px-2 py-2 text-xs font-normal mt-2 capitalize">
              {data.from} - {data.to}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <AiOutlineClose size={24} color={Colors.dark_blue} />
        </div>
      </div>
    );
  };

  const saveEducation = () => {
    educations.push({
      isForEducation: true,
      title: univercity,
      from: "june 2019",
      work: degree,
      to: "june 2022",
    });
  };

  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />
      <div className="px-4 md:px-16 mt-8 lg:px-24 flex flex-col">
        <Breadcrumb
          navigations={["Become a Mentor"]}
          onPressRoutes={["/become-mentor"]}
        />{" "}
        <div className="header mt-7 lg:mt-12">
          <h3 className="font-primayfont text-dark-blue text-xl lg:text-2xl font-extrabold">
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
            {/* for Education  */}
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
                  value={univercity}
                  onChange={(e) => {
                    setUnivercity(e.target.value);
                  }}
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
                  value={degree}
                  onChange={(e) => {
                    setdegree(e.target.value);
                  }}
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
            <div className="flex space-x-4 lg:space-x-9 mt-6 mb-9">
              <div className="field w-1/2">
                <CustomButton
                  text="Save"
                  style="w-full"
                  onClick={saveEducation}
                />
              </div>
              <div className="field w-1/2">
                <CustomButton text="Add Another" style="w-full" />
              </div>
            </div>

            <div className="flex flex-col">
              {educations.map((education, index) => {
                return <MapComponent data={education} key={index} />;
              })}
            </div>

            {/* For Experience  */}
            <h3 className="font-primayfont text-dark-blue text-xl lg:text-2xl font-bold mt-3">
              Experience (visible on your mentor profile):
            </h3>
            <p className="font-primayfont text-dark-blue text-sm font-normal lg:text-base mt-4">
              Tell us about the experience you have gained throughout. Please
              save details before adding another.
            </p>

            <div className="flex space-x-4 lg:space-x-9">
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  Company
                </p>
                <input
                  type="text"
                  placeholder="Amazon, Google..."
                  className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
                />
              </div>
              <div className="field w-1/2">
                <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
                  Designation
                </p>
                <input
                  type="text"
                  placeholder="Product Designer"
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
            <div className="flex space-x-4 lg:space-x-9 mt-6 mb-9">
              <div className="field w-1/2">
                <CustomButton text="Save" style="w-full" />
              </div>
              <div className="field w-1/2">
                <CustomButton text="Add Another" style="w-full" />
              </div>
            </div>

            <div className="w-full mt-9 lg:mt-12 mb-16 lg:mb-24 flex justify-center">
              <CustomButton
                text="Save & Next"
                style="w-full lg:w-96"
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
