import React from "react";

const CustomExperienceBox = ({ data }) => {
  return (
    <div
      className="rounded-lg mb-4 w-full px-3 py-3 flex items-center"
      style={{ borderWidth: 1, borderColor: "rgba(0, 16, 60, 0.45)" }}
    >
      <div
        className="rounded-full h-12 w-12 flex justify-center items-center border-2 mr-3"
        style={{ borderColor: "rgba(0, 0, 0, 0.05)" }}
      >
        {data.img()}
      </div>
      <div className="flex flex-col justify-between h-full">
        <h3 className="text-base font-primayfont text-dark-blue font-medium">
          {data.title}
        </h3>
        <div className="h-8 py-2 px-4 bg-chipGrey rounded-3xl mt-2">
          <p className="h-8 text-sm text-dark-blue font-primayfont font-medium">
            {`${data.activefrom} - ${data.activeTo}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomExperienceBox;
