import React from "react";
import HybridDashboardNavigator from "../../Component/HybridDashboardNavigator";
import Header from "../../Header/Header";
import HeaderSeprater from "../../Component/HeaderSeprater";
import greencheck from "../../../images/checkcirclegreen.svg";
import CustomButton from "../../Component/CustomButton";
import Colors from "../../../utils/Colors";
import { BsLock } from "react-icons/bs";
import { color } from "@mui/system";

const DashboardPackages = ({ navigate }) => {
  const features = [
    "Upto 30 min Virtual Meet",
    "Introductory Discussions",
    "Suitable for new Mentees",
  ];
  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <HybridDashboardNavigator activeManagePackage={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full">
          <p className="font-primayfont text-xl font-bold text-dark-blue pt-9">
            Manage Services
          </p>
          <div
            className="rounded-lg mb-4 w-full px-4 py-6 flex flex-col max-w-threethirty mt-4"
            style={{ borderWidth: 1, borderColor: "rgba(0, 16, 60, 0.45)" }}
          >
            <div className="flex justify-between items-start w-full">
              <div className="w-full text-center">
                <h3 className="text-xl font-primayfont text-dark-blue font-medium">
                  1:1 Call
                </h3>
                <h2 className="text-xl mt-3 font-primayfont text-dark-blue font-bold">
                  ₹49/-
                </h2>
              </div>
              <div></div>
            </div>
            <div
              className="w-full mt-4"
              style={{
                borderColor: "rgba(0, 16, 60, 0.15)",
                borderWidth: 0.5,
                borderStyle: "solid",
              }}
            />
            <div className="features flex flex-col w-full">
              {features.map((feature, index) => (
                <div className="my-2 flex items-start" key={index}>
                  <img src={greencheck} alt="check" />
                  <p className="text-base font-primayfont text-dark-blue font-normal ml-3">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <div className="button mt-3">
              <CustomButton
                styleClass="w-full"
                customColor={Colors.dark_grey}
                text={"Edit (Coming Soon)"}
                extraProps={{ disabled: true }}
                customIcon={<BsLock color={Colors.white} size={16} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPackages;
