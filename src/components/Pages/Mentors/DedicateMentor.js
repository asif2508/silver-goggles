import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Header/Header";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Colors from "../../../utils/Colors";
import kalpesh from "../../../images/kalpesh.jpg";
import CustomExperienceBox from "../../Component/DedicateMentor/CustomExperienceBox";
import Packages from "../../Component/DedicateMentor/Packages";
import SimilarMentorBox from "../../Component/DedicateMentor/SimilarMentorBox";
import Review from "../../Component/DedicateMentor/Review";
import Breadcrumb from "../../Component/Breadcrumb";
import HeaderSeprater from "../../Component/HeaderSeprater";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailsAction } from "../../../actions/users";
import Loader from "../../Component/Loader";
import { map } from "lodash";

const DedicateMentor = () => {
  const { id } = useParams();
  const [isFullPage, setIsFullPage] = useState(true);
  const navigate = useNavigate();
  const [flLoading, setFlLoading] = useState(true);

  const packages = [
    {
      name: "Quick Call",
      price: "₹49",
      duration: "session",
      features: [
        "Upto 4 calls per month",
        "Tasks & exercises",
        "No hidden charges",
        "Customised road map guidence",
      ],
    },
  ];

  const dispatch = useDispatch();
  const { loading, mentor } = useSelector((state) => state.getMentorById);

  useEffect(() => {
    dispatch(getUserDetailsAction(id));
  }, [navigate, dispatch, id]);

  useEffect(() => {
    setFlLoading(loading);
    console.log(loading, flLoading, mentor);
  }, [loading, mentor, flLoading]);

  return (
    <div className="min-h-half h-full">
      <div className="header">
        <Header />
        <HeaderSeprater />
      </div>
      {flLoading ? (
        <Loader />
      ) : (
        mentor && (
          <div className="maincontainer px-4 md:px-24">
            <div className="flex lg:flex-row flex-col justify-evenly">
              <div className="lg:w-3/5">
                <Breadcrumb
                  navigations={["Mentors", "Kalpesh"]}
                  onPressRoutes={["/mentors", "/"]}
                />
                <div className="userInro mt-6 lg:mt-12 w-full">
                  <div className="upperpart flex justify-between">
                    <img
                      src={mentor.Personal.profileImg}
                      alt="mentor"
                      height={82}
                      width={74}
                      className="w-3/12 rounded"
                    />
                    <div className="about w-9/12 ml-4 flex flex-col">
                      <h2 className="text-lg font-primayfont text-dark-blue font-bold lg:text-2xl">
                        {mentor.Personal.name}
                      </h2>
                      <p className="text-base font-primayfont text-dark-blue font-normal lg:mt-1 pr-2 lg:text-base">
                        {mentor.Professional.workExperience[0].designation} at{" "}
                        {mentor.Professional.workExperience[0].company}
                      </p>
                      <p className="text-base font-primayfont text-dark-blue font-normal mt-1 lg:mt-2 lg:text-base">
                        🎯 {mentor.Education[0].specialization} at{" "}
                        {mentor.Education[0].college}
                      </p>
                      <p className="text-base text-dark-blue font-primayfont font-normal mt-4 hidden lg:block">
                        {mentor.Personal.about}
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-full mt-4 lg:hidden"
                    style={{
                      borderColor: "rgba(0, 16, 60, 0.15)",
                      borderWidth: 0.5,
                      borderStyle: "solid",
                    }}
                  />
                  <p className="text-base text-dark-blue font-primayfont font-normal mt-4 block lg:hidden">
                    {mentor.Personal.about}
                  </p>
                  {isFullPage ? (
                    <div>
                      <div className="skills mt-6 lg:mt-16">
                        <h3 className="text-xl font-primayfont text-dark-blue font-bold">
                          Skills
                        </h3>
                        <div className="flex mt-4 flex-wrap">
                          {mentor.Mentorship.skills.map((skill, index) => (
                            <div
                              className="h-8 py-2 px-4 bg-chipGrey rounded-3xl mr-4 mb-4"
                              key={index}
                            >
                              <p className="h-8 text-sm text-dark-blue font-primayfont font-medium">
                                {skill}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="experience mt-2">
                        <h3 className="text-xl font-primayfont text-dark-blue font-bold">
                          Experience
                        </h3>
                        <div className="flex mt-4 flex-col">
                          {mentor.Professional.workExperience.map((data, index) => (
                            <CustomExperienceBox key={index} data={data} type='experience' />
                          ))}
                        </div>
                      </div>
                      <div className="education mt-2">
                        <h3 className="text-xl font-primayfont text-dark-blue font-bold">
                          Education
                        </h3>
                        <div className="flex mt-4 flex-col">
                          {mentor.Education.map((data, index) => (
                            <CustomExperienceBox key={index} data={data} type='education' />
                          )
                          )}
                        </div>
                        <div
                          className="see more flex justify-center items-center lg:hidden"
                          onClick={() => {
                            setIsFullPage(false);
                          }}
                        >
                          <div className="flex flex-col justify-center items-center">
                            <BiChevronUp
                              size={24}
                              color={Colors.textBlack}
                              className="animate-bounce opacity-100"
                            />
                            <h3 className="text-base font-primayfont text-dark-blue font-bold">
                              See Less
                            </h3>
                          </div>
                        </div>
                      </div>
                      {/* <div className="lg:block hidden">
                    <div className="similar-mentors mt-4">
                      <div className="flex justify-between">
                        <h3 className="text-xl font-primayfont text-dark-blue font-bold">
                          Similar Mentors
                        </h3>
                        <h2 className="text-base mt-2 font-primayfont text-primar-second font-medium">
                          See all
                        </h2>
                      </div>
                      <div className="flex flex-col mt-5">
                        {similarMentors.map((data, index) => (
                          <SimilarMentorBox key={index} data={data} />
                        ))}
                      </div>
                    </div>
                    <div className="reviews mt-4 mb-10">
                      <h3 className="text-xl font-primayfont text-dark-blue font-bold">
                        {`Reviews (${reviews.length})`}
                      </h3>
                      <div className="flex flex-col mt-5">
                        {reviews.map((data, index) => (
                          <Review key={index} data={data} />
                        ))}
                      </div>
                    </div>
                  </div> */}
                    </div>
                  ) : (
                    <div
                      className="see more flex justify-center items-center lg:hidden"
                      onClick={() => {
                        setIsFullPage(true);
                      }}
                    >
                      <div className="flex flex-col justify-center items-center">
                        <BiChevronDown
                          size={24}
                          color={Colors.textBlack}
                          className="animate-bounce opacity-100"
                        />
                        <h3 className="text-base font-primayfont text-dark-blue font-bold">
                          See More
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="lg:w-1/4 lg:mt-16">
                <div className="packages mt-6">
                  <h3 className="text-xl font-primayfont text-dark-blue font-bold">
                    Packages
                  </h3>
                  <div className="flex flex-col mt-7">
                    {packages.map((data, index) => (
                      <Packages key={index} data={data} id={id} />
                    ))}
                  </div>
                </div>
                {/* <div className="lg:hidden block">
              <div className="similar-mentors mt-4">
                <div className="flex justify-between">
                  <h3 className="text-xl font-primayfont text-dark-blue font-bold">
                    Similar Mentors
                  </h3>
                  <h2 className="text-base mt-2 font-primayfont text-primar-second font-medium">
                    See all
                  </h2>
                </div>
                <div className="flex flex-col mt-5">
                  {similarMentors.map((data, index) => (
                    <SimilarMentorBox key={index} data={data} />
                  ))}
                </div>
              </div>
              <div className="reviews mt-4 mb-10">
                <h3 className="text-xl font-primayfont text-dark-blue font-bold">
                  {`Reviews (${reviews.length})`}
                </h3>
                <div className="flex flex-col mt-5">
                  {reviews.map((data, index) => (
                    <Review key={index} data={data} />
                  ))}
                </div>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default DedicateMentor;
