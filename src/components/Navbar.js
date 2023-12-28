import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import logo from "../assets/img/logo.svg";
import login from "../assets/img/login.svg";
import user from "../assets/img/user.svg";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="bg-blue h-[60px] my-[25px] mx-[50px] rounded-[15px] flex justify-between items-center px-4">
      <Link to={"/"}>
        <img
          src={logo}
          alt="logo TL"
          className="w-[25px] hover:scale-105 transition duration-200"
        />
      </Link>
      <div className="flex items-center">
        <Link to="/regions" className="text-white mx-5">
          Regions
        </Link>
        <Link to="/departements" className="text-white mx-5">
          Departements
        </Link>
        {currentUser ? (
          <Link to={"/compte"} className="ml-5">
            <img
              src={user}
              className="w-[20px] transition duration-200 hover:scale-105"
              alt="icon user"
            />
          </Link>
        ) : (
          <Link to={"/connexion"} className="ml-5">
            <img
              src={login}
              className="w-[40px] transition duration-200 hover:scale-105"
              alt="icon login"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
