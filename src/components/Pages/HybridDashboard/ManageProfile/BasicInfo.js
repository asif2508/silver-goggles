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
import { savePersonalDetailsAction } from "../../../../actions/users";
import { getUserDetails } from "../../../../api";
import { userDetails } from "../UserData";

const BasicInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const inf = JSON.parse(localStorage.getItem(Constants.userInfo));

  const [apiData, setapiData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    saveData({ email: inf.email, profileImg: "random Link for img" });
  }, [navigate]);

  useEffect(() => {
    userDetails(setapiData);
  }, []);

  useEffect(() => {
    try {
      if (apiData) {
        const personalData = apiData.Personal;
        console.log(personalData);
        saveData({
          gender: personalData.gender,
          industry: personalData.industry,
          linkedIn: personalData.linkedIn,
          address: personalData.address,
          // language: personalData.language.join(","),
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, [apiData]);

  const [img, setImg] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const saveData = (newOBj) => {
    setData({ ...data, ...newOBj });
  };

  const saveInfoTrigger = () => {
    dispatch(savePersonalDetailsAction(data));
  };

  console.log(data);

  const renderBasicInformations = () => {
    return (
      <>
        <div className="flex flex-row items-center pt-6">
          <img
            src={
              img
                ? img
                : "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png"
            }
            height={100}
            width={70}
            alt={"sample"}
          />
          <input
            accept="image/*"
            className="font-primayfont ml-4 py-2 h-12 px-9 text-white rounded-lg font-bold text-base"
            onChange={onImageChange}
            type="file"
            name="upload"
          />
        </div>
        {/* Basic information from start */}
        <div className="mb-4 mt-4">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            name="Gender"
            id="gender-select"
            value={data ? data.gender : ""}
            onChange={(e) => saveData({ gender: e.target.value })}
            className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
          >
            {data !== undefined ? (
              <option className="bg-white text-dark-blue" value="male">
                {data && data.gender}
              </option>
            ) : (
              <option className="bg-white text-dark-blue" value="">
                -- Select
              </option>
            )}

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
        <div className="mb-4">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="linkedin"
          >
            LinkedIn (Mandatory for Mentor)
          </label>
          <input
            className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="linkedin"
            type="text"
            value={data !== undefined ? data.linkedIn : ""}
            onChange={(e) => saveData({ linkedIn: e.target.value })}
            // value={data !== undefined ? data.linkedInProfile : ""}
            // onChange={(e) => saveData({ linkedInProfile: e.target.value })}
            placeholder="Enter profile link"
            border-hrlightBlue
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="address"
            type="text"
            value={data !== undefined ? data.address : ""}
            onChange={(e) => saveData({ address: e.target.value })}
            placeholder="Enter address here"
            border-hrlightBlue
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="language"
          >
            Language you Spoke
          </label>
          <input
            className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="languages"
            type="text"
            // value={data ? data.language.join(",") : ""}
            onChange={(e) => saveData({ language: e.target.value.split(",") })}
            placeholder="Enter languages (Comma seprated)"
            border-hrlightBlue
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-textBlack text-sm font-normal font-primayfont mb-2"
            htmlFor="username"
          >
            What is your Industry?
          </label>
          <input
            className=" rounded-lg w-full  py-3 text-gray-700 leading-6 border-textInputBorder outline-white border-1 px-4"
            id="username"
            type="text"
            value={data !== undefined ? data.industry : ""}
            onChange={(e) => saveData({ industry: e.target.value })}
            placeholder="Computer Science"
            border-hrlightBlue
          />
        </div>
        <SaveButtonProfile click={() => saveInfoTrigger()} />
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
                <div className="h-1 bg-primary rounded-full" />
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
              </div>
            </div>
          </div>
          <hr
            className="w-full -mt-1 lg:w-full"
            style={{ color: Colors.hrlightBlue }}
          />
          <div className="lg:max-w-md">{renderBasicInformations()}</div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
