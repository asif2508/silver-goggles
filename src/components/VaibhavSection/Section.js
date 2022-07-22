import React, { useState } from "react";
import Header from "../Header/Header";
import men from "../../images/Rectangle_18.svg";
import link_icon from "../../images/linkedin_icon.svg";
import Colors from "../../utils/Colors";
import LoginString from "../../utils/Strings/LoginString";
import MyModel from "./MyModel";


const Section = () => {
  const [showMyModel, setMyModel] = useState(false);
  const handleOnClose = () => setMyModel(false);
  return (
    <>
      <div className="min-h-half">
        <Header />
        <hr />
        {/* aside sectionn start here */}
        <div className="flex flex-row ml-2">
          <aside>
            <img className="w-16 ml-2 h-24 mt-3 lg:w-48 lg:h-52" src={men} />
            <img className="ml-9 mt-1 w-5 h-5 lg:ml-24" src={link_icon} />
          </aside>
          <div className="font-primayfont ml-4 mt-3 font-bold lg:h-6">
            <h3 style={{fontSize:24,fontWeight:700,color: Colors.dark_blue}} >{LoginString.name}</h3>
            <h5 className="w-64" style={{fontSize:16,fontWeight:400,color: Colors.dark_blue,width:336}}>{LoginString.jobrole}</h5>
            <h6 className="w-48 ">{LoginString.study}</h6>
            <div className="inline-flex mt-2">
              <p style={{fontSize:16,fontWeight:400,color: Colors.dark_blue}}>{LoginString.location}</p>
              <p className="ml-2" style={{fontSize:16,fontWeight:400,color: Colors.dark_blue}}>{LoginString.language}</p>
 
            </div>
          </div>
        </div>
        {/* aside section ends here */}

        {/* Main content start here */}
        <div className="pl-3 pr-3 mt-4">
          <div
            className="w-full  rounded-lg  pr-9 pl-9 lg:w-7/12  lg:h-full lg:ml-56 lg:mt-2"
            style={{ borderWidth: 1, borderColor: Colors.textInputBorder,width:842 }}
          >
            <h1 className=" font-bold mt-9" style={{fontSize:24,width:234,color: Colors.dark_blue}}>{LoginString.session}</h1>
            <h2 className="mt-1 lg:float-right"style={{fontSize:16,fontWeight:500,color: Colors.dark_blue}} >{LoginString.mentorship}</h2>
            <h2 className="mt-1 mb-5  h-7" style={{fontSize:18,fontWeight:400}}>
             {LoginString.timezone}{" "}
              <span style={{ color: Colors.buttonBlue,fontSize:18,fontWeight:600 }}>{LoginString.update}</span>
            </h2>
            <hr style={{color:Colors.lightgrey}} />
            <div className="flex flex-row  overflow-x-scroll  whitespace-nowrap font-primayfont  mt-6">
              <div className="slider flex flex-row mb-6">
                <div
                  className="w-20 h-20  mt-4 text-center pt-2 rounded-lg"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.textInputBorder,
                    width:111,height:111
                  }}
                >
                    <div style={{height:84,width:50,marginLeft:31,marginTop:13}}>
                  <p className=" font-normal mt-3" style={{fontSize:14}}>{LoginString.thu_day}</p>
                  <h3 className="font-bold mt-1" style={{fontSize:16}}>{LoginString.date1}</h3>
                  <h4 className="font-normal mt-3 mb-3"style={{fontSize:14,color:Colors.green}}>{LoginString.slot}</h4>
                  </div>
                </div>
                <div
                  className="w-20 h-20 ml-6 mt-4 text-center pt-2 rounded-lg"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.textInputBorder,
                    width:111,height:111
                  }}
                >
                  <div style={{height:84,width:50,marginLeft:31,marginTop:13}}>
                  <p className=" font-normal mt-3" style={{fontSize:14}}>{LoginString.fry_day}</p>
                  <h3 className="font-bold mt-1" style={{fontSize:16}}>{LoginString.date2}</h3>
                  <h4 className="font-normal mt-3 mb-3"style={{fontSize:14,color:Colors.green}}>{LoginString.slot}</h4>
                  </div>
                </div>
                <div
                  className="w-20 h-20  mt-4 text-center pt-2 rounded-lg"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.textInputBorder,
                    width:111,height:111,marginLeft:23
                  }}
                >
                  <div style={{height:84,width:50,marginLeft:31,marginTop:13}}>
                  <p className=" font-normal mt-3" style={{fontSize:14}}>{LoginString.sat_day}</p>
                  <h3 className="font-bold mt-1" style={{fontSize:16}}>{LoginString.date3}</h3>
                  <h4 className="font-normal mt-3 mb-3"style={{fontSize:14,color:Colors.green}}>{LoginString.slot}</h4>
                  </div>
                </div>
                <div
                  className="w-20 h-20  mt-4 text-center pt-2 rounded-lg"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.textInputBorder,
                    width:111,height:111,marginLeft:23
                  }}
                >
                  <div style={{height:84,width:50,marginLeft:31,marginTop:13}}>
                  <p className=" font-normal mt-3" style={{fontSize:14}}>{LoginString.sun_day}</p>
                  <h3 className="font-bold mt-1" style={{fontSize:16}}>{LoginString.date4}</h3>
                  <h4 className="font-normal mt-3 mb-3"style={{fontSize:14,color:Colors.green}}>{LoginString.slot}</h4>
                  </div>
                </div>
                <div
                  className="w-20 h-20  mt-4 text-center pt-2 rounded-lg"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.textInputBorder,
                    width:111,height:111,marginLeft:23
                  }}
                >
                 <div style={{height:84,width:50,marginLeft:31,marginTop:13}}>
                  <p className=" font-normal mt-3" style={{fontSize:14}}>{LoginString.mon_day}</p>
                  <h3 className="font-bold mt-1" style={{fontSize:16}}>{LoginString.date5}</h3>
                  <h4 className="font-normal mt-3 mb-3"style={{fontSize:14, color:Colors.green }}>{LoginString.slot}</h4>
                  </div>
                </div>
                <div className="w-20 h-20  mt-4 text-center pt-2 rounded-lg" style={{ width:111,height:111}}>
                  <h2 className="text-center font-bold mt-6">{LoginString.view} </h2>
                </div>
              </div>
            </div>
            <hr style={{color:Colors.lightgrey}} />
            <h1 className="font-normal mt-4" style={{fontSize:18,fontWeight:400}}>{LoginString.timeslot}</h1>
            <div className="flex flex-row  overflow-x-scroll  whitespace-nowrap font-primayfont text-base mt-6">
              <div className="second_slider flex flex-row">
                <div
                  className="w-32 h-12 rounded-lg"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.textInputBorder,
                  }}
                >
                  <h1 className="font-bold text-sm ml-11 mt-3">2:30 pm</h1>
                </div>
                <div
                  className="w-32 h-12 rounded-lg ml-4"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.textInputBorder,
                  }}
                >
                  <h1 className="font-bold text-sm ml-11 mt-3">3:00 pm</h1>
                </div>
                <div
                  className="w-32 h-12 rounded-lg ml-4"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.textInputBorder,
                  }}
                >
                  <h1 className="font-bold text-sm ml-11 mt-3">3:30 pm</h1>
                </div>
                <div
                  className="w-32 h-12 rounded-lg ml-4"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.textInputBorder,
                  }}
                >
                  <h1 className="font-bold text-sm ml-11 mt-3">4:00 pm</h1>
                </div>
                <div
                  className="w-32 h-12 rounded-lg ml-4"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.textInputBorder,
                  }}
                >
                  <h1 className="font-bold text-sm ml-11 mt-3">4:30 pm</h1>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg h-10 text-white cursor-pointer font-bold flex justify-center items-center mb-7 w-full mt-6 "
              style={{
                background: "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
              }}
              onClick={() => setMyModel(true)}
            >
              <p>Book Session For 6 Jun,2:30 PM</p>
            </div>
          </div>
        </div>
        {/* main content ends here */}
      </div>
      <MyModel onClose={handleOnClose} visible={showMyModel} />
    </>
  );
};

export default Section;
