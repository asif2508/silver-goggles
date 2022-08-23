import React from "react";
import HeaderSeprater from "../Component/HeaderSeprater";
import Header from "../Header/Header";
import DashboardMentorNavigator from "./DashboardMentorNavigator";
import StarRatings from "react-star-ratings";
import Colors from "../../utils/Colors";
import DonutChartReview from "../Component/DonutChartReview";

const VaibhavReview = ({ data }) => {
  return (
    <div
      className="rounded-lg mb-6 w-full py-4 px-4 flex flex-col"
      style={{ borderWidth: 1, borderColor: "rgba(0, 16, 60, 0.45)" }}
    >
      <div className="flex flex-row justify-between">
        <div className="flex items-center justify-center">
          <h2 className="text-base font-primayfont text-dark-blue font-bold">{`${data.user}, ${data.workAt}`}</h2>
          {/* <div className="items-center ml-2"> */}
          <StarRatings
            starRatedColor={Colors.yellow}
            starSpacing="0"
            rating={data.rating}
            numberOfStars={5}
            name="rating"
            starDimension="18"
            className="ml-2"
          />
          <p className="ml-1 text-base font-primayfont text-dark-blue font-bold text-center ">
            {data.rating}
          </p>
        </div>
        <div className="">
          <p className="text-base font-primayfont text-dark-blue font-light">
            {data.date}
          </p>
        </div>
      </div>
      <p className="mt-2 text-base font-primayfont text-dark-blue font-normal">
        {data.review}
      </p>

    </div>
  );
};

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
          <p className="font-primayfont text-2xl font-bold mt-12">Reviews</p>
          <div className="flex-col md:flex-row md:mx-0">
            <div className="w-min lg:w-full mx-auto">
              <DonutChartReview review={4.6} />
            </div>
          </div>
          <div className="flex flex-col -mt-12 lg:max-w-sessionWidth mb-28">
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
