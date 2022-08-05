import React from "react";
import Review from "../Component/DedicateMentor/Review";

import HeaderSeprater from "../Component/HeaderSeprater";
import Header from "../Header/Header";
import DashboardMentorNavigator from "./DashboardMentorNavigator";
import VaibhavReview from "./VaibhavReview";
const MentorDashboardReviews = () => {
  const reviews = [
    {
      user: "Yu zen",
      workAt: "Microsoft",
      rating: 4.5,
      date: "10 Jan, 2020",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit orci tino ci dunt at tincidunt pretium pretium. Turpis adipiscing pellentesque vitae sem donec proin et pellentesque mi. Lacus, quam vitae tempor ullamcorper sed ac phasellus.",
    },
    {
      user: "Yu zen",
      workAt: "Microsoft",
      rating: 5,
      date: "15 Jan, 2020",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit orci tino ci dunt at tincidunt pretium pretium. Turpis adipiscing pellentesque vitae sem donec proin et pellentesque mi. Lacus, quam vitae tempor ullamcorper sed ac phasellus.",
    },
  ];
  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />

      <div className="flex flex-col lg:flex-row">
        <DashboardMentorNavigator activeReview={true} />
        <div className="px-4 sm:px-16 md:px-28 lg:px-11 w-full lg:h-full lg:w-full">
        <div className="flex flex-col mt-5">
                        {reviews.map((data, index) => (
                          <VaibhavReview key={index} data={data} />
                        ))}
                      </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboardReviews;
