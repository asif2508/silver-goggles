import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../../actions/auth.js";
import ErrorMessage from "../../ErrorMessage.js";
import Header from "../../Header/Header.js";
import Loading from "../../Loading.js";

const EditMentor = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  let { loading } = useSelector((state) => state.mentors);

  const [editing, setediting] = useState(false);
  const name = useState(user?.name);
  const [work, setWork] = useState("");
  const [education, setEducation] = useState("");
  const [choices, setChoices] = useState("");
  const [pic, setPic] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (!user?.isMentor) {
      e.preventDefault();
      const b = window.confirm("Are you Sure?");
      if (b && choices.split(",").length > 0 && choices.split(",").length < 6) {
        setediting(true);
        window.scrollTo(0, 0);
        alert(
          "Mentor Adding, Please do not close the tab or Page, Do not Refresh Current Page. You will be redirected automatically!!!"
        );
        dispatch(
          updateProfile(user, { name, work, education, choices }, pic, navigate)
        );
      } else {
        alert("Please fill all the fields");
      }
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return user && user.isMentor ? (
    <div className="min-h-half flex justify-center items-center">
      <p className="text-4xl font-bold text-center px-5">
        You are Already Mentor
      </p>
    </div>
  ) : (
    <div className="min-h-half">
      {user && name?.length > 0 ? (
        <>
          <div className="header">
            <Header />
            <div
              className="w-full hidden lg:block"
              style={{
                borderColor: "rgba(0, 16, 60, 0.15)",
                backgroundColor: "rgba(0, 16, 60, 0.15)",
                borderWidth: 0.5,
                borderStyle: "solid",
              }}
            />
          </div>
          <div className="pt-5 -mb-5">{editing && <Loading />}</div>
          <div className="contact flex flex-col w-full lg:flex-row">
            <div className="left form my-12 mx-4 flex flex-col lg:w-1/2 justify-center items-center">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg flex justify-center items-center flex-col"
              >
                <div className="flex w-full flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="label-form" htmlFor="grid-password">
                      Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      name="name"
                      required={true}
                      disabled={true}
                      placeholder="E.g. Jane Doe"
                      value={user?.name}
                      maxLength="15"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="label-form" htmlFor="grid-password">
                      Currently Working at and Position
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      required={true}
                      name="work"
                      maxLength={25}
                      placeholder="E.g. SDE at Flipkart"
                      onChange={(e) => setWork(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex w-full flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="label-form" htmlFor="grid-password">
                      Education
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      name="education"
                      required={true}
                      maxLength={30}
                      placeholder="E.g. B.E. in Computer Engineering"
                      onChange={(e) => setEducation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap w-full   mb-6">
                  <div className="w-full px-3">
                    <label className="label-form" htmlFor="grid-password">
                      Your Expertiese which you want to Monetize
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      name="choices"
                      required={true}
                      maxLength={100}
                      placeholder="E.g. Career Guidance, Mentorship, Andorid Development"
                      onChange={(e) => setChoices(e.target.value)}
                    />
                    <p className="text-sm">
                      You can add upto 5 Skills where you want to mentor. *Must
                      be Comma sepreted(,)
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap w-full   mb-6">
                  <div className="w-full px-3">
                    <label className="label-form" htmlFor="grid-password">
                      Your Updated Profile Picture
                    </label>
                    <input
                      type="file"
                      name="image"
                      required={true}
                      // onChange={postDetails}
                      onChange={(e) => setPic(e.target.files[0])}
                      accept="image/png, image/jpg, image/jpeg"
                    />
                    <p className="text-sm py-2">
                      *Must be in JPG or PNG format Otherwise you will not be
                      Listed
                    </p>
                  </div>
                </div>
                <button className="blue-button">List me As Mentor</button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <ErrorMessage children="404 Page Not Found" isError={false} />
      )}
    </div>
  );
};

export default EditMentor;
