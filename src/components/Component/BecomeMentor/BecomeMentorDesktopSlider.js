import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import Asset21 from "../../../images/asset_becomementor_1_1.svg";
import Asset22 from "../../../images/asset_becomementor_1_2.svg";
import Asset23 from "../../../images/asset_becomementor_1_3.svg";
import Colors from "../../../utils/Colors";
import "react-awesome-slider/dist/styles.css";
import BecomeMentStrings from "../../../utils/Strings/BecomeMentStrings";

const BecomeMentorDesktopSlider = () => {
  const assets = [
    {
      headline: BecomeMentStrings.create_an_account,
      description: BecomeMentStrings.create_an_account_text,
      imgUrl: Asset21,
    },
    {
      headline: BecomeMentStrings.profile_review,
      description: BecomeMentStrings.profile_review_text,
      imgUrl: Asset22,
    },
    {
      headline: BecomeMentStrings.take_sessions,
      description: BecomeMentStrings.take_sessions_text,
      imgUrl: Asset23,
    },
  ];

  return (
    <div className="flex justify-center items-center pb-24">
      {assets.map((asset, index) => {
        return (
          <div
            className="h-full w-full bg-dark-blue pr-8 pl-0 py-0 flex flex-col justify-start items-start md:justify-center md:items-center"
            key={index}
          >
            <img className="w-52" alt="Home page" src={asset.imgUrl} />
            <div>
              <div className="flex flex-row align-middle mt-7">
                <BsCheckCircle
                  style={{
                    color: Colors["primay-light"],
                  }}
                  className="h-8 w-8 cursor-pointer"
                />
                <h4 className="font-primayfont text-white font-bold text-lg mx-3 h-full align-middle py-1">
                  {asset.headline}
                </h4>
              </div>
              <p className="ml-11 text-base text-white mt-1 pr-2">
                {asset.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BecomeMentorDesktopSlider;
