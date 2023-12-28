import React from "react";
import { HiBeaker } from "react-icons/hi";
import departements from "../../assets/img/france-departments.png";
import regions from "../../assets/img/france-regions.png";
import { Link } from "react-router-dom";

const Card = ({ margin, variant, title }) => {
  const marginTop = `${
    title.length * 9 + (title.length * title.length) / 3 + 10
  }px`;
  return (
    <div>
      <div
        className={`${margin?.left && "ml-0 sm:ml-4"} ${
          margin?.right && "mr-0 sm:mr-4"
        } w-[250px] h-[350px] bg-black  rounded-[25px] ${
          variant ? "bg-yellow" : "bg-orange relative"
        } shadow-main my-5 sm:my-0`}
      >
        <div
          style={{ marginTop }}
          className={`rotate-[-90deg] absolute uppercase text-xl w-4 ml-6 text-brown`}
        >
          {title}
        </div>
        <div className="ml-[75px] flex flex-col items-end justify-between h-full py-4 pr-4">
          <div>
            <img
              src={title === "regions" ? regions : departements}
              className="w-[100px]"
              loading="lazy"
            />
          </div>
          <Link
            to={`/${title}`}
            className="relative bg-opacity-20 bg-blur-xl border border-white bg-white rounded-lg py-2 px-4 transition duration-200 hover:scale-105"
          >
            Jouer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
