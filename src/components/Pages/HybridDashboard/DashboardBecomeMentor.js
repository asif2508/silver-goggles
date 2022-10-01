import React from "react";
import Colors from "../../../utils/Colors";
import CustomButton from "../../Component/CustomButton";
import DonutChartProfile from "../../Component/DonutChartProfile";
import HeaderSeprater from "../../Component/HeaderSeprater";
import HybridDashboardNavigator from "../../Component/HybridDashboardNavigator";
import Header from "../../Header/Header";
import Asset from "../../../images/asset_edit_mentor_1.svg";
import AssetLarge from "../../../images/asset_edit_mentor_1_large.svg";

const DashboardBecomeMentor = ({ navigate }) => {
  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <HybridDashboardNavigator activeBecomeMentor={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full mb-14">
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
          <div className="flex items-center -mb-16">
            <DonutChartProfile percentage={25} />
            <CustomButton styleClass={"max-w-threethirty h-12 -mt-16"} customColor={Colors.dark_grey} text={"Apply Now"} extraProps={{ disabled: true }} />
          </div>
          <div className="font-primayfont text-dark-blue text-sm lg:text-base font-normal flex">
            <p>You have not filled Personal Details</p>
            <p className="underline text-primar-second font-primayfont font-semibold ml-2">Fill Now</p>
          </div>
          <div className="font-primayfont text-dark-blue text-sm lg:text-base font-normal flex">
            <p>You have not filled Education Details</p>
            <p className="underline text-primar-second font-primayfont font-semibold ml-2">Fill Now</p>
          </div>
          <div className="font-primayfont text-dark-blue text-sm lg:text-base font-normal flex">
            <p>You have not filled Experience Details</p>
            <p className="underline text-primar-second font-primayfont font-semibold ml-2">Fill Now</p>
          </div>
          <div className="font-primayfont text-dark-blue text-sm lg:text-base font-normal flex">
            <p>You have not filled Mentorship Details</p>
            <p className="underline text-primar-second font-primayfont font-semibold ml-2">Fill Now</p>
          </div>
          <div className="font-primayfont text-dark-blue text-lg mt-12 lg:text-xl font-normal flex">
            <p>Status:</p>
            <p className="text-primar-second font-primayfont font-semibold ml-2">Not Applied</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBecomeMentor;
