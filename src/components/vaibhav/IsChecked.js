import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import CircularDeterminate from "./CircularDeterminate";
import BasicTimePicker from "./BasicTimePicker";

const IsChecked = ({ data }) => {
  const [showswitch, setShowswitch] = useState(true);
  const [value, setValue] = useState(null);
  const [print, setPrint] = useState(false);

  function getTime(val) {
    setValue(val.target.value);
  }
  return (
    <>
      <div>
        <div className="flex flex-row justify-between py-8">
          <div className="flex flex-row">
            <FormControlLabel
              onClick={() => setShowswitch(!showswitch)}
              control={<Switch />}
            />

            <p className="font-primayfont font-bold text-base text-dark-blue">
              {data.day}
            </p>
          </div>
          {showswitch ? (
            <p className="font-primayfont text-base text-grey ">{data.ready}</p>
          ) : (
            <div className="">
              <div className="border-2 flex flex-row rounded-lg pl-2 w-32">
                {/* <input
                  onChange={getTime}
                  type="select"
                  className="outline-none border-none w-24"
                /> */}

                <BasicTimePicker />

                <IoIosArrowDown />
              </div>
              <p>To</p>
              <div className="border-2 flex flex-row rounded-lg pl-2 w-32">
                <input
                  onChange={getTime}
                  type="select"
                  className="outline-none border-none w-24"
                />

                <IoIosArrowDown />
              </div>
            </div>
          )}

          {print ? <p>{value}</p> : null}
          <div>
            <AiOutlinePlus onClick={() => setPrint(true)} />
          </div>
        </div>

        <hr />
      </div>
    </>
  );
};

export default IsChecked;
