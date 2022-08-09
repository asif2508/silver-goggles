import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup, signupwithgoogle } from "../../../actions/auth";
import { useNavigate } from "react-router-dom";
import Colors from "../../../utils/Colors";
import LoginString from "../../../utils/Strings/LoginString";
import Header from "../../Header/Header";
import image from "../../../images/Edukith_login_img.svg";
import Google from "../../../images/flat_color_icons_google.svg";
import Constants from "../../../constants/Constants";
import { GoogleLogin } from 'react-google-login';
import { gapi } from "gapi-script";
import { signUpWithGoogle } from "../../../api";

const Register = () => {
  const clientId = "258909471666-e26acjhjps0cqfb1aeitq4fqmag5uohq.apps.googleusercontent.com";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem(Constants.userInfo));

  const emailRegex = Constants.emailRegex;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length > 0) {
      if (emailRegex.test(email)) {
        if (password !== confirmpassword) {
          alert("Passwords does not match");
        } else if (password.length < 8) {
          alert("Password must be at least 8 characters");
        } else {
          try {
            dispatch(signup({ name, email, password }, navigate));
          } catch (error) {
            alert(error.response.data.message);
          }
        }
      } else {
        alert("Enter valid email!")
      }
    } else {
      alert("Enter valid name!")
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate])


  const responseGoogle = (response) => {
    const user = response.profileObj;
    dispatch(signupwithgoogle({ name: user.name, email: user.email, imageUrl: user.imageUrl }, navigate));
  }

  const responseGoogleFailure = (response) => {
    alert("There are some error occured!!")
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load("client:auth2", start)
  })

  return (
    <div className="min-h-half">
      <div>
        <Header />
      </div>
      <div className="flex flex-col px-4 lg:flex-row md:px-28 sm:px-16 mt-12 mb-12">
        <div className="img sm:ml-9 flex justify-center items-center sm:flex-col mt-7 lg:w-1/2">
          <img
            className="bg-cover bg-center w-2/3 lg:h-96 lg:w-3/4 "
            src={image}
            alt="image"
          />
        </div>
        <div className="form mt-3 lg:w-1/2">
          <h2 className="font-bold font-primayfont text-lg text-dark-blue">
            {LoginString.signup}
          </h2>

          <div>
            <label className="inline-block pt-6 font-primayfont font-normal text-sm">
              {LoginString.name_label}
            </label>
            <br />
            <input
              className="w-full rounded-lg h-10 px-4 py-3 mt-2 outline-white"
              style={{ borderWidth: 1, borderColor: Colors.textInputBorder }}
              type="text"
              placeholder={LoginString.name_placeholder}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="inline-block pt-6 font-primayfont font-normal text-sm">
              {LoginString.email_label}
            </label>
            <br />
            <input
              className="w-full rounded-lg h-10 px-4 py-3 mt-2 outline-white"
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
              className="w-full rounded-lg h-10 px-4 py-3 mt-2 outline-white"
              style={{ borderWidth: 1, borderColor: Colors.textInputBorder }}
              type="password"
              placeholder={LoginString.password_placeholder}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label className="inline-block pt-6 font-primayfont font-normal text-sm">
              {LoginString.confirm_password_label}
            </label>{" "}
            <br />
            <input
              className="w-full rounded-lg h-10 px-4 py-3 mt-2 outline-white"
              style={{ borderWidth: 1, borderColor: Colors.textInputBorder }}
              type="password"
              placeholder={LoginString.password_placeholder}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="flex flex-col justify-between">
            <div
              onClick={handleSubmit}
              className="rounded-lg h-10 text-white font-bold flex justify-center items-center w-full mt-6 cursor-pointer"
              style={{
                background: Constants.gradient,
              }}
            >
              <p className="uppercase">{LoginString.signup}</p>
            </div>

            <GoogleLogin
              render={renderProps => (
                <div
                  onClick={renderProps.onClick}
                  className="rounded-lg h-10 text-white font-bold flex justify-center items-center mt-6 w-full cursor-pointer"
                  style={{ background: Colors.buttonBlue }}
                >
                  <img
                    className="mr-4 bg-white rounded-full px-1 py-1"
                    src={Google}
                  />
                  <p className="sm:text-base">{LoginString.signup_google}</p>
                </div>)}
              clientId={clientId}
              onSuccess={responseGoogle}
              buttonText="Login with Google"
              onFailure={responseGoogleFailure}
              cookiePolicy="single_host_origin"
            />

            <p className="font-bold text-center pt-6">
              {LoginString.already_registered}
              <span className="text-primary cursor-pointer ml-1">
                <Link to={"/login"} className="normal-case">{LoginString.login}</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
