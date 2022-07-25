import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Colors from "../../utils/Colors";

const MapComponent = ({ data }) => {
  return (
    <>
      <div className="py-5 px-4">
        <div
          className="rounded-lg border-2 px-5 py-5 max-w-threethirty"
          style={{
            borderColor: "rgba(0, 16, 60, 0.15)",
          }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="">
              <img
                className="lg:h-60 w-full md:w-10/12 lg:w-96"
                src={data.img}
                alt="mentor"
              />
              <h3 className="hidden lg:block mt-4 ml-8 text-dark-blue font-primayfont font-semibold">
                {data.price}
              </h3>
            </div>
            <div className="flex-col mt-4">
              <div className="flex justify-between">
                <p className="font-bold font-primayfont text-lg text-dark-blue">
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
              <p className="font-primayfont text-dark-blue text-base mt-1">
                {data.designation}
              </p>
              <p className="font-primayfont text-dark-blue text-base mt-1">
                🎯 {data.study}
              </p>
              <hr className="mt-4" style={{ color: Colors.lightgrey }} />
              <p className=" font-primayfont hidden lg:block">{data.about}</p>
              <div className="my-4 w-full flex-wrap hidden lg:flex">
                {data.skills.map((text, index) => (
                  <p
                    className="flex flex-row py-2 px-2 mb-4 capitalize rounded-lg   font-medium font-primayfont text-xs text-center items-center text-dark-blue mr-4  cursor-pointer bg-grey"
                    key={index}
                  >
                    {text}
                  </p>
                ))}
              </div>
              <h3 className="lg:hidden mt-4 text-dark-blue font-primayfont font-semibold text-lg">
                {data.price}
              </h3>
              <div className="flex flex-row">
                <button
                  className="lg:w-36 w-1/2 h-10 text-white rounded-lg font-primayfont mt-4 font-bold"
                  style={{
                    background:
                      "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                  }}
                >
                  View Profile
                </button>
                <button
                  className="lg:w-36 w-1/2 h-10 text-white font-primayfont font-bold rounded-lg ml-4 mt-4"
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
