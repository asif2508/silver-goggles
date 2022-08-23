import React from "react";
import StarRatings from "react-star-ratings";

const VaibhavReview = ({ data }) => {
  return (
    <div
      className="rounded-lg mb-6 w-full py-4 px-4 flex flex-col"
      style={{ borderWidth: 1, borderColor: "rgba(0, 16, 60, 0.45)" }}
    >
      <div className="flex flex-row ">
        <h2 className="text-base font-primayfont text-dark-blue font-bold">{`${data.user}, ${data.workAt}`}</h2>
        {/* <div className="items-center ml-2"> */}
        <StarRatings
          starRatedColor="#FEB000"
          starSpacing="0"
          rating={data.rating}
          numberOfStars={5}
          name="rating"
          starDimension="18"
          className="ml-2"

        />
        <p className="ml-2 text-base font-primayfont text-dark-blue font-bold text-center ">
          {data.rating}
        </p>
        {/* </div> */}

        <div className="ml-2">
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

export default VaibhavReview;
