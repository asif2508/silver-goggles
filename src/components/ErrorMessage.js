import React from "react";

const ErrorMessage = ({ children ,isError }) => {
  return (
    <div className={`bg-ivery py-2 px-4 my-2 ${isError ? "text-red" : "text-dark-blue" }`}>
      <p className="font-bold">{children}</p>
    </div>
  );
};

export default ErrorMessage;
