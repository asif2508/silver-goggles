import React from "react";
import HomeStrings from "../../../utils/Strings/HomeStrings";
import CustomButton from "../CustomButton";

const HomeMentorBox = ({ mentorName, mentorPost, imgUrl }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div className="flex flex-col w-48 sm:w-1/3">
      <div
        className="flex-col rounded-lg bg-dark-blue flex"
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        <img src={imgUrl} alt="mentor" className="w-full h-full rounded-lg" />
        {hover && (
          <div className="bg-dark-blue h-full -mt-80 opacity-60 rounded-lg">
            <div className="items-center mt-24 justify-center flex flex-col">
              <button className="px-4 rounded-lg text-white font-bold text-xs font-primayfont my-2 h-10 border-2 border-white w-4/5 cursor-pointer">
                {HomeStrings.view_profile}
              </button>
              <button className="px-4 rounded-lg text-white font-bold text-xs font-primayfont my-2 h-10 border-2 border-white w-4/5 cursor-pointer">
                {HomeStrings.book_now}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center flex-col items-center">
        <h3 className="mt-6 font-primayfont text-dark-blue font-bold text-xl">
          {mentorName}
        </h3>
        <p className="mt-2 font-primayfont font-normal text-base text text-grey">
          {mentorPost}
        </p>
        <CustomButton text="Explore all" styleClass="w-11/12 mt-6 h-14" />
      </div>
    </div>
  );
};

export default HomeMentorBox;
