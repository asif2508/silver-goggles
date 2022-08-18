import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import Header from "../components/Header/Header";
import Colors from "../utils/Colors";
import Calendar from "react-calendar";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

const Availability = () => {
  const [showtab, setShowtab] = useState(1);
  const handletab = (e) => {
    setShowtab(e);
  };

  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <>
      <div className="min-h-half">
        <Header />
        <div className="py-9 pl-4 lg:pl-24">
          <p className="font-primayfont font-bold text-xl text-dark-blue">
            Availability
          </p>
          <p className="font-primayfont font-normal text-sm text-dark-blue pt-4 lg:w-1/2">
            Let us know when are you available to accept the sessions. You can
            customize these as per your requirements in future. Click on the
            plus icon to add multiple slots of your availibility.
          </p>
          <p className="font-primayfont font-normal text-sm text-dark-blue pt-6">
            Your timezone (Asia/Calcutta){" "}
            <span className="font-primayfont font-semibold text-primary">
              Updated
            </span>
          </p>

          <div className="flex flex-row pt-6 overflow-x-scroll scrollbar-hide">
            <div>
              <p
                className="font-medium text-base w-max pb-1 text-dark-blue"
                onClick={() => handletab(1)}
              >
                Available Hours
              </p>
              {showtab === 1 && <div className="h-1 bg-primary rounded-full" />}
            </div>
            <div className="ml-6">
              <p
                className="font-medium text-base w-max pb-1 text-dark-blue"
                onClick={() => handletab(2)}
              >
                Blockouts Dates
              </p>
              {showtab === 2 && <div className="h-1 bg-primary rounded-full" />}
            </div>
          </div>
          <hr
            className="w-full -mt-1 lg:w-full"
            style={{ color: Colors.hrlightBlue }}
          />

          <div className={showtab === 1 ? "mt-6 pr-4 " : "hidden"}>
            <div className="lg:hidden">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <div>
                    <FormControlLabel control={<Switch />} />
                  </div>
                  <div className="mt-1">
                    <p className="font-primayfont font-bold text-base text-dark-blue">
                      Sundays
                    </p>
                    <p className="font-primayfont text-base text-grey pl-14 pt-3 pb-6">
                      Unavailable
                    </p>
                  </div>
                </div>
                <div className="mt-1">
                  <AiOutlinePlus />
                </div>
              </div>
              <hr />
              <div className="flex flex-row justify-between pt-6">
                <div className="flex flex-row ">
                  <div>
                    <FormControlLabel control={<Switch defaultChecked />} />
                  </div>
                  <div className="mt-1">
                    <p className="font-primayfont font-bold text-base text-dark-blue ">
                      Mondays
                    </p>
                  </div>
                  <div className="flex flex-row mt-6">
                    <div className="flex flex-row border-1 rounded-lg px-3 py-2">
                      <div>
                        <p>9:00 AM</p>
                      </div>
                      <div>
                        <IoIosArrowDown className="mt-1 h-5 w-5 ml-2" />
                      </div>
                    </div>
                    <p className="font-primayfont font-bold text-xs px-6">TO</p>
                    <div className="flex flex-row border-1 rounded-lg px-3 py-2">
                      <div>
                        <p>9:00 AM</p>
                      </div>
                      <div>
                        <IoIosArrowDown className="mt-1 h-5 w-5 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1">
                  <AiOutlinePlus />
                </div>
              </div>
              <hr className="mt-6" />
              <div className="flex flex-row justify-between pt-6">
                <div className="flex flex-row">
                  <div>
                    <FormControlLabel control={<Switch />} />
                  </div>
                  <div className="mt-1">
                    <p className="font-primayfont font-bold text-base text-dark-blue">
                      Tuesdays
                    </p>
                    <p className="font-primayfont text-base text-grey pl-14 pt-3 pb-6">
                      Unavailable
                    </p>
                  </div>
                </div>
                <div className="mt-1">
                  <AiOutlinePlus />
                </div>
              </div>
              <hr />

              <div className="flex flex-row justify-between pt-6">
                <div className="flex flex-row">
                  <div>
                    <FormControlLabel control={<Switch />} />
                  </div>
                  <div className="mt-1">
                    <p className="font-primayfont font-bold text-base text-dark-blue">
                      Wednesdays
                    </p>
                    <p className="font-primayfont text-base text-grey pl-14 pt-3 pb-6">
                      Unavailable
                    </p>
                  </div>
                </div>
                <div className="mt-1">
                  <AiOutlinePlus />
                </div>
              </div>
              <hr className="mt-6" />
              <div className="flex flex-row justify-between pt-6">
                <div className="flex flex-row">
                  <div>
                    <FormControlLabel control={<Switch />} />
                  </div>
                  <div className="mt-1">
                    <p className="font-primayfont font-bold text-base text-dark-blue">
                      Thrusdays
                    </p>
                    <p className="font-primayfont text-base text-grey pl-14 pt-3 pb-6">
                      Unavailable
                    </p>
                  </div>
                </div>
                <div className="mt-1">
                  <AiOutlinePlus />
                </div>
              </div>
              <hr className="mt-6" />
              <div className="flex flex-row justify-between pt-6">
                <div className="flex flex-row">
                  <div>
                    <FormControlLabel control={<Switch />} />
                  </div>
                  <div className="mt-1">
                    <p className="font-primayfont font-bold text-base text-dark-blue">
                      Fridays
                    </p>
                    <p className="font-primayfont text-base text-grey pl-14 pt-3 pb-6">
                      Unavailable
                    </p>
                  </div>
                </div>
                <div className="mt-1">
                  <AiOutlinePlus />
                </div>
              </div>
              <hr className="mt-6" />
                <div className="flex flex-row mt-12">
              <div className="flex flex-row border-1 rounded-lg px-12 py-2">
                <div><IoIosArrowBack className="mt-1"/></div>
                <div><p>Back</p></div>
              </div>
              <div>
                <button className="rounded-lg bg-primary text-white font-bold px-11 ml-4 h-12">Continue</button>
              </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <div>
                    <FormControlLabel control={<Switch />} />
                  </div>
                  <div>
                    <p className="font-primayfont font-bold pt-1">SUNDAYS</p>
                  </div>
                  <p className="font-primayfont text-grey pl-16">Unavailable</p>
                </div>
                <div className="mt-1">
                  <AiOutlinePlus />
                </div>
              </div>
              <hr className="mt-8"/>
              <div className="flex flex-row justify-between pt-8">
                <div className="flex flex-row">
                  <div>
                    <FormControlLabel control={<Switch defaultChecked />} />
                  </div>
                  <div>
                    <p className="font-primayfont font-bold pt-1">MONDAYS</p>
                  </div>
                  <div className="bg-grey rounded-lg py-2 px-2 ml-8">
                  <p className="font-primayfont ">8:00 AM to 9:00 AM</p>
                  </div>
                  <div className="bg-grey rounded-lg py-2 px-2 ml-8">
                  <p className="font-primayfont ">8:00 AM to 9:00 AM</p>
                  </div>
                  <div className="bg-grey rounded-lg py-2 px-2 ml-8">
                  <p className="font-primayfont ">8:00 AM to 9:00 AM</p>
                  </div>
                  
                </div>
                <div className="mt-1">
                  <AiOutlinePlus />
                </div>
              </div>
              <hr className="mt-6"/>
              <div className="flex flex-row justify-between pt-8">
                <div className="flex flex-row">
                  <div>
                    <FormControlLabel control={<Switch />} />
                  </div>
                  <div>
                    <p className="font-primayfont font-bold pt-1">TUESDAYS</p>
                  </div>
                  <p className="font-primayfont text-grey pl-16">Unavailable</p>
                </div>
                <div className="mt-1">
                  <AiOutlinePlus />
                </div>
              </div>
              <hr className="mt-8"/>
              <div className="flex flex-row justify-between pt-8">
                <div className="flex flex-row">
                  <div>
                    <FormControlLabel control={<Switch />} />
                  </div>
                  <div>
                    <p className="font-primayfont font-bold pt-1">WEDNESDAYS</p>
                  </div>
                  <p className="font-primayfont text-grey pl-16">Unavailable</p>
                </div>
                <div className="mt-1">
                  <AiOutlinePlus />
                </div>
              </div>
              <hr className="mt-8"/>
              <div className="flex flex-row justify-between pt-8">
                <div className="flex flex-row">
                  <div>
                    <FormControlLabel control={<Switch />} />
                  </div>
                  <div>
                    <p className="font-primayfont font-bold pt-1">THURSDAYS</p>
                  </div>
                  <p className="font-primayfont text-grey pl-16">Unavailable</p>
                </div>
                <div className="mt-1">
                  <AiOutlinePlus />
                </div>
              </div>
              <hr className="mt-8"/>
              <div className="flex flex-row justify-between pt-8">
                <div className="flex flex-row">
                  <div>
                    <FormControlLabel control={<Switch />} />
                  </div>
                  <div>
                    <p className="font-primayfont font-bold pt-1">FRIDAYS</p>
                  </div>
                  <p className="font-primayfont text-grey pl-16">Unavailable</p>
                </div>
                <div className="mt-1">
                  <AiOutlinePlus />
                </div>
              </div>
              <hr className="mt-8"/>
                <div className="flex flex-row mt-14">
              <div className="flex flex-row border-1 rounded-lg h-12 px-14 py-2">
                <div><IoIosArrowBack className="w-4 h-4 pt-1" /></div>
                <div><p className="font-primayfont font-bold">Back</p></div>
              </div>
              <div>
                <button className="rounded-lg bg-primary text-white font-bold ml-4 px-12 h-12">Continue</button>
              </div>
              </div>
            </div>


          </div>

          <div className={showtab === 2 ? "  " : "hidden"}>
            <div className="py-6">
              <Calendar onChange={onChange} value={date} />
              {console.log(date)}
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row rounded-lg border-2 py-2 px-12">
                <MdOutlineKeyboardArrowLeft className=" mt-1" />
                <p>Back</p>
              </div>
              <div className="pl-4">
                <button
                  className="h-12 text-white font-bold rounded-lg px-11"
                  style={{
                    background:
                      "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Availability;

{
  /* <div className="flex flex-row pt-6 ">
<div className="rounded-lg flex flex-row border-2 py-2 px-12">
    <MdOutlineKeyboardArrowLeft className="w-4 h-4 mt-1" />
    <p className="font-primayfont font-bold text-base text-dark-blue">Back</p>
</div>
<div className="pl-4">
<button className="h-12 text-white font-bold rounded-lg px-11" style={{background:"linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)"}}>Continue</button>
</div>
</div> */
}
