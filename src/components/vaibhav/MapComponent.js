import React from "react";
import Images from "../../images/Kapil_Batra.svg";
import men from "../../images/Rectangle_18.svg";
import Study from "../../images/Studied_B.tech_from_IIT.svg";
import Colors from "../../utils/Colors";
import Heart from "../../images/Vector_(1).svg";
import Value from "../../images/Price.svg";
import LoginString from "../../utils/Strings/LoginString";
const MapComponent = () => {
  const searchMenu = [
    "ui design",
    "product design",
    "figma",
    "business research",
   
  ];

  
  return (
    <>
      <div className="min-h-half mb-24">
        
        <div
          className="rounded-lg border-2 mx-4 mt-12 px-4 py-4 lg:w-2/4 lg:ml-24"
          style={{
            borderColor: "rgba(0, 16, 60, 0.15)",
          }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="">
              <img className="lg:h-60 w-full md:w-10/12 lg:w-96" src={men} />
              <h3 className=" mt-4 ml-8 text-dark-blue font-primayfont font-semibold">
                {" "}
                699 Onwards
                </h3>
              
            </div>
            <div className="flex-col pl-4">
              <img className="float-right" src={Heart} />
              <p className="font-bold font-primayfont text-base mb-2">Kapil Batra 😇</p>
              <p className="mb-2 font-primayfont">Product Designer at MetaCube Softwere</p>
              <p className="font-primayfont "> Studied B.Tech from IIT</p>
              <hr className=" mt-4" style={{ color: Colors.lightgrey }} />
              
              <p className=" font-primayfont hidden lg:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing el it.
                Faucibus mauris semper massa ultrices eget sit vu lputate. Ante
                diam metus convallis nullam.
              </p>
              <div className="my-4 flex w-full flex-wrap ">
              {searchMenu.map((text) => (
                <p
                  className="flex flex-row py-2 px-2 mb-4 capitalize rounded-lg   font-medium font-primayfont text-xs text-center items-center text-dark-blue mr-4  cursor-pointer"
                  style={{ background: Colors.grey }}
                >
                  {text}
                </p>
              ))}
            </div>
              <div className="flex flex-row">
                <button
                  className="w-36 h-10 text-white rounded-lg font-primayfont mt-4 font-bold"
                  style={{
                    background:
                      "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                  }}
                >
                  View Profile
                </button>
                <button
                  className="w-36 h-10 text-white font-primayfont font-bold rounded-lg ml-4 mt-4"
                  style={{
                    background:
                      "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapComponent;

{
  /*  */
}
