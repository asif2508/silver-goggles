import { InfinitySpin } from "react-loader-spinner";
import React from "react";
import Colors from "../../utils/Colors";

const Loader = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full h-full">
      <InfinitySpin width="200" color={Colors["primary-dark"]} />
    </div>
  );
};

export default Loader;
