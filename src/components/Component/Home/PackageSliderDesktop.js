import React from "react";
import Colors from "../../../utils/Colors";
import HomeStrings from "../../../utils/Strings/HomeStrings";
import "react-awesome-slider/dist/styles.css";
import Carousel from "react-elastic-carousel";
import mentors_short_image from "../../../images/mentors_short_icon.svg";
import { AiOutlineArrowRight } from "react-icons/ai";

const PackageSliderDesktop = () => {
  const packages = [
    {
      title: HomeStrings.package_1,
      description: HomeStrings.package_1_text,
      duration: HomeStrings.package_1_time,
      price: HomeStrings.package_1_price,
    },
    {
      title: HomeStrings.package_1,
      description: HomeStrings.package_1_text,
      duration: HomeStrings.package_1_time,
      price: HomeStrings.package_1_price,
    },
    {
      title: HomeStrings.package_1,
      description: HomeStrings.package_1_text,
      duration: HomeStrings.package_1_time,
      price: HomeStrings.package_1_price,
    },
    {
      title: HomeStrings.package_1,
      description: HomeStrings.package_1_text,
      duration: HomeStrings.package_1_time,
      price: HomeStrings.package_1_price,
    },
    {
      title: HomeStrings.package_1,
      description: HomeStrings.package_1_text,
      duration: HomeStrings.package_1_time,
      price: HomeStrings.package_1_price,
    },
    {
      title: HomeStrings.package_1,
      description: HomeStrings.package_1_text,
      duration: HomeStrings.package_1_time,
      price: HomeStrings.package_1_price,
    },
    {
      title: HomeStrings.package_1,
      description: HomeStrings.package_1_text,
      duration: HomeStrings.package_1_time,
      price: HomeStrings.package_1_price,
    },
    {
      title: HomeStrings.package_1,
      description: HomeStrings.package_1_text,
      duration: HomeStrings.package_1_time,
      price: HomeStrings.package_1_price,
    },
    {
      title: HomeStrings.package_1,
      description: HomeStrings.package_1_text,
      duration: HomeStrings.package_1_time,
      price: HomeStrings.package_1_price,
    },
  ];

  return (
    <div className="flex flex-wrap w-full -ml-4 justify-between">
      {packages.slice(0, 6).map((package1, index) => {
        return (
          <div key={index} className="ml-4 max-w-packagebox min-w-mentorbox">
            <div
              className="rounded-lg px-6 py-6 justify-center flex flex-col mt-12 bg-white max-w-md"
              style={{
                borderWidth: 1.11,
                borderBottomColor: Colors.dark_blue,
                borderBottomWidth: 3.227,
                borderRightWidth: 3.227,
              }}
            >
              <div className="flex flex-row justify-between items-center">
                <h3 className="font-primayfont text-dark-blue font-bold text-lg">
                  {package1.title}
                </h3>
                <img
                  src={mentors_short_image}
                  alt="mentors"
                  className="w-1/5"
                />
              </div>
              <p className="mt-4 pr-1 font-primayfont font-medium text-base text text-dark-blue">
                {package1.description}
              </p>
              <div className="flex flex-row justify-between items-center mt-4">
                <h3 className="font-primayfont text-dark-blue font-bold text-base">
                  {package1.duration}
                </h3>
                <h3 className="font-primayfont text-dark-blue font-bold text-base">
                  {package1.price}
                </h3>
              </div>
              <button
                className={
                  "py-1 px-3 mt-4 w-2/3 rounded-lg text-white font-bold text-base font-primayfont my-2 flex justify-center items-center"
                }
                style={{
                  background: `linear-gradient(180deg, ${Colors["primay-light"]} 0%, ${Colors["primary-dark"]} 100%)`,
                }}
              >
                {HomeStrings.explore_mentors}
                <AiOutlineArrowRight
                  className="w-6 h-6 ml-3"
                  color={Colors["white"]}
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PackageSliderDesktop;
