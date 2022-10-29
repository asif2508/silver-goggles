import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Constants from "../../../../constants/Constants";
import Header from "../../../Header/Header";
import HeaderSeprater from "../../../Component/HeaderSeprater";
import HybridDashboardNavigator from "../../../Component/HybridDashboardNavigator";
import {
  navigateToBasicInfo,
  navigateToEducationInfo,
  navigateToExperienceInfo,
  navigateToMentorshipInfo,
} from "./Navigator";
import Colors from "../../../../utils/Colors";
import { AiOutlineClose } from "react-icons/ai";
import CustomButton from "../../../Component/CustomButton";
import { saveExperienceDetailsAction } from "../../../../actions/users";
import { ImOffice } from "react-icons/im";

const ExperienceInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inf = JSON.parse(localStorage.getItem(Constants.userInfo));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [workExperience, setExperience] = useState([]);
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");

  const reformatDate = (date) => {
    var arr = date.split("-");
    return [arr[2], arr[1], arr[0]].join("/");
  };

  const saveExperience = (workExperience) => {
    setExperience((arr) => [...arr, workExperience]);
    setCompany("");
    setDesignation("");
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const removeExperience = (index) => {
    setExperience(workExperience.filter((item, i) => i !== index));
  };

  const addExperienceToArr = () => {
    if (company.length > 1 && designation.length > 1) {
      saveExperience({
        company,
        startDate: reformatDate(startDate),
        endDate: reformatDate(endDate),
        designation,
        currentCompay: false,
      });
    } else {
      alert("Please fill all Details");
    }
  };

  const hitSaveExperience = () => {
    if (workExperience.length > 0) {
      dispatch(saveExperienceDetailsAction(inf.email, workExperience));
    } else {
      alert("Please add atleast one Experience Details");
    }
  };

  const renderExperiences = () => {
    return (
      <>
        <p className="font-primayfont text-dark-blue text-sm font-normal lg:text-base mt-4">
          Tell us about the workExperience you have gained throughout. These
          details will be visible on your main profile(For Mentors). Please save
          added details before leaving tab
        </p>

        <div className="flex space-x-4 lg:space-x-9">
          <div className="field w-1/2">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
              Company
            </p>
            <input
              type="text"
              onChange={(e) => {
                setCompany(e.target.value);
              }}
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
              onChange={(e) => {
                setDesignation(e.target.value);
              }}
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
            <input
              type={"date"}
              className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
            />
          </div>
          <div className="field w-1/2">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4 lg:mt-9">
              Last month
            </p>
            <input
              type={"date"}
              className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 lg:space-x-9 mt-6 mb-9">
          <div className="field w-1/2">
            <CustomButton
              text="Save"
              styleClass="w-full"
              onClick={() => hitSaveExperience()}
            />
          </div>
          <div className="field w-1/2">
            <CustomButton
              text="Add Another"
              styleClass="w-full"
              onClick={addExperienceToArr}
            />
          </div>
        </div>

        <div className="flex flex-col">
          {workExperience.map((workExperience, index) => {
            return (
              <MapComponentExperience
                data={workExperience}
                index={index}
                key={index}
                onRemove={() => {
                  removeExperience(index);
                }}
              />
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <HybridDashboardNavigator activeManageProfile={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full mb-14">
          <p className="font-primayfont text-dark-blue font-bold text-xl capitalize mt-7">
            Manage Profile
          </p>
          <div className="flex flex-row h-9 mt-6 lg:justify-between">
            <div className="flex flex-row">
              <div onClick={() => navigateToBasicInfo(navigate)}>
                <p className="font-medium text-base w-max pb-1 text-dark-blue cursor-pointer">
                  Basic Information
                </p>
              </div>
              <div
                className="ml-6"
                onClick={() => navigateToMentorshipInfo(navigate)}
              >
                <p className="font-medium text-base w-max pb-1 text-dark-blue cursor-pointer">
                  Mentorship
                </p>
              </div>
              <div
                className="ml-6"
                onClick={() => navigateToEducationInfo(navigate)}
              >
                <p className="font-medium text-base w-max pb-1 text-dark-blue cursor-pointer">
                  Education
                </p>
              </div>
              <div
                className="ml-6"
                onClick={() => navigateToExperienceInfo(navigate)}
              >
                <p className="font-medium text-base w-max pb-1 text-dark-blue cursor-pointer">
                  Experience
                </p>
                <div className="h-1 bg-primary rounded-full" />
              </div>
            </div>
          </div>
          <hr
            className="w-full -mt-1 lg:w-full"
            style={{ color: Colors.hrlightBlue }}
          />
          <div className="lg:max-w-md">{renderExperiences()}</div>
        </div>
      </div>
    </div>
  );
};

const MapComponentExperience = ({ data, onRemove }) => {
  return (
    <div className="flex border-1 border-textInputBorder rounded-lg px-3 py-3 justify-between max-w-lg mb-6">
      <div className="flex ">
        <div className="border-1 border-dark-blue h-11 w-11 rounded-full bg-dark-blue">
          <ImOffice size={42} color={Colors.white} className="py-2 px-2" />
        </div>
        <div className="ml-3">
          <h3 className="font-primayfont text-dark-blue text-base font-normal">
            Worked as {data.designation} in {data.company}
          </h3>
          <p className="font-primayfont w-max text-dark-blue bg-chipGrey rounded-lg px-2 py-2 text-xs font-normal mt-2 capitalize">
            {data.startDate} - {data.endDate}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <AiOutlineClose size={24} color={Colors.dark_blue} onClick={onRemove} />
      </div>
    </div>
  );
};

export default ExperienceInfo;
