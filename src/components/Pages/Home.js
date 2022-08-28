import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Header from "../Header/Header";
import AssetHome1 from "../../images/asset_home_1.png";
import Companies from "../../images/companies.svg";
import image from "../../images/kalpesh.jpg";
import image2 from "../../images/aayu.jpg";
import AssetHome3 from "../../images/asset_home_3.svg";
import HomeStrings from "../../utils/Strings/HomeStrings";
import Faq from "../Component/Home/Faq";
import HomeSlider from "../Component/Home/HomeSlider";
import MentorSlider from "../Component/Home/MentorSlider";
import PackageSlider from "../Component/Home/PackageSlider";
import TestimonialsSlider from "../Component/Home/TestimonialsSlider";
import Colors from "../../utils/Colors";
import HomeSliderDesktop from "../Component/Home/HomeSliderDesktop";
import MentorSliderDesktop from "../Component/Home/MentorSliderDesktop";
import PackageSliderDesktop from "../Component/Home/PackageSliderDesktop";
import Constants from "../../constants/Constants";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const mentors = [
    {
      mentorName: "Kalpesh Lohar",
      mentorPost: "Founder & CTO",
      imgUrl: image,
    },
    {
      mentorName: "Aayu Kharbanda",
      mentorPost: "Founder & CEO",
      imgUrl: image2,
    },
    {
      mentorName: "Kalpesh Lohar",
      mentorPost: "Founder & CTO",
      imgUrl: image,
    },
    {
      mentorName: "Aayu Kharbanda",
      mentorPost: "Founder & CEO",
      imgUrl: image2,
    },
    {
      mentorName: "Kalpesh Lohar",
      mentorPost: "Founder & CTO",
      imgUrl: image,
    },
    {
      mentorName: "Aayu Kharbanda",
      mentorPost: "Founder & CEO",
      imgUrl: image2,
    },
    {
      mentorName: "Kalpesh Lohar",
      mentorPost: "Founder & CTO",
      imgUrl: image,
    },
    {
      mentorName: "Aayu Kharbanda",
      mentorPost: "Founder & CEO",
      imgUrl: image2,
    },
  ];

  const searchChips = [
    "Web Designer",
    "UI/UX Designer",
    "Frontend",
    "Startup",
    "Frontend",
    "Startup",
    "Study Abroad",
    "UI/UX Designer",
    "Frontend",
    "Startup",
    "Frontend",
    "Startup",
    "Study Abroad",
  ];

  return (
    <div className="min-h-half">
      <div style={{ background: Constants.homeBackgroundGradient }}>
        <div>
          <Header />
        </div>
        {/* section 1 */}
        <section className="flex flex-col justify-center items-center">
          <div className="px-4 lg:px-60 flex flex-col justify-center items-center">
            <div className="flex pt-10 flex-wrap">
              <h1 className="font-bold flex lg:hidden font-primayfont text-2xl text-dark-blue align-middle text-center">
                Find Out what you like doing best with your buddy mentors
              </h1>
              <h1
                className="font-bold hidden lg:flex font-primayfont text-dark-blue align-middle text-center"
                style={{ fontSize: 48 }}
              >
                Find Out what you like doing best with your buddy mentors
              </h1>
            </div>
            <h2 className="font-normal text-base lg:text-lg mt-5 text-dark-blue text-center align-middle mb-8">
              Book & meet expert{" "}
              <b>mentors from top companies & get 1:1 mentorship sessions.</b>{" "}
              Join our growing community today.
            </h2>
          </div>
          <div
            className="h-10 flex flex-row align-middle rounded-md bg-white justify-center lg:h-12 px-4 w-10/12 md:w-2/3"
            style={{ borderWidth: 1, borderColor: Colors.textInputBorder }}
          >
            <div className="flex flex-row align-middle w-full">
              <BiSearch
                color={(Colors["primay-light"], Colors["primary-dark"])}
                className="align-middle h-full block lg:hidden"
                size={19}
              />
              <BiSearch
                color={(Colors["primay-light"], Colors["primary-dark"])}
                className="align-middle h-full hidden lg:block"
                size={30}
              />
              <input
                type="search"
                placeholder={HomeStrings.search_placeholder}
                className="text-dark-blue px-2 outline-none border-none w-full font-primayfont text-sm lg:text-lg"
              />
            </div>
            <button
              className="px-4 rounded-lg text-white font-bold text-xs font-primayfont my-2 block lg:hidden"
              style={{
                background: `linear-gradient(180deg, ${Colors["primay-light"]} 0%, ${Colors["primary-dark"]} 100%)`,
              }}
            >
              {HomeStrings.search}
            </button>
            <button
              className="px-4 rounded-lg w-64 text-white font-bold text-lg font-primayfont my-2 hidden lg:block"
              style={{
                background: `linear-gradient(180deg, ${Colors["primay-light"]} 0%, ${Colors["primary-dark"]} 100%)`,
              }}
            >
              {HomeStrings.search_mentor}
            </button>
          </div>
          <div className="mt-8 px-4 w-full md:w-2/3">
            <h3 className="font-semibold text-base font-primayfont text-dark-blue lg:text-lg">
              {HomeStrings.trending_keywords}
            </h3>
            <div className="my-4 flex w-full flex-wrap justify-start">
              {searchChips.map((text, index) => (
                <p
                  key={index}
                  className="flex flex-row text-yellow font-bold font-primayfont text-xs mr-4 lg:mr-9 my-1 cursor-pointer lg:text-lg"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* section 2 */}
      <section className="px-4 mb-48 sm:mb-36 lg:mb-20 items-center flex justify-center h-2/3 ">
        <img className="w-10/12 md:w-2/3" alt="Home page" src={AssetHome1} />
      </section>
      <section className="px-4 -mt-80 bg-dark-blue md:px-28">
        <div className="pt-40 sm:pt-48 lg:pt-64">
          <h3 className="font-bold font-primayfont text-xl text-white lg:text-4xl">
            {HomeStrings.how_it_works}
          </h3>
          <p className="font-primayfont mt-4 lg:mt-8 text-base text-white pr-2 my-2 mb-11 lg:text-base">
            {HomeStrings.how_it_works_text}
          </p>
          <div className="block lg:hidden">
            <HomeSlider />
          </div>
          <div className="hidden lg:block">
            <HomeSliderDesktop />
          </div>
        </div>
      </section>
      {/* Our Mentors  */}
      <section
        style={{
          background: Constants.homeBackgroundGradient,
        }}
        className="py-5 px-4 md:px-28"
      >
        <div className="pt-16 pb-11 lg:flex lg:justify-between lg:items-start">
          <div className="lg:w-2/3 ">
            <div className="flex flex-wrap flex-col">
              <h1 className="font-bold font-primayfont text-2xl text-dark-blue align-middle self-start text-center lg:text-3xl">
                {HomeStrings.our_mentors}
              </h1>
            </div>
            <p
              className="font-primayfont text-dark-blue font-normal text-base mt-2 pr-2"
              style={{ opacity: 0.9 }}
            >
              Our Mentors <b>share information</b> about his or her own career
              path, as well as{" "}
              <b>
                {" "}
                provide guidance, motivation, emotional support, and role
                modeling.
              </b>{" "}
              They help you with{" "}
              <b>
                exploring careers, setting goals, developing contacts, and
                identifying resources.
              </b>{" "}
            </p>
          </div>
          <button
            className="rounded-lg text-primary font-primayfont my-0 text-base font-bold w-56 px-6 py-3 hidden lg:block"
            style={{
              border: "2px solid",
              borderColor: `linear-gradient(180deg, ${Colors["primay-light"]} 0%, ${Colors["primary-dark"]} 100%)`,
            }}
          >
            {HomeStrings.explore_all}
          </button>
        </div>
        <div className="block lg:hidden">
          <MentorSlider mentors={mentors} />
        </div>
        <div className="hidden lg:block">
          <MentorSliderDesktop mentors={mentors} />
        </div>
      </section>
      {/* Companies  */}
      <section
        className="mt-14 flex items-center justify-center flex-col"
        style={{ paddingLeft: 19, paddingRight: 19 }}
      >
        <div
          className="rounded-lg px-6 py-9 justify-center flex flex-col bg-white items-center w-11/12 lg:w-9/12"
          style={{
            borderWidth: 1.11,
            borderBottomColor: Colors.dark_blue,
            borderBottomWidth: 3.227,
            borderRightWidth: 3.227,
          }}
        >
          <h3 className="mt-6 font-primayfont text-dark-blue font-bold text-xl text-center lg:text-4xl lg:mx-28">
            {HomeStrings.header_we_are_proud}
          </h3>
          <p className="mt-3 font-primayfont font-medium text-base text text-dark-blue text-center lg:text-lg">
            <b>Click on these company logos</b> to know mentors from a specific
            company, We take a lot of proud in our mentors because they ace in
            what they do.
          </p>
          <img
            src={Companies}
            alt="Companies"
            className="w-full mt-6 md:w-2/3"
          />
        </div>
      </section>
      {/* Packages  */}
      <section className="-mt-16 pt-32 px-3 pb-16 flex flex-col justify-center">
        <div className="mx-4 lg:mx-28">
          <div className="flex flex-wrap flex-col lg:w-2/3">
            <h1 className="mt-6 font-primayfont text-dark-blue font-bold text-xl text-center lg:text-left lg:text-4xl ">
              {HomeStrings.packages_header}
            </h1>
          </div>
          <p className="mt-3 mx-6 lg:mx-0 font-primayfont font-medium text-base text text-dark-blue text-center lg:w-2/3 lg:text-lg lg:text-left">
            {HomeStrings.packages_text}
          </p>
        </div>
        {/* packages  */}
        <div className="block lg:hidden">
          <PackageSlider />
        </div>
        <div className="hidden lg:block lg:mx-28">
          <PackageSliderDesktop />
        </div>
      </section>
      {/* About us  */}
      <section className="bg-dark-blue px-4 md:px-28 flex flex-col justify-center items-center lg:flex-row lg:justify-between pb-14">
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
          background: Constants.homeBackgroundGradient,
        }}
        className="px-4 py-16"
      >
        <TestimonialsSlider />
        {/* faqs  */}
        <div className="mt-16 flex flex-col justify-center px-4">
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

export default Home;
