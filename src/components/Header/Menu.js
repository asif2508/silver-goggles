import React from "react";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";
import Constants from "../../constants/Constants";
import Colors from "../../utils/Colors";
import CustomButton from "../Component/CustomButton";
import MenuItem from "./MenuItem";

const Menu = ({ user }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const navigateToDashboard = () => {
    const userType = localStorage.getItem(Constants.userType);
    if (Constants.mentor === userType) {
      navigate("/mentor/dashboard");
    } else {
      navigate("/mentee/dashboard")
    }
  };

  const logoutfunc = () => {
    navigate("/login");
    dispatch(logout());
  };

  return (
    <>
      <ul className="list-reset lg:flex flex-1 items-center justify-center text-center my-2 mr-9">
        <MenuItem to="/mentors" text="Our Mentors" />
        <MenuItem to="/become-mentor" text="Become a Mentor" />
        <MenuItem to="/about" text="About Us" />
      </ul>

      {user ? (<div className="hidden flex-col justify-center items-center lg:flex">
        <div className="flex justify-center items-center">
          <div className="bg-dark-blue h-11 w-11 rounded-full flex justify-center items-center">
            {user && <p className="text-white font-primayfont font-bold">{user.name.slice(0, 1)}</p>}
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

      </div>) : (<CustomButton
        text="Get Started"
        onClick={
          () => {
            navigate("/login");
          }
        }
      />
      )
      }
    </>
  );
};

export default Menu;
