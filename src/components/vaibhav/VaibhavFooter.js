import React from "react";
import Colors from "../../utils/Colors";
import Icon from "../../images/Vector.svg";
import LoginString from "../../utils/Strings/LoginString";
import { Link } from "react-router-dom";

const VaibhavFooter = () => {
  return (
    <div>
      <footer
        class="text-center lg:text-left text-white "
        style={{ background: Colors.dark_blue }}
      >
        <div class="mx-6 py-10 text-center md:text-left">
          <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div class="">
              <h6
                class="
            uppercase
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
            font-bold
          "
              >
                <img src={Icon} />
                {LoginString.icon}
              </h6>
              <p>{LoginString.icon_info}</p>
            </div>
            <div class="">
              <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                {LoginString.menu}
              </h6>
              <p class="mb-4">
                <Link to="#!" class="text-gray-600">
                  {LoginString.sub_menu}
                </Link>
              </p>
              <p class="mb-4">
                <Link to="#!" class="text-gray-600">
                  {LoginString.sub_menu1}
                </Link>
              </p>
              <p class="mb-4">
                <Link to="#!" class="text-gray-600">
                  {LoginString.sub_menu2}
                </Link>
              </p>
              <p>
                <Link to="#!" class="text-gray-600">
                  {LoginString.sub_menu3}
                </Link>
              </p>
            </div>
            <div class="flex flex-col">
              <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                {LoginString.link}
              </h6>
              <p class="mb-4">
                <Link to="/" class="">
                  {LoginString.link1}
                </Link>
              </p>
              <p class="mb-4">
                <Link to="#!" class="">
                  {LoginString.link2}
                </Link>
              </p>
              <p class="mb-4">
                <Link to="#!" class="">
                  {LoginString.link3}
                </Link>
              </p>
              <p>
                <Link to="#!" class="">
                  {LoginString.link4}
                </Link>
              </p>
            </div>
            <div class="">
              <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                {LoginString.contact}
              </h6>

              <p class="mb-4">
                <Link to="#!" class="">
                  <span>{LoginString.contact1}</span>
                </Link>
              </p>
              <p class="mb-4">
                <Link to="#!" class="">
                  {LoginString.contact2}
                </Link>
              </p>
              <p class="mb-4">
                <Link to="#!" class="">
                  {LoginString.contact3}
                </Link>
              </p>
            </div>
            <div class="">
              <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                {LoginString.social}
              </h6>
              <p class="flex items-center justify-center md:justify-start mb-4"></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VaibhavFooter;
