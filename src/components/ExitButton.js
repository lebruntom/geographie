import React from "react";
import { Link } from "react-router-dom";

const ExitButton = ({ setOpenModal }) => {
  return (
    <div
      onClick={() => setOpenModal(true)}
      className="flex justify-center items-center absolute bottom-0 left-0 transform z-[1000] bg-redFlag hover:bg-redHover px-4 py-2 m-5 shadow-main rounded-lg cursor-pointer"
    >
      <div className="font-bold text-white">Quitter</div>
    </div>
  );
};

export default ExitButton;
