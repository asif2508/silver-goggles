import React from "react";
import workicon from "../../images/suitcase.png";
import suitcaseicon from "../../images/mortarboard.png";

const MentorBox = ({ user, onClickButton, onClickProfile }) => {
  return (
    <div
      className="mentor-container flex flex-col items-center mx-4"
      key={user._id}
    >
      <div
        className="flex flex-col sm:flex-row space-x-2 justify-center "
        key={user.name}
      >
        <div className="left w-full sm:w-2/5 justify-center items-center flex flex-col">
          <img
            src={user.pic}
            alt="Kalpesh Lohar"
            className="h-60 w-48 rounded-3xl xl:w-48"
          />
        </div>
        <div className="right w-full  sm:w-3/5 mt-5 flex flex-col justify-center items-center sm:justify-start sm:items-start xl:items-start xl:w-3/5">
          <h3 className="text-dark-blue font-bold text-xl">
            {user.name.charAt(0).toUpperCase().trim() +
              user.name.slice(1).trim()}
          </h3>
          <div className="flex items-center">
            <img src={workicon} alt="Work" className="h-6 mr-3" />
            <p className="mt-1 py-1">
              {user.work.charAt(0).toUpperCase().trim() +
                user.work.slice(1).trim()}
            </p>
          </div>
          <div className="flex items-center mb-2">
            <img src={suitcaseicon} alt="Education" className="h-6 mr-3" />
            <p className="-mt-1">
              {user.education.charAt(0).toUpperCase().trim() +
                user.education.slice(1).trim()}
            </p>
          </div>
          <hr className="text-light-blue py-2" />
          <div className="chips flex flex-wrap justify-start xl:justify-start max-w-min xl:max-w-full">
            {user.choices.split(",").map((choice) => (
              <div
                className="chip1  rounded-3xl bg-grey font-medium w-max px-3 py-1 mr-1 my-1 shadow-sm;"
                key={choice}
              >
                {choice.charAt(0).toUpperCase().trim() + choice.slice(1).trim()}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <button className="blue-button my-2 sm:my-0" onClick={onClickButton}>
          Book 1:1 Session
        </button>
        <button className="blue-button my-2 sm:my-0" onClick={onClickProfile}>
          View Profile
        </button>
      </div>
    </div>
  );
};

export default MentorBox;
