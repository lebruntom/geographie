import React from "react";

const Flag = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-blueFlag h-[45px] w-[20px] rounded-l-[5px]" />
      <div className="bg-white h-[45px] w-[20px] mx-1"></div>
      <div className="bg-redFlag h-[45px] w-[20px] rounded-r-[5px]" />
    </div>
  );
};

export default Flag;
