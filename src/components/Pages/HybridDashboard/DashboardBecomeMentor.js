import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Colors from "../../../utils/Colors";
import CustomButton from "../../Component/CustomButton";
import DonutChartProfile from "../../Component/DonutChartProfile";
import HeaderSeprater from "../../Component/HeaderSeprater";
import HybridDashboardNavigator from "../../Component/HybridDashboardNavigator";
import Header from "../../Header/Header";
import { userDetails } from "./UserData";

const DashboardBecomeMentor = () => {
  const [data, setdata] = useState();
  const [personalDetails, setPersonalDetails] = useState(false);
  const [professionalDetails, setProfessionalDetails] = useState(false);
  const [mentorshipDetails, setMentorshipDetails] = useState(false);
  const [eductionalDetails, setEductionalDetails] = useState(false);
  const [perCount, setPerCount] = useState(0);

  const navigate = useNavigate()

  useEffect(() => {
    userDetails(setdata);
  }, []);

  useEffect(()=>{
    setPersonalDetails(data?.personalProfileCheck)
    setMentorshipDetails(data?.mentorProfileCheck)
    setProfessionalDetails(data?.Professional.workExperience.length>0 ? true : false)
    setEductionalDetails(data?.Education.length>0 ? true : false)
  },[data])

  useEffect(() => {
    const calcuateCount = () => {
      let cnt = 0;
      if (personalDetails) {
        cnt += 25;
      }
      if (mentorshipDetails) {
        cnt += 25;
      }
      if (eductionalDetails) {
        cnt += 25;
      }
      if (professionalDetails) {
        cnt += 25;
      }
      return cnt;
    };
    setPerCount(calcuateCount());
  }, [
    personalDetails,
    mentorshipDetails,
    professionalDetails,
    eductionalDetails
  ]);

  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <HybridDashboardNavigator activeBecomeMentor={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full mb-14">
          <div className="flex items-center -mb-16">
            <DonutChartProfile percentage={perCount} />
            <CustomButton
              styleClass={"max-w-threethirty h-12 -mt-16"}
              customColor={perCount===100 ? "" :Colors.dark_grey}
              text={"Apply Now"}
              extraProps={{ disabled: perCount === 100 ? false : true }}
            />
          </div>
          {!personalDetails && (
            <div className="font-primayfont text-dark-blue text-sm lg:text-base font-normal flex">
              <p>You have not filled Personal Details</p>
              <p onClick={() => navigate('/dashboard/manage-profile')} className="underline text-primar-second font-primayfont font-semibold ml-2 cursor-pointer">
                Fill Now
              </p>
            </div>
          )}
          {!eductionalDetails && (
            <div className="font-primayfont text-dark-blue text-sm lg:text-base font-normal flex">
              <p>You have not filled Education Details</p>
              <p onClick={() => navigate('/dashboard/manage-profile/education-info')} className="underline text-primar-second font-primayfont font-semibold ml-2 cursor-pointer">
                Fill Now
              </p>
            </div>
          )}
          {!professionalDetails && (
            <div className="font-primayfont text-dark-blue text-sm lg:text-base font-normal flex">
              <p>You have not filled Experience Details</p>
              <p onClick={() => navigate('/dashboard/manage-profile/experience-info')} className="underline text-primar-second font-primayfont font-semibold ml-2 cursor-pointer">
                Fill Now
              </p>
            </div>
          )}
          {!mentorshipDetails && (
            <div className="font-primayfont text-dark-blue text-sm lg:text-base font-normal flex">
              <p>You have not filled Mentorship Details</p>
              <p onClick={() => navigate('/dashboard/manage-profile/mentorship-info')} className="underline text-primar-second font-primayfont font-semibold ml-2 cursor-pointer">
                Fill Now
              </p>
            </div>
          )}
          <div className="font-primayfont text-dark-blue text-lg mt-12 lg:text-xl font-normal flex">
            <p>Status:</p>
            <p className="text-primar-second font-primayfont font-semibold ml-2">
              {data && data?.mentorStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBecomeMentor;
