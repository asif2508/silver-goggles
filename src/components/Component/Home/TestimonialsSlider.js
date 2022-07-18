import React from "react";
import Colors from "../../../utils/Colors";
import HomeStrings from "../../../utils/Strings/HomeStrings";
import "react-awesome-slider/dist/styles.css";
import Carousel from "react-elastic-carousel";
import image from "../../../images/kalpesh.jpg";
import DoubleQuote from "../../../images/double_quote.svg";


const TestimonialsSlider = () => {
  const testimonials = [
    {
      img: image,
      name: HomeStrings.testimonial_1,
      designation: HomeStrings.testimonial_1_post,
      review: HomeStrings.testimonial_1_text,
    },
    {
      img: image,
      name: HomeStrings.testimonial_1,
      designation: HomeStrings.testimonial_1_post,
      review: HomeStrings.testimonial_1_text,
    },
    {
      img: image,
      name: HomeStrings.testimonial_1,
      designation: HomeStrings.testimonial_1_post,
      review: HomeStrings.testimonial_1_text,
    },
  ];

  return (
    <Carousel
      itemsToShow={1}
      enableAutoPlay
      enableSwipe
      easing="cubic-bezier(1,.15,.55,1.54)"
      tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
      transitionMs={700}
      className="w-full pb-11"
      showArrows={false}
      renderPagination={({ pages, activePage, onClick }) => {
        return (
          <div className="flex max-w-md">
            {pages.map((page) => {
              const isActivePage = activePage === page;
              return (
                <div
                  key={page}
                  onClick={() => onClick(page)}
                  className={`rounded-full h-4 w-4 mx-1 mt-8 ${
                    isActivePage ? "bg-primary" : "bg-grey"
                  }`}
                />
              );
            })}
          </div>
        );
      }}
    >
      {testimonials.map((testimonial, index) => {
        return (
          <>
            <div
              key={index}
              className="rounded-lg px-6 py-6 mx-1 justify-center flex flex-col bg-white max-w-md"
              style={{
                borderWidth: 1.11,
                borderBottomColor: Colors.dark_blue,
                borderBottomWidth: 3.227,
                borderRightWidth: 3.227,
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={testimonial.img}
                    alt="user"
                    className="h-16 w-16 rounded-full"
                  />
                  <div className="flex flex-col ml-3">
                    <h3 className="font-primayfont text-dark-blue text-base font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="mt-1 font-primayfont font-medium text-sm text-dark-blue">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
                <img src={DoubleQuote} alt="Quote" className="w-12 h-12" />
              </div>
              <p className="mt-3 font-primayfont text-dark-blue text-sm">
                {testimonial.review}
              </p>
            </div>
          </>
        );
      })}
    </Carousel>
  );
};

export default TestimonialsSlider;
