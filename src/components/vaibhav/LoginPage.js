import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/Edukith_login_img.svg";
import Google from "../../images/flat_color_icons_google.svg";
import Colors from "../../utils/Colors";
import LoginString from "../../utils/Strings/LoginString";
import Header from "../Header/Header";

const LoginPage = () => {
  return (
    <div className="min-h-half">
      <div>
        <Header />
      </div>
      <div className="flex flex-col px-4 lg:flex-row md:px-28 sm:px-16">
        <div className="img sm:ml-9 flex justify-center items-center sm:flex-col mt-7 lg:w-1/2">
          <img
            className="bg-cover bg-center h-1/2 w-1/2"
            src={image}
            alt="image"
          />
        </div>
        <div className="form lg:w-1/2">
          <h2 className="font-bold font-primayfont text-lg text-dark-blue">
            Login
          </h2>
          <div className="btn mt-4">
            <button
              className="w-32 h-12 mr-3 rounded-lg text-white font-bold text-base font-primayfont "
              style={{
                background: "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
              }}
            >
              MENTEE
            </button>
            <button
              className="w-32 h-12 mr-3  rounded-lg"
              style={{ borderWidth: 1 }}
            >
              MENTOR
            </button>
          </div>
          <div>
            <label className="inline-block pt-6 font-primayfont font-normal text-sm">
              Email
            </label>{" "}
            <br />
            <input
              className="w-full rounded-lg h-10 px-4 py-3 mt-2"
              style={{ borderWidth: 1, borderColor: Colors.textInputBorder }}
              type="email"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label className="inline-block pt-6 font-primayfont font-normal text-sm">
              Password
            </label>{" "}
            <br />
            <input
              className="w-full rounded-lg h-10 px-4 py-3 mt-2"
              style={{ borderWidth: 1, borderColor: Colors.textInputBorder }}
              type="password"
              placeholder=" Your Password here"
            ></input>
          </div>
          <div className="flex flex-col justify-between">
            <div
              className="rounded-lg h-10 text-white font-bold flex justify-center items-center w-full mt-6"
              style={{
                background: "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
              }}
            >
              <p>LOGIN</p>
            </div>
            <div
              className="rounded-lg h-10 text-white font-bold flex justify-center items-center mt-6 w-full "
              style={{ background: Colors.buttonBlue }}
            >
              <img className="mr-4" src={Google} />
              <p>{LoginString.login_google}</p>
            </div>
            <p className="font-bold text-center pt-6">
              Forgot Your Username/Password?{" "}
              <span className="text-primary">
                <Link to={'/'}>Click Here</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
