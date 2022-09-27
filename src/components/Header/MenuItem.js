import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ text, to }) => {
  return (
    <li className="mr-3">
      <Link
        className="inline-block font-primayfont text-base font-normal text-center w-full text-dark-blue py-2 mx-6"
        to={to}
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
