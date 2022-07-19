import React from "react";
import { useNavigate } from "react-router-dom";
import Colors from "../../utils/Colors";
import CustomButton from "../Component/CustomButton";
import MenuItem from "./MenuItem";

const Menu = ({ user }) => {
  const navigate = useNavigate();
  return (
    <>
      <ul className="list-reset lg:flex flex-1 items-center justify-center text-center my-2 mr-9">
        <MenuItem to="/mentors" text="Our Mentors" />
        <MenuItem to="/become-mentor" text="Become a Mentor" />
        <MenuItem to="/about" text="About Us" />
      </ul>
      <CustomButton
        text="Get Started"
        onClick={() => {
          navigate("/login");
        }}
      />
    </>
  );
};

export default Menu;
