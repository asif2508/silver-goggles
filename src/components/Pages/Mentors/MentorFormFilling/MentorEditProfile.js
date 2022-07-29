import React from "react";
import Breadcrumb from "../../../Component/Breadcrumb";
import Header from "../../../Header/Header";
import Asset from "../../../../images/asset_edit_mentor_1.svg";
import CustomButton from "../../../Component/CustomButton";
import HeaderSeprater from "../../../Component/HeaderSeprater";

const MentorEditProfile = () => {
  return (
    <div className="min-h-half">
      <Header />
      <HeaderSeprater />
      <div className="px-4 mt-8 lg:ml-24">
        <Breadcrumb navigations={["Become a Mentor"]} />
        <div className="header mt-7">
          <h3 className="font-primayfont text-dark-blue text-xl font-bold">
            Applying As A Mentor
          </h3>
          <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
            Filling out the form only takes a few minutes. These details will
            help us know about you more & why you’d like to become a mentor.
            Please give it your best.
          </p>
          <div className="w-full flex justify-center">
            <img
              src={Asset}
              alt="Navigate"
              className="mt-9 h-20 flex"
              style={{ width: 420, minHeight: 80, maxHeight: 80 }}
            />
          </div>
        </div>
        <div className="fields">
          {/* Profile picture  */}
          <div className="field">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-9">
              Profile picture
            </p>
            <div className="mt-2 flex items-center">
              <CustomButton text="Choose file" />
              <p className="font-primayfont text-dark-blue text-sm font-normal ml-4">
                KB.png
              </p>
            </div>
          </div>
          {/* First and Last name  */}
          <div className="flex space-x-4">
            <div className="field w-1/2">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
                First Name
              </p>
              <input
                type="text"
                placeholder="e.g. Kapil"
                className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              />
            </div>
            <div className="field w-1/2">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
                Last Name
              </p>
              <input
                type="text"
                placeholder="e.g. Batra"
                className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              />
            </div>
          </div>
          {/* Email and Phone  */}
          <div className="flex space-x-4">
            <div className="field w-1/2">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
                E-mail
              </p>
              <input
                type="text"
                placeholder="Enter your email"
                className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              />
            </div>
            <div className="field w-1/2">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
                Phone Number
              </p>
              <input
                type="text"
                placeholder="Your phone number"
                className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              />
            </div>
          </div>
          {/* location and Gender  */}
          <div className="flex space-x-4">
            <div className="field w-1/2">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
                Location
              </p>
              <input
                type="text"
                placeholder="Your location"
                className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              />
            </div>
            <div className="field w-1/2">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
                Gender
              </p>
              <input
                type="text"
                placeholder="Other"
                className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              />
            </div>
          </div>
          {/* linkedin and address  */}
          <div className="flex space-x-4">
            <div className="field w-1/2">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
                LinkedIn profile
              </p>
              <input
                type="text"
                placeholder="https://www.linkedin.com/in/kapil-batra-b9a8b817b/"
                className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              />
            </div>
            <div className="field w-1/2">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
                Address
              </p>
              <input
                type="text"
                placeholder="2A ABC DEF Near..."
                className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              />
            </div>
          </div>
          {/* Language and website  */}
          <div className="flex space-x-4">
            <div className="field w-1/2">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
                Language you Spoke
              </p>
              <input
                type="text"
                placeholder="Hindi,English,..."
                className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              />
            </div>
            <div className="field w-1/2">
              <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
                Website/Portfolio Link
              </p>
              <input
                type="text"
                placeholder="https://www.kapil..."
                className="border-1 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
              />
            </div>
          </div>
          {/* About  */}
          <div className="field w-full">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
              Tell us about yourself (This will be visible to your profile)
            </p>
            <input
              type="text"
              placeholder="Max 150 words"
              maxLength={150}
              className="border-1 h-40 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
            />
          </div>
          {/* Why Mentor  */}
          <div className="field w-full">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
              Why do you want to be a mentor? (Non-visible)
            </p>
            <input
              type="text"
              placeholder="Write about your expectations and future plans."
              maxLength={150}
              className="border-1 h-40 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
            />
          </div>
          {/* Skills  */}
          <div className="field w-full">
            <p className="font-primayfont text-dark-blue text-sm font-normal mt-4">
              Write the best keywords which discribes your industry. (Mentees
              will find you through these.)
            </p>
            <input
              type="text"
              placeholder="Add tag, Comma Seprated"
              maxLength={150}
              className="border-1 h-40 border-textInputBorder px-4 py-3 font-primayfont text-sm text-dark-blue rounded-lg mt-2 w-full"
            />
          </div>
          <div className="w-full mt-9 mb-16">
            <CustomButton text="Save & Next" style="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorEditProfile;
