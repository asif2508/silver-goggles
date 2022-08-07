import React, { useState, useEffect } from "react";
import logo from "../../images/NewLogo.svg";
import navIcon from "../../images/nav_icon.svg";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import Menu from "./Menu";
import { ImCross } from "react-icons/im";
import Constants from "../../constants/Constants";
import UserAvtar from "./UserAvtar";
import { logout } from "../../actions/auth";

const Header = () => {
  const [isToggle, setISToggle] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(Constants.userInfo))
  );

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutfunc = () => {
    navigate("/login");
    dispatch(logout());
  };

  useEffect(() => {
    setISToggle(false);
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logoutfunc();
    }
    setUser(JSON.parse(localStorage.getItem(Constants.userInfo)));
  }, [location]);

  const handleToggle = () => {
    setISToggle(!isToggle);
  };

  return (
    <>
      <div className="flex justify-between items-center py-3 px-4 lg:px-12 align-middle">
        <div
          className="leftnav"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="EduKith" className="h-7" />
        </div>

        <div className="rightnav flex flex-row justify-center sm:px-2 lg:hidden">
          {user && (
            <div className="flex flex-col justify-center items-center lg:hidden mr-2">
              <UserAvtar user={user} />
            </div>
          )}

          <button id="nav-toggle" className="px-2" onClick={handleToggle}>
            {isToggle ? (
              <ImCross className="h-6" />
            ) : (
              <img src={navIcon} className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex">
          <Menu user={user} />
        </div>
      </div>

      <div className={isToggle ? "block" : "hidden"}>
        <div className="flex flex-col lg:hidden justify-center items-center py-3">
          <Menu user={user} />
        </div>
      </div>
    </>
  );
};

export default Header;
