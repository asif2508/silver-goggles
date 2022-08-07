import React, { useEffect } from "react";
import Colors from "../../utils/Colors";
import HomeStrings from "../../utils/Strings/HomeStrings";
import BecomeMentorDesktopSlider from "../Component/BecomeMentor/BecomeMentorDesktopSlider";
import BecomeMentorSlider from "../Component/BecomeMentor/BecomeMentorSlider";
import CustomButton from "../Component/CustomButton";
import Faq from "../Component/Home/Faq";
import Header from "../Header/Header";
import AssetHome3 from "../../images/asset_home_3.svg";
import Features from "../Component/BecomeMentor/Features";
import { useNavigate } from "react-router-dom";
import Constants from "../../constants/Constants";

const BecomeMentor = () => {
  const navigate = useNavigate();
  const navigateToBecomeMentor = () => {
    navigate("/become-mentor/edit-profile");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <div className="min-h-half">
      <div style={{ background: Constants.homeBackgroundGradient }}>
        <div>
          <Header />
        </div>
        {/* section 1 */}
        <section className="flex flex-col justify-center items-center">
          <div className="px-4 sm:px-16 lg:px-48 flex flex-col justify-center items-center">
            <div className="flex pt-10 flex-wrap">
              <h1 className="font-bold flex lg:hidden font-primayfont text-2xl text-dark-blue align-middle text-center">
                Help other learn & progress because Being a mentor is new
                superHero
              </h1>
              <h1
                className="font-bold hidden lg:flex font-primayfont text-dark-blue align-middle text-center"
                style={{ fontSize: 48 }}
              >
                Help other learn & progress because Being a mentor is new
                superHero
              </h1>
            </div>
            <h2 className="font-normal text-base text-dark-blue lg:text-lg text-center align-middle mt-6">
              Build your community of mentees by helping them with the knowledge
              & skills you have. Grow together with us.
            </h2>
          </div>
          <CustomButton
            text={"Become a mentor"}
            onClick={navigateToBecomeMentor}
            style="mt-6"
          />
        </section>
      </div>
      <section className="mt-12 -mb-40 lg:-mb-52 px-6 sm:px-20 lg:px-44 w-full flex justify-center">
        <iframe
          src="https://www.youtube.com/embed/zFcEIOYhrV8"
          className="h-56 md:h-80 w-full lg:hidden"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen={false}
          title="video"
        />
        <iframe
          src="https://www.youtube.com/embed/zFcEIOYhrV8"
          style={{ width: 1051, height: 608 }}
          className="hidden lg:block"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen={false}
          title="video"
        />
      </section>
      <section className="px-4 bg-dark-blue md:px-28">
        <div className="pt-52 lg:pt-72">
          <h3 className="font-bold font-primayfont text-xl text-white lg:text-4xl">
            How it works?
          </h3>
          <p className="font-primayfont mt-4 lg:mt-8 text-base text-white pr-2 my-2 mb-11 lg:text-base">
            Share your experience with your mentee budies. Managers, executives
            & leaders agree that mentoring is one of the most impactful ways to
            spend your time. In return, you’re building crucial leadership
            qualities.
          </p>
          <div className="block lg:hidden">
            <BecomeMentorSlider />
          </div>
          <div className="hidden lg:block">
            <BecomeMentorDesktopSlider />
          </div>
        </div>
      </section>
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(43, 195, 252, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
        className="py-5 px-4 sm:px-16 md:px-28"
      >
        <div className="pt-16 pb-11">
          <div className=" ">
            <div className="flex flex-wrap flex-col">
              <h1 className="font-bold font-primayfont text-2xl text-dark-blue align-middle self-start text-center lg:text-2xl">
                Mentoring On Edukith
              </h1>
            </div>
            <p
              className="font-primayfont text-dark-blue font-normal text-base mt-2 pr-2"
              style={{ opacity: 0.9 }}
            >
              Partnering with us means you don’t have to worry about anything
              else other than what is important for you.
            </p>
            <p
              className="font-primayfont text-dark-blue font-normal text-base pr-2"
              style={{ opacity: 0.9 }}
            >
              We will take care of everything else. Here are list of features
              that we provide:
            </p>
          </div>
          <Features />
          <div className="flex justify-center">
            <CustomButton
              text={"Become a mentor"}
              onClick={navigateToBecomeMentor}
              style="mt-6"
            />
          </div>
        </div>
      </section>
      {/* About us  */}
      <section className="bg-dark-blue px-4 sm:px-16 md:px-28 flex flex-col justify-center items-center lg:flex-row lg:justify-between pb-14">
        <div className="flex flex-col mt-11 lg:mt-14 justify-center items-center lg:w-2/5 lg:justify-start lg:items-start">
          <h3 className="font-primayfont text-white font-bold text-xl w-full lg:text-4xl">
            {HomeStrings.about_us}
          </h3>
          <p className="mt-4 pr-1 font-primayfont font-normal text-base text-white w-full">
            {HomeStrings.about_us_text}
          </p>
          <p className="mt-4 pr-1 hidden lg:block font-primayfont font-normal text-base text-white w-full lg:mt-6">
            {HomeStrings.about_us_text}
          </p>
          <div className="flex flex-row justify-between mt-9 items-center space-x-3 w-full max-w-threethirty">
            <button
              className="rounded-lg text-white font-primayfont my-0 w-1/2 h-full text-base font-bold py-4 border-2"
              style={{
                background: `linear-gradient(180deg, ${Colors["primay-light"]} 0%, ${Colors["primary-dark"]} 100%)`,
                borderColor: "#fff0",
              }}
            >
              {HomeStrings.view_more}
            </button>
            <button
              className="rounded-lg text-primary font-primayfont my-0 w-1/2 h-full text-base font-bold py-4"
              style={{
                border: "2px solid",
                borderColor: `linear-gradient(180deg, ${Colors["primay-light"]} 0%, ${Colors["primary-dark"]} 100%)`,
              }}
            >
              {HomeStrings.get_started}
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center lg:w-2/5">
          <img src={AssetHome3} alt="about" className="mt-14 mb-11 w-full" />
        </div>
      </section>
      {/* testimonials  */}
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(43, 195, 252, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
        className="px-4 py-16"
      >
        {/* faqs  */}
        <div className="flex flex-col justify-center px-4">
          <h1 className="font-primayfont text-dark-blue text-xl font-bold text-center pr-2 lg:text-4xl">
            {HomeStrings.many_people_ask_about_this}
          </h1>

          <div className="mt-11 flex flex-col justify-center items-center lg:mt-16">
            <Faq
              title={HomeStrings.faq_1}
              description={HomeStrings.faq_1_answer}
            />
            <div className="mt-4 flex justify-center w-full">
              <Faq
                marginTop={16}
                title={HomeStrings.faq_2}
                description={HomeStrings.faq_2_answer}
              />
            </div>
            <div className="mt-4 flex justify-center w-full">
              <Faq
                marginTop={16}
                title={HomeStrings.faq_3}
                description={HomeStrings.faq_3_answer}
              />
            </div>
            <div className="mt-4 flex justify-center w-full">
              <Faq
                marginTop={16}
                title={HomeStrings.faq_4}
                description={HomeStrings.faq_4_answer}
              />
            </div>
            <div className="mt-4 flex justify-center w-full">
              <Faq
                marginTop={16}
                title={HomeStrings.faq_5}
                description={HomeStrings.faq_5_answer}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeMentor;
