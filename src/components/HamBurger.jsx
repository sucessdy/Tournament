import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LiaEqualsSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";

const Links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Portfolio", link: "/" },
];

export default function HamBurger() {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setActive(false);
  }, []);

  return (
    <nav
      className={` w-full flex items-center justify-between py-5 relative top-0 z-50 `}
    >
      <div className=" flex flex-1 justify-end  top-0 items-center md:hidden    ">
        <button
          type="button"
          id="menu-btn"
          onClick={handleToggle}
          className=" cursor-pointer flex  z-1 btn mt-0  "
        >
          {toggle ? (
            <RxCross1 width={60} height={60} className="icon w-[10rem]" />
          ) : (
            <LiaEqualsSolid width={60} height={60} className="icon " />
          )}
        </button>
        <div
          className={`${
            !toggle ? "hidden" : ""
          } bg-gradient-to-t from-gray-700   to-gray-700  absolute   w-full   h-[80vh] flex-wrap  flex justify-center items-center  -z-10 rounded-xl top-0`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-12">
            {Links.map((link) => (
              <li
                key={link.link}
                className="flex   flex-col  w-full  text-white  "
              >
                <Link
                  to={link.link}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.name);
                    window.scrollTo(0, 0);
                  }}
                  className={`${
                    active === link.name ? "text-white" : "hover:text-slate-200"
                  } cursor-pointer font-manrope  text-end text-2xl   text-white flex justify-center  text-[2rem] `}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
     
    </nav>
  );
}
