import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";
import Constants from "../../constants/Constants";
import Colors from "../../utils/Colors";

const UserAvtar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutfunc = () => {
    navigate("/login");
    dispatch(logout());
  };

  const navigateToManage = () => {
    const userType = localStorage.getItem(Constants.userType);
    navigate("/dashboard/manageprofile");
  };

  const navigateToDashboard = () => {
    const userType = localStorage.getItem(Constants.userType);
    navigate("/dashboard");
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {user.profileImg === "None" ? (
          <div className="bg-dark-blue h-11 w-11 rounded-full flex justify-center items-center">
            <p className="text-white font-primayfont font-bold">
              {user.name.slice(0, 1)}
            </p>
          </div>
        ) : (
          <img
            src={user.profileImg}
            alt="user"
            className="h-11 w-11 rounded-full border-1 border-dark-blue"
            referrerPolicy="no-referrer"
          />
        )}
        {isMenuOpen ? (
          <BsChevronUp
            className="ml-1"
            size={20}
            color={Colors.dark_blue}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        ) : (
          <BsChevronDown
            className="ml-1"
            size={20}
            color={Colors.dark_blue}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </div>

      {isMenuOpen && (
        <div
          className="absolute mt-44 rounded-lg -ml-32 w-48 bg-white cursor-pointer"
          style={{ boxShadow: "0px 0px 8px rgba(0, 16, 60, 0.1)" }}
        >
          <li
            onClick={navigateToDashboard}
            className="list-none px-4 py-1 mt-2 text-dark-blue capitalize font-primayfont hover:bg-primar-second hover:text-white"
          >
            Dashboard
          </li>
          <li
            onClick={navigateToManage}
            className="list-none px-4 py-1 text-dark-blue capitalize font-primayfont hover:bg-primar-second hover:text-white "
          >
            Manage
          </li>
          <li
            onClick={logoutfunc}
            className="list-none px-4 py-1 mb-2 text-dark-blue capitalize font-primayfont hover:bg-primar-second hover:text-white "
          >
            Logout
          </li>
        </div>
      )}
    </>
  );
};

export default UserAvtar;
