import React from "react";
import france from "../../assets/img/france-yellow.svg";
import { Link } from "react-router-dom";
const Discover = ({ link, title, content }) => {
  return (
    <div className="bg-blue w-full h-[225px] flex py-4 px-[50px]">
      <div className="flex flex-col mr-[50px]">
        <div className="text-xl font-bold text-white">Decouvrez aussi</div>
        <div className="flex items-center h-full justify-center">
          <img src={france} width={125} alt="france" />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="font-bold text-white text-lg">{title}</div>
        <div className="text-sm text-white py-4">{content}</div>
        <div className="flex justify-end">
          <Link
            to={`/${link}`}
            className="relative bg-opacity-20 bg-blur-xl border border-white bg-white rounded-lg py-2 px-4 transition duration-200 hover:scale-105 text-white"
          >
            Jouer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discover;
