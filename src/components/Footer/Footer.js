import React from "react";
import Colors from "../../utils/Colors";
import Icon from "../../images/Vector.svg";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer class="text-white bg-dark-blue flex flex-col lg:flex-row pt-11 pb-11 lg:py-20 justify-between lg:px-28 lg:w-full">
        <div class="flex flex-col px-4 lg:w-1/4 lg:px-0">
          <div className="flex lg:w-full">
            <img src={Icon} alt="EduKith" className="w-8 h-8" />
            <p className="font-primayfont text-3xl ml-2 w-72 lg:w-full">
              EduKith
            </p>
          </div>
          <p className="font-primayfont mt-7">
            EduKith Taking students from Confusion to College through profiling,
            mentoring, and counseling
          </p>
        </div>
        <div class="flex-col hidden lg:flex">
          <h6 class="font-semibold font-primayfont text-xl flex mt-4 lg:mt-0">
            Menu
          </h6>
          <p class="mt-4 font-primayfont text-base">
            <Link to="#!">Become a mentor</Link>
          </p>
          <p class="mt-4 font-primayfont text-base">
            <Link to="#!">Our Mentors</Link>
          </p>
          <p class="mt-4 font-primayfont text-base">
            <Link to="#!">About Us</Link>
          </p>
          <p class="mt-4 font-primayfont text-base">
            <Link to="#!">Privacy policy</Link>
          </p>
        </div>
        <div class="flex-col md:ml-10 hidden lg:flex">
          <h6 class="font-semibold font-primayfont text-xl flex mt-4 lg:mt-0">
            Links
          </h6>
          <p class="mt-4 font-primayfont text-base">
            <Link to="#!">FAQs</Link>
          </p>
          <p class="mt-4 font-primayfont text-base">
            <Link to="#!">Contact Us</Link>
          </p>
          <p class="mt-4 font-primayfont text-base">
            <Link to="#!">Career</Link>
          </p>
          <p class="mt-4 font-primayfont text-base">
            <Link to="#!">Code of conduct</Link>
          </p>
        </div>
        <div class="flex-col mt-10 md:mt-0 md:ml-10 hidden lg:flex lg:mt-0">
          <h6 class="font-semibold font-primayfont text-xl flex">
            Contact Info
          </h6>
          <div class="flex mt-6 flex-col">
            <div className="flex">
              <AiOutlineMail size={24} color={Colors.white} />
              <Link to="#!" class="ml-2 font-primayfont text-base">
                info.edukith@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="pl-7 pr-16 flex flex-col md:flex-row mt-10 lg:mt-0 lg:px-0 lg:py-0 lg:w-3/4 justify-center lg:hidden">
          <div className="flex justify-between md:w-full lg:justify-center lg:hidden">
            <div class="flex flex-col">
              <h6 class="font-semibold font-primayfont text-xl flex mt-4 lg:mt-0">
                Menu
              </h6>
              <p class="mt-4 font-primayfont text-base">
                <Link to="#!">Become a mentor</Link>
              </p>
              <p class="mt-4 font-primayfont text-base">
                <Link to="#!">Our Mentors</Link>
              </p>
              <p class="mt-4 font-primayfont text-base">
                <Link to="#!">About Us</Link>
              </p>
              <p class="mt-4 font-primayfont text-base">
                <Link to="#!">Privacy policy</Link>
              </p>
            </div>
            <div class="flex flex-col md:ml-10">
              <h6 class="font-semibold font-primayfont text-xl flex mt-4 lg:mt-0">
                Links
              </h6>
              <p class="mt-4 font-primayfont text-base">
                <Link to="#!">FAQs</Link>
              </p>
              <p class="mt-4 font-primayfont text-base">
                <Link to="#!">Contact Us</Link>
              </p>
              <p class="mt-4 font-primayfont text-base">
                <Link to="#!">Career</Link>
              </p>
              <p class="mt-4 font-primayfont text-base">
                <Link to="#!">Code of conduct</Link>
              </p>
            </div>
            <div class="flex-col mt-10 md:mt-0 md:ml-10 hidden md:flex lg:mt-0">
              <h6 class="font-semibold font-primayfont text-xl flex">
                Contact Info
              </h6>
              <div class="flex mt-6 flex-col">
                <div className="flex">
                  <AiOutlineMail size={24} color={Colors.white} />
                  <Link to="#!" class="ml-2 font-primayfont text-base">
                    info.edukith@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-10 md:hidden">
            <h6 class="font-semibold font-primayfont text-xl flex">
              Contact Info
            </h6>
            <div class="flex mt-6 flex-col">
              <div className="flex">
                <AiOutlineMail size={24} color={Colors.white} />
                <Link to="#!" class="ml-2 font-primayfont text-base">
                  info.edukith@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
