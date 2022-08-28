import React, { useState } from "react";
import { BsCheck2Circle, BsPencil } from "react-icons/bs";
import { IoIosArrowDown, IoIosCheckbox } from "react-icons/io";
import Header from "../../../Header/Header";
import Colors from "../../../../utils/Colors";
import WellDonePopUp from "./WellDonePopUp";
import HrBottom from "../../../Component/HrBottom";
import CustomButton from "../../../Component/CustomButton";

const AddPackages = () => {
  const [showMyModel, setMyModel] = useState(false);
  const handleOnClose = () => setMyModel(false);

  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  };

  const [click, setClick] = useState(false);
  function changecolor() {
    setClick(!click);
  }

  const catagory = [
    {
      name: "Introductory call",
      value: true,
    },
    {
      name: "Career Strategy",
      value: false,
    },
    {
      name: "Job Search",
      value: false,
    },
    {
      name: "CV Review",
      value: true,
    },
    {
      name: "Interview Prepration",
      value: false,
    },
    {
      name: "Study Abroad",
      value: false,
    },
  ];

  const packages = [
    {
      name: "Introductory call",
      price: "299",
      features: [
        "30 - 40 minutes session to discuss your doughts & queries.",
        "No hidden charges",
        "Tasks & exercises",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-half">
        <Header />
        <div className="mt-9 px-4 sm:px-16 md:px-28 w-full lg:h-full lg:w-full">
          <p className="font-primayfont font-bold w-full text-xl text-dark-blue">
            Select your Packages
          </p>
          <p className="font-primayfont text-sm text-dark-blue pt-4 lg:w-2/3">
            Select your packages which you want to showcase on your profile.
            Mentees will select from one of these. Don’t worry it’s upto you if
            you want to take that session or not. Happy Mentoring.
          </p>

          <div className="flex flex-row pt-6 overflow-x-scroll scrollbar-hide">
            <div>
              <p
                className="font-medium text-base w-max pb-1 cursor-pointer text-dark-blue"
                onClick={() => handletab(1)}
              >
                Quick Calls
              </p>
              {showtab === 1 && <div className="h-1 bg-primary rounded-full" />}
            </div>
          </div>
          <HrBottom />

          <div className={showtab === 1 ? "mt-6 " : "hidden"}>
            <p className="font-primayfont text-dark-blue text-sm">
              Pricing for the mentorship programs are editable. You can choose
              multiple packages to showcase on your profile. Remember to set a
              price which is affordable for your mentees.
            </p>
            <div className="flex flex-row justify-between pt-7">
              <p className="font-primayfont font-medium text-base text-dark-blue">
                Select catagories
              </p>
              <IoIosArrowDown />
            </div>
            <HrBottom />
            <div className="flex flex-col md:flex-row flex-wrap mt-6 justify-between">
              {catagory.map((item, index) => {
                return (
                  <div key={index} className="border-1 min-w-mentorbox w-full max-w-md lg:max-w-mentorbox border-textInputBorder rounded-lg flex flex-row justify-between px-4 py-3 mb-4">
                    <p className="font-primayfont text-sm text-dark-blue">
                      {item.name}
                    </p>
                    <input className="w-4 h-4 rounded-lg" color={Colors.green} type="checkbox" value={item.value} />
                  </div>
                )
              })}
            </div>
            <div className="lg:flex lg:flex-row mt-4">
              {packages.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col justify-center items-center max-w-packagebox">
                    <div className="rounded-lg border-1 border-textInputBorder px-6"  >
                      <p className="font-primayfont text-base text-dark-blue mt-6">
                        {item.name}
                      </p>
                      <div className="flex flex-row justify-between mb-4">
                        <p className="font-primayfont font-bold text-dark-blue text-2xl pt-3">
                          ₹{item.price}/call
                        </p>
                        <BsPencil className="mt-3" />
                      </div>
                      {item.features.map((item, index) => {
                        return (
                          <div
                            className="flex flex-row mb-2"
                            style={{ color: Colors.back }}
                          >
                            <BsCheck2Circle className="w-6 h-6" />
                            <p className="font-primayfont text-base ml-3 w-60">
                              {item}
                            </p>
                          </div>
                        )
                      })}
                      <button
                        disabled
                        className="rounded-lg font-bold text-white px-10 h-10 mt-4 mb-6"
                        style={{ background: Colors.back }}
                      >
                        Book Now
                      </button>
                    </div>
                    <BsCheck2Circle className="mt-6 h-10 w-10 text text-green" />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="items-center text-center mt-10 mb-20">
            <CustomButton text="Complete Setup" className="" style="w-full sm:max-w-packagebox" onClick={() => setMyModel(true)} />
          </div>

          <WellDonePopUp onClose={handleOnClose} visible={showMyModel} />
        </div>
      </div>
    </>
  );
};

export default AddPackages;
