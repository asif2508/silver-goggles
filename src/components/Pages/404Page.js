import React from "react";
import Asset404 from "../../images/asset_404.svg";
import Header from "../Header/Header";

const Page404 = () => {
  return (
    <div
      className="min-h-half"
      style={{
        background:
          "linear-gradient(180deg, rgba(43, 195, 252, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <div>
        <Header />
      </div>
      <div className="flex justify-center items-center">
        <img src={Asset404} alt="404" className="w-1/4 my-5" />
      </div>
    </div>
  );
};

export default Page404;
