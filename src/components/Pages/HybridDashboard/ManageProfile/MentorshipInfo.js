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
import SaveButtonProfile from "../../../Component/SaveButtonProfile";
import {
  saveMentorshipDetailsAction,
} from "../../../../actions/users";

const MentorshipInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const inf = JSON.parse(localStorage.getItem(Constants.userInfo));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
    saveData({ userId: inf._id });
  }, [navigate]);

  const saveData = (newOBj) => {
    setData({ ...data, ...newOBj });
  };

  const saveInfoTrigger = () => {
    if(data.skills.length<4){
     alert("Skills atleast contain 5 Skills") 
    }else{
      dispatch(saveMentorshipDetailsAction(data));
    }
  };

  const renderMentorshipInformations = () => {
    return (
      <>
        <div className="mb-4 mt-6">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="website"
          >
            Website (optional)
          </label>
          <input
            className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="website"
            onChange={(e) => saveData({ website: e.target.value })}
            type="text"
            placeholder="Enter Website (If any have)"
            border-hrlightBlue
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="skills"
          >
            Skills
          </label>
          <input
            className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="skills"
            type="text"
            onChange={(e) => saveData({ skills: e.target.value.split(',') })}
            placeholder="Enter Your Skills (Comma sperated, Enter minimum 5 Skills)"
            border-hrlightBlue
          />
        </div>
        <div>
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="username"
          >
            Why do you want to be a mentor? (Non-visible)
          </label>
          <textarea
            className=" rounded-lg w-full h-36 pt-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="whymentor"
            type="text"
            onChange={(e) => saveData({ whyWantToMentor: e.target.value })}
            placeholder="Why do you want to be a mentor?"
            border-hrlightBlue
          />
        </div>
        {
          <SaveButtonProfile
            click={() => saveInfoTrigger()}
          />
        }
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
                <div className="h-1 bg-primary rounded-full" />
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
              </div>
            </div>
          </div>
          <hr
            className="w-full -mt-1 lg:w-full"
            style={{ color: Colors.hrlightBlue }}
          />
          <div className="lg:max-w-md">{renderMentorshipInformations()}</div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipInfo;
