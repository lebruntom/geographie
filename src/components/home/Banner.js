import React, { useContext } from "react";
import Flag from "./Flag";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/AuthContext";
import logo from "../../assets/img/logo.svg";
import login from "../../assets/img/login.svg";
import user from "../../assets/img/user.svg";
import france from "../../assets/img/france-background.svg";

const Banner = () => {
  const { currentUser } = useContext(AuthContext);

  // Mettre les logos en black
  return (
    <div>
      <div className="bg-blue w-[100%] h-[35vh] rounded-[15px] flex flex-col justify-between">
        <div className="flex justify-between p-4">
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo TL"
              className="w-[25px] hover:scale-105 transition duration-200"
            />
          </Link>
          {currentUser ? (
            <Link to={"/compte"}>
              <img
                src={user}
                className="w-[25px] transition duration-200 hover:scale-105"
                alt="icon user"
              />
            </Link>
          ) : (
            <Link to={"/connexion"}>
              <img
                src={login}
                className="w-[40px] transition duration-200 hover:scale-105"
                alt="icon login"
              />
            </Link>
          )}
        </div>
        <div className="flex justify-around items-center">
          <div className="w-1/3 text-2xl text-yellow flex justify-center invisible lg:visible">
            REGIONS
          </div>
          <div className="w-1/3 flex justify-center">
            <img src={france} alt="france" width={75} />
          </div>
          <div className="w-1/3 text-2xl text-yellow flex justify-center invisible lg:visible">
            DEPARTEMENTS
          </div>
        </div>
        <div className="relative b-0 flex invisible sm:visible">
          <div className="bg-blue h-[50px] w-1/2 mr-[45.5px] rounded-[50px] relative z-10 "></div>
          <div className="bg-blue h-[50px] w-1/2 ml-[45.5px] rounded-[25px] z-10"></div>
        </div>
      </div>
      <div
        className="w-[150px] h-[20px] bg-background absolute left-1/2 invisible sm:visible"
        style={{ transform: "translate(-70px,-20px)" }}
      />
      <div
        className="flex items-center justify-center w-[100px] h-[100px] rounded-[50px] bg-background absolute left-1/2"
        style={{ transform: "translate(-50.5px,-50px)" }}
      >
        <Flag />
      </div>
    </div>
  );
};

export default Banner;
