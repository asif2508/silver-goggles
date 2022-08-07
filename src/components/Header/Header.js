import React, { useState, useEffect } from "react";
import logo from "../../images/NewLogo.svg";
import navIcon from "../../images/nav_icon.svg";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import Menu from "./Menu";
import { logout } from "../../actions/auth";
import { ImCross } from "react-icons/im";
import Constants from "../../constants/Constants";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Colors from "../../utils/Colors";

const Header = () => {
  const [isToggle, setISToggle] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(Constants.userInfo))
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logoutfunc = () => {
    navigate("/login");
    setUser(null);
    dispatch(logout());
  };

  const navigateToDashboard = () => {
    const userType = localStorage.getItem(Constants.userType);
    if (Constants.mentor === userType) {
      navigate("/mentor/dashboard");
    } else {
      navigate("/mentee/dashboard")
    }
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
          {user && <div className="flex flex-col justify-center items-center lg:hidden mr-2">
            <div className="flex justify-center items-center">
              <div className="bg-dark-blue h-11 w-11 rounded-full flex justify-center items-center">
                <p className="text-white font-primayfont font-bold">{user.name.slice(0, 1)}</p>
              </div>
              {isMenuOpen ? <BsChevronUp className="ml-1" size={20} color={Colors.dark_blue} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                : <BsChevronDown className="ml-1" size={20} color={Colors.dark_blue} onClick={() => setIsMenuOpen(!isMenuOpen)} />
              }
            </div>

            {isMenuOpen && <div className="absolute mt-44 rounded-lg -ml-32 w-48 bg-white cursor-pointer" style={{ boxShadow: '0px 0px 8px rgba(0, 16, 60, 0.1)' }}>
              <li onClick={navigateToDashboard} className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-primar-second hover:text-white">Dashboard</li>
              <li className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-primar-second hover:text-white ">Manage</li>
              <li onClick={logoutfunc} className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-primar-second hover:text-white ">Logout</li>
            </div>}
          </div>}

          <button id="nav-toggle" className="px-2" onClick={handleToggle}>
            {isToggle ? (
              <ImCross className="h-6" />
            ) : (
              <img src={navIcon} className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex">
          <Menu user={user} logoutFunc={logoutfunc} />
        </div>
      </div>

      <div className={isToggle ? "block" : "hidden"}>
        <div className="flex flex-col lg:hidden justify-center items-center py-3">
          <Menu user={user} logoutFunc={logoutfunc} />
        </div>
      </div>
    </>
  );
};

export default Header;
