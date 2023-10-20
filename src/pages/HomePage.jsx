import React from "react";


// import {styles} from "../styles";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <img
        src=""
        className="w-full h-full top-0 bg-cover object-cover  left-0 bg-[#273248]  "
      />
      <div
        className={` absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start  gap-8`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="  bg-[#272a33]  absolute top-[-5rem]  right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:[68.75rem]" />
          <div className="w-[4px] bg-[#454d60] sm:h-80   absolute top-[-1rem] left-[35rem] h-[31.25rem] z-1 rounded-full blur-[10rem] sm:w-[68.75rem]  md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] " />
        </div>

        <div>
          <p> start /</p>
          <h1
            className={` font-Raleway text-5xl font-semibold text-white dark:text-gray-200 `}
          >
            {" "}
            Hi, My name is{" "}
            <span className=" text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br font-Raleway from-orange-400 to-orange-600   ">
              Mukta Kumari{" "}
            </span>{" "}
          </h1>
          <p className={` `}>
            {" "}
            I develop web applications, designing interfaces, and possess
            familiarity with WordPress.
          </p>
        </div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
          <a href="#about">
            <div className="w-[32px] h-[62px] rounded-3xl border-4 border-secondary flex justify-center  items-start p-2 ">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
