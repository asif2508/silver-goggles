import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Asset404 from "../../images/asset_404.svg";
import Header from "../Header/Header";

const Page404 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

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
      <div className="flex justify-center items-center py-20">
        <img
          src={Asset404}
          alt="404"
          className="w-3/4 lg:w-1/4 sm:w-3/5 md:w-2/5"
        />
      </div>
    </div>
  );
};

export default Page404;
