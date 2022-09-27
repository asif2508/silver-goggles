import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import AssetHome21 from "../../../images/asset_home_2_1.svg";
import AssetHome22 from "../../../images/asset_home_2_2.svg";
import AssetHome23 from "../../../images/asset_home_2_3.svg";
import Colors from "../../../utils/Colors";
import HomeStrings from "../../../utils/Strings/HomeStrings";
import "react-awesome-slider/dist/styles.css";

const HomeSliderDesktop = () => {
  const assets = [
    {
      headline: HomeStrings.choose_a_mentor,
      description: HomeStrings.choose_a_mentor_text,
      imgUrl: AssetHome21,
    },
    {
      headline: HomeStrings.create_an_account,
      description: HomeStrings.create_an_account_text,
      imgUrl: AssetHome22,
    },
    {
      headline: HomeStrings.book_session,
      description: HomeStrings.book_session_text,
      imgUrl: AssetHome23,
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
                <h4 className="font-primayfont text-white font-bold text-lg mx-3 h-full text-center align-middle py-1">
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

export default HomeSliderDesktop;
