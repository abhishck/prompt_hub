import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  return (
    <div className="w-full h-[80px] flex items-center justify-between px-8 py-2 sm:px-12 md:px-24 lg:px-32 bg-white fixed top-0 right-0 left-0 z-1000">
      <motion.h1 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5}}
      className="capitalize font-[pacifico] font-semibold text-2xl sm:text-3xl text-purple-600">
        promptHub
      </motion.h1>
      <div className="lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className=" text-xl  cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {/* /mobile menu */}
      <div
        className={`mobile-menu fixed inset-0  bg-white flex flex-col gap-2 z-10 lg:hidden ${
          isOpen ? "translate-x-0 " : "translate-x-full"
        } transition-smooth duration-300`}
      >
        <div className="flex items-center justify-between px-8 sm:px-12 py-8">
          <h1 className="capitalize font-[pacifico] font-semibold text-2xl sm:text-3xl text-purple-600">
            promptHub
          </h1>
          <FontAwesomeIcon
            icon={faXmark}
            className={`text-xl md:hidden cursor-pointer `}
            onClick={() => {
              setIsOpen(false);
              setIsRotated(!isRotated);
            }}
          />
        </div>
        <hr className="border-b border-purple-400/80 mx-auto w-[90vw]" />
        <div className="flex flex-col gap-6 items-center mt-4 w-full px-8">
          <a
            className="text-2xl font-[Outfit] hover:bg-purple-200 hover:text-purple-400 hover:translate-x-3 w-full transition-smooth duration-300 px-4 py-3 rounded-lg font-medium"
            href="#allprompts"
          >
            All Prompts
          </a>
          <a
            className="text-2xl font-[Outfit] hover:bg-purple-200 hover:text-purple-400 hover:translate-x-3 w-full transition-smooth duration-300 px-4 py-3 rounded-lg font-medium"
            href="#categories"
          >
            Categories
          </a>
          <a
            className="text-2xl font-[Outfit] hover:bg-purple-200 hover:text-purple-400 hover:translate-x-3 w-full transition-smooth duration-300 px-4 py-3 rounded-lg font-medium"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="text-2xl font-[Outfit] hover:bg-purple-200 hover:text-purple-400 hover:translate-x-3 w-full transition-smooth duration-300 px-4 py-3 rounded-lg font-medium"
            href="#about"
          >
            About
          </a>
          <div className="sign-in flex lg:hidden w-full items-center gap-3 font-[Outfit]  hover:translate-x-3">
            <h2 className="text-2xl font-[Outfit] hover:bg-purple-200 hover:text-purple-400 hover:translate-x-3 transition-smooth duration-300 px-4 py-3 rounded-lg font-medium">Sign In</h2>
            <button className="px-5 py-2 text-white bg-purple-600 rounded-lg text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* laptop-menu */}
      <motion.ul
       initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,delay:0.3}}
       className="hidden lg:flex md:items-center md:gap-8 font-[Outfit] text-md lg:text-lg">
        <li>
          <a
            className="hover:text-purple-500 relative group transform transition-all duration-300"
            href="#"
          >
            All Prompts{" "}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            className="hover:text-purple-500 relative group transform transition-all duration-300"
            href="#"
          >
            Categories{" "}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative group hover:text-purple-500 transition-all duration-300"
          >
            Pricing{" "}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="relative group hover:text-purple-500 transition-all duration-300"
          >
            About{" "}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
      </motion.ul>
      <motion.div 
       initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.6}}
      className="sign-in hidden lg:flex md:items-center md:gap-3 font-[Outfit]">
        <h2 className="text-lg">Sign In</h2>
        <button className="px-5 py-2 text-white bg-purple-600 rounded-lg text-lg">
          Get Started
        </button>
      </motion.div>
    </div>
  );
}

export default Navbar;
