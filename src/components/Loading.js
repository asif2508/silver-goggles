import React from "react";
import ReactLoading from "react-loading";

function Loading() {
  return (
    <div className="h-full w-full justify-center items-center flex">
      <ReactLoading type="spin" color={"#0A083B"} height={"5%"} width={"5%"} />
    </div>
  );
}

export default Loading;
