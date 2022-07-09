import React from "react";
import HomeStrings from "../../../utils/Strings/HomeStrings";

const MentorSliderDesktop = ({ mentors }) => {
  const [hover, setHover] = React.useState(false);
  
  return (
    <div className="flex flex-wrap justify-between w-full space-x-4">
      {mentors.slice(0, 8).map((mentor, index) => {
        return (
          <div
            key={index}
            className="max-h-mentorbox flex flex-col h-full justify-center items-center max-w-threethirty w-1/5 py-8"
            style={{ backgroundColor: "rgb(0,0,0,0)" }}
          >
            <img
              src={mentor.imgUrl}
              alt="mentor"
              className="w-full min-h-mentor min-w-mentor h-full rounded-lg max-h-mentorbox"
            />
            <div className="flex justify-center flex-col items-center">
              <h3 className="mt-6 font-primayfont text-dark-blue font-bold text-xl">
                {mentor.mentorName}
              </h3>
              <p className="mt-2 font-primayfont font-normal text-base text text-grey">
                {mentor.mentorPost}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MentorSliderDesktop;
