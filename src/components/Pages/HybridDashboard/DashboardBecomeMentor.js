import React from "react";
import HeaderSeprater from "../../Component/HeaderSeprater";
import HybridDashboardNavigator from "../../Component/HybridDashboardNavigator";
import Header from "../../Header/Header";

const DashboardBecomeMentor = ({ navigate }) => {
  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <HybridDashboardNavigator activeBecomeMentor={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full mb-14"></div>
      </div>
    </div>
  );
};

export default DashboardBecomeMentor;
