import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex items-center font-bold text-lg">
      <div className="bg-orange h-[30px] w-1 rounded-[25px] mr-4"></div>
      {title}
    </div>
  );
};

export default Title;
