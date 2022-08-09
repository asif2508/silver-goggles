import React from "react";
import { BsCheck2Circle, BsPencil } from "react-icons/bs";
import Colors from "../utils/Colors";
import greencheck from "../images/checkcirclegreen.svg";
const PackageProgram = ({ data }) => {
  return (
    <>
     <div className="flex flex-col">

        <div className="rounded-lg border-1 pl-6">
            <p className="font-primayfont text-base text-dark-blue pt-6">{data.program}</p>
            <div className="flex flex-row justify-between">
            <p className="font-primayfont font-bold text-2xl text-dark-blue">{data.price} {data.month}</p>
            <BsPencil />
            </div>
            <div className="features flex flex-col w-full">
        {data.features.map((feature, index) => (
          <div className="my-2 flex items-start" key={index}>
             <BsCheck2Circle className="h-6 w-6 " color={Colors.back} />
            <p className="text-base font-primayfont font-normal ml-3" style={{color:Colors.back}} >
              {feature}
            </p>
          
          </div>
        ))}
          <button className="px-10 h-10 rounded-lg w-40 text-white mb-6" style={{background:Colors.back}}>Book Now</button>
      </div>
        </div>
        <div className="text-center items-center">
                    {data.isFavourite ? (
                  <BsCheck2Circle className="h-6 w-6" color={Colors.green} />
                ) : (
                  <BsCheck2Circle
                    className="h-6 w-6 "
                    color={Colors.dark_blue}
                  />
                )}
                </div>

     </div>
    </>
  );
};

export default PackageProgram;


{/* <div className=" flex flex-col">
<div className="border-1 rounded-lg">
  <p>{data.program}</p>
  <div className="flex flex-row">
    <div className="flex flex-row">
      <p>{data.price}</p>
      <p>{data.month}</p>
    </div>
    <BsPencil />
  </div>
</div>
</div> */}
