import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Colors from "../../../utils/Colors";
import LoginString from "../../../utils/Strings/LoginString";
import { signin } from "../../../actions/auth";
import Header from "../../Header/Header";
import image from "../../../images/Edukith_login_img.svg";
import Google from "../../../images/flat_color_icons_google.svg";
import Constants from "../../../utils/Constants";

const Login = () => {
  const [mentorButtonPressed, setMentorButtonPressed] = React.useState(false);
  const [menteeButtonPressed, setMenteeButtonPressed] = React.useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mentorButtonPressed) {
      navigate("/mentor/dashboard");
    } else {
      navigate("/mentee/dashboard");
    }
    // dispatch(signin(email, password, navigate));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const activeTextColorMentee = menteeButtonPressed
    ? Colors.white
    : Colors.dark_blue;
  const activeTextColorMentor = mentorButtonPressed
    ? Colors.white
    : Colors.dark_blue;

  const activeBackgroundMentee = menteeButtonPressed
    ? "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)"
    : "#fff0";
  const activeBackgroundMentor = mentorButtonPressed
    ? "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)"
    : "#fff0";

  const activeborderMentee = menteeButtonPressed
    ? "1px solid #fff0"
    : `1px solid ${Colors.textInputBorder}`;

  const activeborderMentor = mentorButtonPressed
    ? "1px solid #fff0"
    : `1px solid ${Colors.textInputBorder}`;

  const handleMentorButtonPressed = () => {
    setMentorButtonPressed(true);
    setMenteeButtonPressed(false);
  };

  const handleMenteeButtonPressed = () => {
    setMenteeButtonPressed(true);
    setMentorButtonPressed(false);
  };

  return (
    <div className="min-h-half">
      <div>
        <Header />
      </div>
      <div className="flex flex-col px-4 lg:flex-row md:px-28 sm:px-16 mt-12 mb-12">
        <div className="img sm:ml-9 flex justify-center items-center sm:flex-col mt-7 lg:w-1/2">
          <img
            className="bg-cover bg-center h-1/2 w-1/2 lg:h-96 lg:w-3/4 "
            src={image}
            alt="image"
          />
        </div>
        <div className="form lg:w-1/2">
          <h2 className="font-bold font-primayfont text-lg text-dark-blue">
            {LoginString.login}
          </h2>
          <div className="btn mt-4  ">
            <button
              onClick={handleMenteeButtonPressed}
              className="w-32 h-12 mr-3 rounded-lg font-bold text-base font-primayfont"
              style={{
                background: activeBackgroundMentee,
                border: activeborderMentee,
                color: activeTextColorMentee,
              }}
            >
              {LoginString.mentee_button}
            </button>
            <button
              className="w-32 h-12 mr-3 rounded-lg font-bold text-base font-primayfont"
              onClick={handleMentorButtonPressed}
              style={{
                background: activeBackgroundMentor,
                border: activeborderMentor,
                color: activeTextColorMentor,
              }}
            >
              {LoginString.mentor_button}
            </button>
          </div>
          <div>
            <label className="inline-block pt-6 font-primayfont font-normal text-sm">
              {LoginString.email_label}
            </label>
            <br />
            <input
              className="w-full rounded-lg h-10 px-4 py-3 mt-2"
              style={{ borderWidth: 1, borderColor: Colors.textInputBorder }}
              type="email"
              placeholder={LoginString.email_placeholder}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="inline-block pt-6 font-primayfont font-normal text-sm">
              {LoginString.password_label}
            </label>{" "}
            <br />
            <input
              className="w-full rounded-lg h-10 px-4 py-3 mt-2"
              style={{ borderWidth: 1, borderColor: Colors.textInputBorder }}
              type="password"
              placeholder={LoginString.password_placeholder}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex flex-col justify-between">
            <div
              onClick={handleSubmit}
              className="rounded-lg h-10 text-white font-bold flex justify-center items-center w-full mt-6 cursor-pointer"
              style={{
                background: "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
              }}
            >
              <p>{LoginString.login}</p>
            </div>
            <div
              className="rounded-lg h-10 text-white font-bold flex justify-center items-center mt-6 w-full cursor-pointer"
              style={{ background: Colors.buttonBlue }}
            >
              <img
                className="mr-4 bg-white rounded-full px-1 py-1"
                src={Google}
              />
              <p className="sm:text-base">{LoginString.login_google}</p>
            </div>
            <p className="font-bold text-center pt-6">
              {LoginString.forgot_text}
              <span className="text-primary cursor-pointer ml-1">
                <Link to={"/"}>{LoginString.click_here}</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
