import RandomRegion from "../RandomRegion";
import logo from "../../assets/img/logo-blue.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AuthWrapper = ({ children }) => {
  return (
    <div className="min-h-screen flex w-full">
      <div className="w-full md:w-1/2 lg:w-[500px] px-[25px] sm:px-[50px] flex flex-col justify-between my-[50px]">
        <Link to="/" className="w-fit">
          <img src={logo} alt="logo" />
        </Link>
        {children}
      </div>
      <div className="flex-grow bg-blue justify-around flex-col hidden md:flex">
        <div className="font-bold text-xl lg:text-2xl text-background text-center">
          Révisez vos régions
        </div>
        <div className="flex justify-center items-center">
          <RandomRegion />
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
