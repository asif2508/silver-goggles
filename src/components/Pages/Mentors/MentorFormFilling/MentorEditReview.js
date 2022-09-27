import React, { useEffect } from "react";
import Breadcrumb from "../../../Component/Breadcrumb";
import Header from "../../../Header/Header";
import Asset from "../../../../images/asset_edit_mentor_3.svg";
import AssetLarge from "../../../../images/asset_edit_mentor_3_large.svg";
import CustomButton from "../../../Component/CustomButton";
import HeaderSeprater from "../../../Component/HeaderSeprater";
import { useNavigate } from "react-router-dom";

const MentorEditReview = () => {
  const [skills, setSkills] = React.useState([]);
  const [skillString, setSkillString] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />
      <div className="px-4 md:px-16 lg:px-24 flex flex-col">
        <Breadcrumb
          navigations={["Become a Mentor"]}
          onPressRoutes={["/become-mentor"]}
        />{" "}
        <div className="header mt-7 lg:mt-12">
          <h3 className="font-primayfont text-dark-blue text-xl lg:text-2xl font-bold">
            Applying As A Mentor
          </h3>
          <p className="font-primayfont text-dark-blue text-sm font-normal lg:text-base mt-4">
            Filling out the form only takes a few minutes. These details will
            help us know about you more & why you’d like to become a mentor.
            Please give it your best.
          </p>
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src={Asset}
              alt="Navigate"
              className="mt-9 h-20 flex lg:hidden"
              style={{ width: 420, minHeight: 80, maxHeight: 80 }}
            />
            <img
              src={AssetLarge}
              alt="Navigate"
              className="mt-20 h-20 hidden lg:flex"
              style={{ minHeight: 80, maxHeight: 80 }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="fields w-full lg:w-3/4">
            <p className="font-primayfont text-dark-blue font-normal text-base lg:text-xl mt-5 lg:mt-11">
              That’s it. You made it 😅 Thankyou so much for applying. We will
              be in touch with you very soon.
            </p>
            <br />
            <br />
            <p className="font-primayfont text-dark-blue font-normal text-base lg:text-xl">
              Please note that you agree with our terms and conditions & Mentor
              agreement by submitting this form. If your profile interests us,
              you will get an email with a link which will give you access to
              mentor’s dashboard.
            </p>
            <div className="w-full mt-9 lg:mt-12 mb-16 lg:mb-24 flex justify-center">
              <CustomButton text="Submit" styleClass="w-full lg:w-96" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorEditReview;
