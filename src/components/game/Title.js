import React from "react";
import france from "../../assets/img/france-regions.svg";
const Title = ({ title }) => {
  return (
    <div className="flex items-center">
      <img src={france} width={100} />
      <div className="text-xl text-black">{title}</div>
    </div>
  );
};

export default Title;
