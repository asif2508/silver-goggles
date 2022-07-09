import React, { useEffect, useState } from "react";
import workicon from "../../../images/suitcase.png";
import suitcaseicon from "../../../images/mortarboard.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getMentorProfileById } from "../../../actions/mentors";
import { useDispatch, useSelector } from "react-redux";

const DedicateMentor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { loading, mentor } = useSelector((state) => state.getMentorById);

  useEffect(() => {
    dispatch(getMentorProfileById(id));
    console.log(mentor);
    console.log(loading);
  }, [dispatch, navigate]);

  return (
    mentor && (
      <div className="min-h-half h-full">
        <div className="maincontainer my-5">
          <div className="image-container flex flex-col justify-center items-center">
            <img
              src={mentor?.mentorProfile.pic}
              alt="Profile Photo"
              className="rounded-full h-32 w-32 mx-auto -mt-16 cursor-pointer"
            />

            <h2 className="font-bold text-dark-blue text-xl py-2">
              {mentor?.name.charAt(0).toUpperCase().trim() +
                mentor?.name.slice(1).trim()}
            </h2>
          </div>

          <div>
            <div className="text flex flex-col justify-center items-center  ">
              <div className="flex items-center">
                <img src={workicon} alt="Work" className="h-6 mr-3" />
                <p className="mt-1 py-1 text-sm">
                  {mentor?.mentorProfile.work.charAt(0).toUpperCase().trim() +
                    mentor?.mentorProfile.work.slice(1).trim()}
                </p>
              </div>
              <div className="flex items-center mb-2">
                <img src={suitcaseicon} alt="Education" className="h-6 mr-3" />
                <p className="-mt-1 text-sm">
                  {mentor?.mentorProfile.education
                    .charAt(0)
                    .toUpperCase()
                    .trim() + mentor?.mentorProfile.education.slice(1).trim()}
                </p>
              </div>
            </div>
            <div className="chips max-w-min mx-auto mb-5 mt-5">
              <div className="flex flex-wrap justify-center items-center xl:justify-center max-w-min xl:max-w-full">
                {mentor?.mentorProfile.choices.split(",").map((choice) => (
                  <div
                    className="chip1  rounded-3xl bg-grey font-medium w-max px-3 py-1 mr-1 my-1 shadow-sm"
                    key={choice}
                  >
                    {choice.charAt(0).toUpperCase().trim() +
                      choice.slice(1).trim()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DedicateMentor;
