import React from "react";
import Colors from "../../../utils/Colors";
import CustomButton from "../CustomButton";

const SimilarMentorBox = ({ data }) => {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex ">
        <div
          className="rounded-full h-12 w-12 flex justify-center items-center border-2 mr-3"
          style={{ borderColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <img
            src={data.img}
            alt="mentor"
            height={48}
            width={48}
            className="rounded-full"
          />
        </div>
        <div className="ml-3 h-full flex flex-col justify-between">
            <h2 className="text-base font-primayfont text-dark-blue font-semibold">
              {data.name}
            </h2>
            <p className="text-sm font-primayfont text-grey font-normal">
              {data.work}
            </p>
        </div>
      </div>
      <div>
        {/* // background: `linear-gradient(180deg, ${Colors["primay-light"]} 0%, ${Colors["primary-dark"]} 100%)`, */}
        <button
          className="py-2 px-7 rounded-lg font-normal text-base font-primayfont text-dark-blue"
          style={{
            background: Colors.white,
            borderWidth: 1,
            borderColor: "rgba(0, 16, 60, 0.45)",
          }}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default SimilarMentorBox;
