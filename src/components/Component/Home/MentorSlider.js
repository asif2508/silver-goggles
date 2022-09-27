import Carousel, { consts } from "react-elastic-carousel";
import HomeMentorBox from "./HomeMentorBox";
import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const MentorSlider = ({ mentors }) => {
  return (
    <Carousel
      enableAutoPlay={false}
      itemsToShow={1}
      easing="cubic-bezier(1,.15,.55,1.54)"
      tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
      transitionMs={700}
      onNextEnd={() => {}}
      enableSwipe
      disableArrowsOnEnd={false}
      renderArrow={({ type, onClick }) => {
        const pointer =
          type === consts.PREV ? (
            <GrFormPrevious size={36} />
          ) : (
            <GrFormNext size={36} />
          );
        return (
          <div
            onClick={onClick}
            className="h-full flex justify-center items-center"
          >
            {pointer}
          </div>
        );
      }}
      pagination={false}
    >
      {mentors.map((mentor, index) => {
        return (
          <div
            key={index}
            className="w-full h-96 flex flex-col justify-center items-center py-0"
            style={{ backgroundColor: "rgb(0,0,0,0)" }}
          >
            <HomeMentorBox
              imgUrl={mentor.imgUrl}
              mentorName={mentor.mentorName}
              mentorPost={mentor.mentorPost}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default MentorSlider;
