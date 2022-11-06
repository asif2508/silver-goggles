import React from "react";
import { ImOffice } from "react-icons/im";
import { IoIosSchool } from "react-icons/io";
import Colors from "../../../utils/Colors";

const CustomExperienceBox = ({ data, type }) => {
  const RenderEducationBox = () => {
    return (
      <div
        className="rounded-lg mb-4 w-full px-3 py-3 flex items-center"
        style={{ borderWidth: 1, borderColor: "rgba(0, 16, 60, 0.45)" }}
      >
        <div
          className="rounded-full h-12 w-12 flex justify-center items-center border-2 mr-3"
          style={{ borderColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <IoIosSchool size={42} color={Colors.dark_blue} className="py-2 px-2" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <h3 className="text-base font-primayfont text-dark-blue font-medium">
            Studied {data.specialization} from {data.college}
          </h3>
          <div className="h-8 py-2 px-4 bg-chipGrey rounded-3xl mt-2">
            <p className="h-8 text-sm text-dark-blue font-primayfont font-medium">
              {data.startYear} - {data.endYear}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const RenderExperienceBox = () => {
    return (
      <div
        className="rounded-lg mb-4 w-full px-3 py-3 flex items-center"
        style={{ borderWidth: 1, borderColor: "rgba(0, 16, 60, 0.45)" }}
      >
        <div
          className="rounded-full h-12 w-12 flex justify-center items-center border-2 mr-3"
          style={{ borderColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <ImOffice size={42} color={Colors.dark_blue} className="py-2 px-2" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <h3 className="text-base font-primayfont text-dark-blue font-medium">
            Working at {data.company} as {data.designation}
          </h3>
          <div className="h-8 py-2 px-4 bg-chipGrey rounded-3xl mt-2">
            <p className="h-8 text-sm text-dark-blue font-primayfont font-medium">
              {data.startDate} - {data.endDate}
            </p>
          </div>
        </div>
      </div>
    );
  };

  switch (type) {
    case "education":
      return <RenderEducationBox />;
    case "experience":
      return <RenderExperienceBox />;
    default:
      return null;
  }
};

export default CustomExperienceBox;
