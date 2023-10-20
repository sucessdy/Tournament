import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HamBurger from "./HamBurger";
import { menuSlide } from "../utils/motion";
import Users from "../pages/Users";
import users from "../data/users";


const Links = [
  { name: "tournament", link: "/" },
  { name: "Event", link: "/" },
  { name: "Community", link: "/" },
];

export default function Navbar() {
  const [isActive, setIsActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className="relative z-10 "
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        bounce: 0.25,
        stiffness: 130,
        damping: 9,
        duration: 0.3,
      }}
    >
      <motion.div className="fixed top-0 left-1/2 -translate-x-1/2 w-full flex justify-around items-center z-0 bg-gray-600 p-7">
        <div className="flex text-left ">
          <h2 className="text-[1.4rem] text-white font-bold  font-ChakraPetch flex   gap-4">
            Xport
          </h2>
        </div>
        <nav className="flex   font-raleway">
          <ul className={`${toggle ? "hidden" : " "} lg:flex hidden`}>
            <li className="flex justify-center items-center gap-9  ">
              {Links.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  onClick={() => {
                    setIsActive(link.name);
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                  className={`${
                    isActive === link.name
                      ? "text-white"
                      : "hover:text-gray-400"
                  } text-lg font-raleway font-medium capitalize z-40`}
                >
                  {link.name}
                </Link>
              ))}
            </li>
          </ul>
          {/* search bar code  */}
        </nav>

        <motion.div
          variants={menuSlide}
          className="flex-wrap  md:flex justify-center items-center lg:flex hidden"
        >
          {/* drop down code here */}

          {/* end  */}
          <a
            href="./"
            className="text-lg font-raleway font-medium capitalize gap-4 "
          >
            {" "}
            <button className=" items-center justify-center  rounded-md text-white hover:text-gray-300 focus:outline-none text-center focus:ring-offset-2 focus:ring-offset-gray-800 mr-9 ">
              {" "}
              Log In{" "}
            </button>
          </a>
          <a href="./" className="text-lg font-raleway font-medium capitalize ">
            <button className="items-center justify-center  rounded-md text-white hover:text-gray-800 focus:outline-none text-center focus:ring-offset-2 focus:ring-offset-gray-600 h-12 w-[6rem] bg-[#ff7324] ">
              {" "}
              Sign Up
            </button>
          </a>
        </motion.div>
        <div className="sm:hidden relative ">
          <button
            type="button"
            id="menu-btn"
            onClick={handleClick}
            className="w-[12rem] h-[13rem] cursor-pointer z-0 absolute"
          ></button>
        </div>
      </motion.div>

      {isOpen ? (
        <div className="md-hidden  text-black hidden w-[36rem] h-full  flex-wrap grid-cols-6  gap-3 overflow-visible lg:grid mt-28 ml-[70rem] ">
          <div className="px-2 pt-2 pb-2 left-[50%] col-span-3 grid h-full w-full place-items-center rounded-md bg-white ">
            {users.map((user, index) => (
              <Users
                key={index}
                title={user.title}
                icons={user.icons}
                description={user.discription}
                className="bg-white "
              ></Users>
            ))}
          </div>
        </div>
      ) : null}

      <HamBurger />
    
    </motion.header>
  );
}