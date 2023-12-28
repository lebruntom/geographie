import React from "react";
import france from "../../assets/img/france.svg";
import { Link } from "react-router-dom";
const Card = ({ title, content, linkTo }) => {
  return (
    <div className="relative w-full min-h-[150px] bg-orange rounded-[10px] overflow-hidden p-4 pr-[150px] flex flex-col justify-between">
      <div className="text-lg text-blue font-bold">{title}</div>
      <div className="text-white text-sm text-justify py-2">{content}</div>
      <div className="flex justify-end">
        <Link
          to={linkTo}
          className="relative bg-opacity-20 bg-blur-xl border border-white bg-white rounded-lg py-2 px-4 transition duration-200 hover:scale-105"
        >
          Jouer
        </Link>
      </div>
      <img
        src={france}
        className="absolute right-[-95px] top-[-0px] w-[200px]"
        alt="france"
      />
    </div>
  );
};

export default Card;

{
  /* <div className="z-10 flex flex-col justify-between h-full">
        <div className="text-brown font-bold text-lg">{title}</div>
        <div className="text-black">{content}</div>
        <div className="flex justify-end">
          <Button>Jouer</Button>
        </div>
      </div> */
}
