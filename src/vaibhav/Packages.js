import React, { useState } from "react";
import { IoIosArrowDown, IoIosCheckbox } from "react-icons/io";
import Header from "../components/Header/Header";
import Colors from "../utils/Colors";
import PackageProgram from "./PackageProgram";

const Packages = () => {
  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  };

  const pack = [
    {
      program: "Mentorship Program",
      price: "₹4999",
      month: "/month",
      features: [
        "Upto 4 calls per month",
        "Tasks & exercises",
        "No hidden charges",
        "Customised road map guidence",
      ],
      isFavourite: true,
    },
    {
      program: "Mentorship Program",
      price: "₹4999",
      month: "/month",
      features: [
        "Upto 4 calls per month",
        "Tasks & exercises",
        "No hidden charges",
        "Customised road map guidence",
      ],
      isFavourite: true,
    },
    {
      program: "Mentorship Program",
      price: "₹4999",
      month: "/month",
      features: [
        "Upto 4 calls per month",
        "Tasks & exercises",
        "No hidden charges",
        "Customised road map guidence",
      ],
      isFavourite: false,
    },
  ];

  const catagory = [
    {
        name:"Introductory call",
        value:true,
    },
    {
        name:"Introductory call",
        value:false,
    },
    {
        name:"Introductory call",
        value:false,
    },
  ]
  return (
    <>
      <div className="min-h-half">
        <Header />
        <div className="mx-4">
          <p className="font-primayfont font-bold w-full text-xl text-dark-blue">
            Select your Packages
          </p>
          <p className="font-primayfont text-sm text-dark-blue pt-4">
            Select your packages which you want to showcase on your profile.
            Mentees will select from one of these. Don’t worry it’s upto you if
            you want to take that session or not. Happy Mentoring.
          </p>

          <div className="flex flex-row pt-6 overflow-x-scroll scrollbar-hide">
            <div>
              <p
                className="font-medium text-base w-max pb-1 text-dark-blue"
                onClick={() => handletab(1)}
              >
                Mentorship Packages
              </p>
              {showtab === 1 && <div className="h-1 bg-primary rounded-full" />}
            </div>
            <div className="ml-6">
              <p
                className="font-medium text-base w-max pb-1 text-dark-blue"
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
          <div
            className={
              showtab === 1
                ? "flex flex-wrap mt-6 justify-evenly lg:justify-start "
                : "hidden"
            }
          >
            <p>
              Pricing for the mentorship programs are editable. You can choose
              multiple packages to showcase on your profile. Remember to set a
              price which is affordable for your mentees.
            </p>
            {pack.map((data, index) => (
              <div>
                <PackageProgram data={data} key={index} />
              </div>
            ))}
          </div>
          <div
            className={
              showtab === 2
                ? "mt-6 "
                : "hidden"
            }
          >
            <p className="font-primayfont text-dark-blue text-sm">
              Pricing for the mentorship programs are editable. You can choose
              multiple packages to showcase on your profile. Remember to set a
              price which is affordable for your mentees.
            </p>
            <div className="flex flex-row justify-between pt-7">
                <p className="font-primayfont font-medium text-base text-dark-blue">Select catagories</p>
                <IoIosArrowDown />
            </div>
            <hr className="mt-2" />
            {catagory.map((data, index)=>(
            <div className="border-1 rounded-lg mb-2 py-2 px-4 mt-6">
              
                     <div className="flex flex-row justify-between">
                     <p>{data.name}</p>
                     {data.value ? (
                //   <IoIosCheckbox className="h-6 w-6" color={Colors.green} />
                <input type='checkbox' className="w-6 h-6 " style={{color:Colors.green}} />
                ) : (
                    <input type='checkbox'  className="w-6 h-6" />
                )}
                 </div>
               
               
                
            </div>
             ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
