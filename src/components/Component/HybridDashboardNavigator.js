import React from "react";
import { AiFillCreditCard, AiOutlineCalendar } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdOutlineManageAccounts } from "react-icons/md";
import Icon from "../../images/Ellipse.svg";
import { Link } from "react-router-dom";
import Colors from "../../utils/Colors";
import { GiTeacher } from "react-icons/gi";
import HybridDashboardRoutesStrings from "../../utils/Strings/HybridDashboardRoutesStrings";

const SampleRoute = ({ route }) => {
  const { icon, active, text, link } = route;
  return (
    <Link to={link} className="mb-4">
      <div className="inline-flex items-center text-center h-full">
        {icon}
        <p
          className={`ml-2 lg:ml-4 font-primayfont text-sm font-semibold align-middle mt-1 lg:text-lg ${
            active ? "text-primary" : "text-dark-blue"
          } `}
        >
          {text}
        </p>
      </div>
    </Link>
  );
};

const HybridDashboardNavigator = ({
  activeHome = false,
  activeSession = false,
  activeManagePackage = false,
  activeCalender = false,
  activeManageProfile = false,
  activeBecomeMentor = false,
}) => {
  const routes = [
    {
      icon: (
        <BiHomeAlt
          size={20}
          color={activeHome ? Colors["primay-light"] : Colors.dark_blue}
        />
      ),
      active: activeHome,
      text: "Home",
      link: HybridDashboardRoutesStrings.HOME,
    },
    {
      icon: (
        <AiFillCreditCard
          size={20}
          color={activeSession ? Colors["primay-light"] : Colors.dark_blue}
        />
      ),
      active: activeSession,
      text: "My Sessions",
      link: HybridDashboardRoutesStrings.SESSIONS,
    },
    {
      icon: (
        <MdOutlineManageAccounts
          size={20}
          color={
            activeManageProfile ? Colors["primay-light"] : Colors.dark_blue
          }
        />
      ),
      active: activeManageProfile,
      text: "Manage Profile",
      link: HybridDashboardRoutesStrings.MANAGE_PROFILE,
    },
    {
      icon: (
        <GiTeacher
          size={20}
          color={activeBecomeMentor ? Colors["primay-light"] : Colors.dark_blue}
        />
      ),
      active: activeBecomeMentor,
      text: "Become Mentor",
      link: HybridDashboardRoutesStrings.BECOME_MENTOR,
    },
    {
      icon: (
        <AiOutlineCalendar
          size={20}
          color={activeCalender ? Colors["primay-light"] : Colors.dark_blue}
        />
      ),
      active: activeCalender,
      text: "My Availability",
      link: HybridDashboardRoutesStrings.ADD_AVAILABILITY,
    },
    {
      icon: (
        <FiUsers
          size={20}
          color={
            activeManagePackage ? Colors["primay-light"] : Colors.dark_blue
          }
        />
      ),
      active: activeManagePackage,
      text: "Manage Services",
      link: HybridDashboardRoutesStrings.ADD_PACKAGES,
    },
  ];

  return (
    <>
      <div className="mt-6 px-4 flex flex-col lg:items-center lg:h-screen">
        <div className="flex flex-col lg:w-max w-full lg:flex-row items-center lg:justify-center ">
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={Icon} alt={"img"} />
          <div className="w-full lg:ml-4">
            <p className="w-full lg:w-max text-center text-base text-dark-blue font-bold font-primayfont mt-2 lg:text-xl">
              Kalpesh Lohar
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-row lg:px-28 lg:mt-16 lg:flex-col overflow-x-scroll sm:justify-center whitespace-nowrap font-primayfont scrollbar-hide">
          {routes.map((route, index) => {
            return <SampleRoute route={route} />;
          })}
        </div>
      </div>
      <div
        className="h-[150vh] hidden lg:block"
        style={{
          borderColor: "rgba(0, 16, 60, 0.15)",
          backgroundColor: "rgba(0, 16, 60, 0.15)",
          borderWidth: 0.5,
          borderStyle: "solid",
        }}
      />
    </>
  );
};

export default HybridDashboardNavigator;
