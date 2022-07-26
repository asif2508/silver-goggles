import React, { useEffect, useState } from "react";
import background from "../../images/background.jpg";
import workicon from "../../images/suitcase.png";
import anonymous from "../../images/anonymous.jpg";
import suitcaseicon from "../../images/mortarboard.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mentorProfile } from "../../actions/auth";
import {
  disableAsMentor,
  editMentor,
  removeMentor,
} from "../../actions/mentors";
import Loading from "../Loading";

const Profile = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const remMentor = useSelector((state) => state.removeMentor);
  const { loading, data } = remMentor;

  useEffect(() => {
    if (data) {
      alert(data);
    }
  }, [data]);

  dispatch(mentorProfile(user, navigate, true));

  return (
    user && (
      <div className="min-h-half h-full">
        <div className={`{py-10 ${loading ? "block" : "hidden"}`}>
          {loading && <Loading />}
        </div>
        <div className="maincontainer my-5">
          <div className="image-container flex flex-col justify-center items-center">
            <img
              src={background}
              alt="Background"
              className="h-32 w-full md:w-2/3"
            />
            <img
              src={user?.isMentor ? user?.mentorProfile.pic : anonymous}
              alt="Profile Photo"
              className="rounded-full h-32 w-32 mx-auto -mt-16 cursor-pointer"
            />

            <h2 className="font-bold text-dark-blue text-xl py-2">
              {user?.name.charAt(0).toUpperCase().trim() +
                user?.name.slice(1).trim()}
            </h2>
          </div>

          {user?.isMentor ? (
            <div>
              <div className="text flex flex-col justify-center items-center  ">
                <div className="flex items-center">
                  <img src={workicon} alt="Work" className="h-6 mr-3" />
                  <p className="mt-1 py-1 text-sm">
                    {user?.mentorProfile.work.charAt(0).toUpperCase().trim() +
                      user?.mentorProfile.work.slice(1).trim()}
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <img
                    src={suitcaseicon}
                    alt="Education"
                    className="h-6 mr-3"
                  />
                  <p className="-mt-1 text-sm">
                    {user?.mentorProfile.education
                      .charAt(0)
                      .toUpperCase()
                      .trim() + user?.mentorProfile.education.slice(1).trim()}
                  </p>
                </div>
              </div>
              <div className="chips max-w-min mx-auto mb-5 mt-5">
                <div className="flex flex-wrap justify-center items-center xl:justify-center max-w-min xl:max-w-full">
                  {user?.mentorProfile.choices
                    .split(",")
                    .map((choice, index) => (
                      <div
                        className="chip1  rounded-3xl bg-grey font-medium w-max px-3 py-1 mr-1 my-1 shadow-sm"
                        key={index}
                      >
                        {choice.charAt(0).toUpperCase().trim() +
                          choice.slice(1).trim()}
                      </div>
                    ))}
                </div>
                {!user.mentorProfile.isFirstTime && (
                  <div className="flex justify-center items-center py-5">
                    <button
                      className="blue-button"
                      onClick={() => {
                        window.confirm(
                          "Are you sure you want to edit your profile? Your Old data will removed and You need to Verify Again with New Details"
                        ) && dispatch(editMentor(user, navigate));
                      }}
                    >
                      Edit Profile
                    </button>
                    <button
                      className="blue-button"
                      onClick={() => {
                        window.confirm("Are you sure?") &&
                          dispatch(disableAsMentor(user, navigate));
                      }}
                    >
                      {user.mentorProfile.isListed
                        ? "Hide Profile"
                        : "Unhide Profile"}
                    </button>
                    <button
                      className="blue-button"
                      onClick={() => {
                        window.confirm(
                          "Are you sure you want to delete your profile?"
                        ) && dispatch(removeMentor(user));
                      }}
                    >
                      Delete Profile
                    </button>
                  </div>
                )}
              </div>
              <div className="text flex flex-col justify-center items-center  ">
                <div className="flex items-center">
                  <p className="mt-1 py-1 text-lg font-bold">
                    {user.mentorProfile.isListed
                      ? "Your Profile is Live on Website"
                      : "Your Profile will be Live soon"}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="editprofile flex mb-5 flex-col justify-center items-center">
              <p className="-mt-1-pt-2 text-sm pb-5">{user?.email}</p>
              <div className="flex flex-wrap items-center justify-center">
                <Link to="/mentors">
                  <button className="blue-button my-1 mx-2">Find Mentor</button>
                </Link>
                <Link to="/edit-mentor-profile">
                  <button className="blue-button my-1 mx-2">
                    Become Mentor
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Profile;
