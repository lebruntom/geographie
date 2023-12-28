import React from "react";
import Card from "../components/home/Card";
import Banner from "../components/home/Banner";
import Title from "../components/home/Title";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="px-[25px] pt-[25px] sm:px-[50px]"
      // style={{ minHeight: "calc(100vh - 120px)" }}
    >
      <motion.div
        initial={{ y: -300, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut", // Essayez différents types d'easing
          y: { duration: 0.7 },
        }}
      >
        <Banner />
      </motion.div>
      <div className="mt-16 flex flex-col justify-between lg:flex-row">
        <motion.div
          initial={{ x: -800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut", // Essayez différents types d'easing
            x: { duration: 0.5, delay: 0.4 },
          }}
          className="mr-0 xl:lg-[50px]"
        >
          <Title />
        </motion.div>

        <motion.div
          initial={{ x: 600, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut", // Essayez différents types d'easing
            x: { duration: 0.5, delay: 0.8 },
          }}
          className="flex flex-col items-center my-[50px] lg:my-0 sm:flex-row sm:items-normal"
        >
          <Card margin={{ right: "true" }} variant={true} title={"regions"} />
          <Card margin={{ left: "true" }} title={"departements"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
