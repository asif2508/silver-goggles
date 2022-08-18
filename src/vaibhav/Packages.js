import React, { useState } from "react";
import { BsCheck2Circle, BsPencil } from "react-icons/bs";
import { IoIosArrowDown, IoIosCheckbox } from "react-icons/io";
import Header from "../components/Header/Header";
import Colors from "../utils/Colors";
import PackageProgram from "./PackageProgram";
import WellDonePopUp from "./WellDonePopUp";

const Packages = () => {
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
      name: "Introductory call",
      value: false,
    },
    {
      name: "Introductory call",
      value: false,
    },
    {
      name: "Introductory call",
      value: true,
    },
    {
      name: "Introductory call",
      value: false,
    },
    {
      name: "Introductory call",
      value: false,
    },
  ];
  return (
    <>
      <div className="min-h-half">
        <Header />
        <div className="mx-4 lg:mx-24">
          <p className="font-primayfont font-bold w-full text-xl text-dark-blue">
            Select your Packages
          </p>
          <p className="font-primayfont text-sm text-dark-blue pt-4 lg:w-2/5">
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
                Mentorship Packages
              </p>
              {showtab === 1 && <div className="h-1 bg-primary rounded-full" />}
            </div>
            <div className="ml-6">
              <p
                className="font-medium text-base w-max pb-1 cursor-pointer text-dark-blue"
                onClick={() => handletab(2)}
              >
                Quick Calls
              </p>
              {showtab === 2 && <div className="h-1 bg-primary rounded-full" />}
            </div>
          </div>
          <hr
            className="w-full -mt-1 lg:w-96"
            style={{ color: Colors.hrlightBlue }}
          />
          <div className={showtab === 1 ? "mt-6" : "hidden"}>
            <p className="lg:w-2/5 pb-16">
              Pricing for the mentorship programs are editable. You can choose
              multiple packages to showcase on your profile. Remember to set a
              price which is affordable for your mentees.
            </p>
            <div
              className="rounded-lg border-1 px-6 md:w-80 lg:w-80"
              onClick={() => changecolor}
            >
              <p className="font-primayfont text-base pt-6 text-dark-blue">
                Mentorship Program
              </p>
              <div className="flex flex-row justify-between">
                <p className="font-primayfont font-bold text-dark-blue text-2xl pt-3">
                  ₹4999/month
                </p>
                <BsPencil className="mt-3" />
              </div>
              <div
                className="flex flex-row pt-4"
                style={{ color: Colors.back }}
              >
                <BsCheck2Circle className="w-6 h-6" />
                <p className="font-primayfont text-base ml-3">
                  upto 4 calls per Month
                </p>
              </div>
              <div
                className="flex flex-row pt-2"
                style={{ color: Colors.back }}
              >
                <BsCheck2Circle className="w-6 h-6" />
                <p className="font-primayfont text-base ml-3">
                  Tasks & exercises
                </p>
              </div>
              <div
                className="flex flex-row pt-2"
                style={{ color: Colors.back }}
              >
                <BsCheck2Circle className="w-6 h-6" />
                <p className="font-primayfont text-base ml-3">
                  No hidden charges
                </p>
              </div>
              <div
                className="flex flex-row pt-2"
                style={{ color: Colors.back }}
              >
                <BsCheck2Circle className="w-6 h-6" />
                <p className="font-primayfont text-base ml-3">
                  Customised road map guidence.
                </p>
              </div>
              <button
                className="rounded-lg font-bold text-white px-10 h-10 mt-4 mb-6"
                style={{ background: Colors.back }}
              >
                Book Now
              </button>
            </div>
            <div className="w-full items-center text-center justify-between">
              <BsCheck2Circle className="h-6 w-6 text text-green" />
            </div>
          </div>
          <div className={showtab === 2 ? "mt-6 " : "hidden"}>
            <p className="font-primayfont text-dark-blue text-sm  w2/5">
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
            <hr className="mt-2" />
            <div className="lg:flex lg:flex-row">
            <div className="lg:w-1/2">
              <div className="border-1 rounded-lg flex flex-row justify-between px-4 py-3 mt-11">
                <p className="font-primayfont text-sm text-dark-blue">
                  introductry call
                </p>
                <input className="w-4 h-4" type="checkbox" />
              </div>
              <div className="border-1 rounded-lg flex flex-row justify-between px-4 py-3 mt-6">
                <p className="font-primayfont text-sm text-dark-blue">
                  Career Strategy
                </p>
                <input className="w-4 h-4" type="checkbox" />
              </div>
              <div className="border-1 rounded-lg flex flex-row justify-between px-4 py-3 mt-6">
                <p className="font-primayfont text-sm text-dark-blue">
                  Job Search
                </p>
                <input className="w-4 h-4" type="checkbox" />
              </div>
            </div>

            <div className="lg:w-1/2 lg:ml-6">
              <div className="border-1 rounded-lg flex flex-row justify-between px-4 py-3 mt-6 lg:mt-11">
                <p className="font-primayfont text-sm text-dark-blue">
                  CV Review
                </p>
                <input className="w-4 h-4" type="checkbox" />
              </div>
              <div className="border-1 rounded-lg flex flex-row justify-between px-4 py-3 mt-6">
                <p className="font-primayfont text-sm text-dark-blue">
                 Interview Prepration
                </p>
                <input className="w-4 h-4" type="checkbox" />
              </div>
              <div className="border-1 rounded-lg flex flex-row justify-between px-4 py-3 mt-6">
                <p className="font-primayfont text-sm text-dark-blue">
                 Study Abroad
                </p>
                <input className="w-4 h-4" type="checkbox" />
              </div>
            </div>

            </div>

            <div
              className="rounded-lg border-1 px-6 md:w-80 lg:w-80 mt-20"
             
            >
              <p className="font-primayfont text-base text-dark-blue mt-6">
                Mentorship Program
              </p>
              <div className="flex flex-row justify-between">
                <p className="font-primayfont font-bold text-dark-blue text-2xl pt-3">
                  ₹299/call
                </p>
                <BsPencil className="mt-3" />
              </div>
              <div
                className="flex flex-row pt-4"
                style={{ color: Colors.back }}
              >
                <BsCheck2Circle className="w-6 h-6" />
                <p className="font-primayfont text-base ml-3 w-60">
                30 - 40 minutes session to discuss your doughts & queries.
                </p>
              </div>
            
              <div
                className="flex flex-row pt-2"
                style={{ color: Colors.back }}
              >
                <BsCheck2Circle className="w-6 h-6" />
                <p className="font-primayfont text-base ml-3">
                  No hidden charges
                </p>
              </div>
              <div
                className="flex flex-row pt-2"
                style={{ color: Colors.back }}
              >
                <BsCheck2Circle className="w-6 h-6" />
                <p className="font-primayfont text-base ml-3">
                Tasks & exercises
                </p>
              </div>
              <button
                className="rounded-lg font-bold text-white px-10 h-10 mt-4 mb-6"
                style={{ background: Colors.back }}
              >
                Book Now
              </button>
            </div>
            <div className="w-full items-center text-center justify-between">
              <BsCheck2Circle className="h-6 w-6 text text-green" />
            </div>
          </div>

          <div className="items-center text-center mt-10 mb-20">
            <button  onClick={() => setMyModel(true)}className="font-bold rounded-lg bg-primar-second text-white font-primayfont h-12 px-24">Complete Setup</button>
          </div>

          <WellDonePopUp  onClose={handleOnClose} visible={showMyModel} />
        </div>
      </div>
    </>
  );
};

export default Packages;
