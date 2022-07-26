import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Colors from "../../utils/Colors";

const MapComponent = ({ data }) => {
  return (
    <>
      <div className="py-5 px-4">
        <div
          className="rounded-lg border-2 px-5 py-5 max-w-threethirty lg:max-w-lg"
          style={{
            borderColor: "rgba(0, 16, 60, 0.15)",
          }}
        >
          <div className="flex flex-col lg:flex-row lg:w-full">
            <div className="lg:w-3/12">
              <img
                className="lg:h-60 w-full md:w-10/12 lg:w-full"
                src={data.img}
                alt="mentor"
              />
            </div>
            <div className="flex-col mt-4 lg:w-9/12 lg:ml-4 lg:mt-0">
              <div className="flex justify-between lg:w-full">
                <p className="font-bold font-primayfont text-lg text-dark-blue lg:text-xl">
                  {data.name}
                </p>
                {data.isFavourite ? (
                  <AiFillHeart className="h-6 w-6" color={Colors.red} />
                ) : (
                  <AiOutlineHeart
                    className="h-6 w-6"
                    color={Colors.dark_blue}
                  />
                )}
              </div>
              <div className="flex">
                <p className="font-primayfont text-dark-blue text-base mt-1">
                  {data.designation}
                </p>
                <p className="font-primayfont text-grey text-base mt-1 ml-1">
                  at
                </p>
                <p className="font-primayfont text-dark-blue text-base mt-1 ml-1">
                  {data.workIn}
                </p>
              </div>
              <div className="flex">
                <p className="font-primayfont text-grey text-base mt-1">
                  🎯 Studied
                </p>
                <p className="font-primayfont text-dark-blue text-base mt-1 ml-1">
                  {data.study}
                </p>
                <p className="font-primayfont text-grey text-base mt-1 ml-1">
                  from
                </p>
                <p className="font-primayfont text-dark-blue text-base mt-1 ml-1">
                  {data.studiedFrom}{" "}
                </p>
              </div>
              <hr className="mt-4" style={{ color: Colors.lightgrey }} />
              <p className="lg:mt-4 font-primayfont text-dark-blue hidden lg:block">
                {data.about}
              </p>
              <div className="my-4 w-full flex-wrap hidden lg:flex mt-3">
                {data.skills.map((text, index) => (
                  <p
                    className="flex flex-row py-2 px-2 capitalize rounded-3xl font-medium font-primayfont text-xs lg:text-sm text-center items-center text-dark-blue mr-1 cursor-pointer mt-1"
                    style={{ background: Colors.grey }}
                    key={index}
                  >
                    {text}
                  </p>
                ))}
              </div>
              <h3 className="lg:hidden mt-4 text-dark-blue font-primayfont font-semibold text-lg">
                {data.price}
              </h3>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <h3 className="hidden lg:block mt-4 ml-8 lg:ml-0 lg:text-xl lg:mt-0 lg:w-44 text-dark-blue font-primayfont font-semibold">
              {data.price}
            </h3>
            <div className="flex flex-row mt-4 lg:mt-0 w-full lg:w-4/6">
              <button
                className="w-full lg:w-40 h-10 text-white rounded-lg font-primayfont font-bold"
                style={{
                  background:
                    "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                }}
              >
                View Profile
              </button>
              <button
                className="w-full lg:w-40 h-10 text-white font-primayfont font-bold rounded-lg ml-4"
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
    </>
  );
};

export default MapComponent;
