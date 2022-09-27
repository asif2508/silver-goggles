import React from "react";
import Feature1 from "../../../images/asset_features_1.svg";
import Feature2 from "../../../images/asset_features_2.svg";
import Feature3 from "../../../images/asset_features_3.svg";
import Feature4 from "../../../images/asset_features_4.svg";
import BecomeMentStrings from "../../../utils/Strings/BecomeMentStrings";

const Features = () => {
  const assets = [
    {
      headline: BecomeMentStrings.feature_1,
      description: BecomeMentStrings.feature_1_text,
      imgUrl: Feature1,
    },
    {
      headline: BecomeMentStrings.feature_2,
      description: BecomeMentStrings.feature_2_text,
      imgUrl: Feature2,
    },
    {
      headline: BecomeMentStrings.feature_3,
      description: BecomeMentStrings.feature_3_text,
      imgUrl: Feature3,
    },
    {
      headline: BecomeMentStrings.feature_4,
      description: BecomeMentStrings.feature_4_text,
      imgUrl: Feature4,
    },
  ];

  return (
    <div className="flex flex-wrap w-full pt-2 justify-between">
      {assets.map((asset, index) => {
        return (
          <div key={index} className="flex mt-6 lg:w-1/2">
            <div className="w-14">
              <img className="w-14 h-14" alt="feature" src={asset.imgUrl} />
            </div>
            <div className="flex flex-col pl-5 w-4/5">
              <h1 className="font-bold font-primayfont text-lg text-dark-blue self-start lg:text-2xl">
                {asset.headline}
              </h1>
              <p className="font-primayfont text-dark-blue font-normal text-sm mt-2">
                {asset.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
