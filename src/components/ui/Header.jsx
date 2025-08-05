import React from "react";
import header from "../../assets/header.jpg";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react"
function Header() {
  return (
    <div
      className=" w-full bg-cover bg-center lg:mt-[80px]"
      style={{ backgroundImage: `url(${header})` }}
    >
      <div 
      
      className=" masker w-full h-full bg-gradient-to-r from-white/90 to-white/0 px-8 sm:px-12 md:px-24 lg:px-32 md:flex md:flex-row md:items-start  ">
        <motion.div 
       initial={{opacity: 0, scale:0}}
       whileInView={{opacity:1 , scale:1 }}
       transition={{ duration: 1 }}
       viewport={{ once: true }}
        className="flex flex-col gap-4 pt-[150px] md:pt-[60px] my-auto ">
          {["Premium AI", "Prompts for", "Creative ","Success"].map(
            (item, index) => {
              return (
                <h1
                  className={`text-[57px] font-semibold font-[Outfit] max-w-[80vw] leading-10 sm:text-8xl sm:leading-18 ${
                    index === 2 || index===3 && "text-purple-500"
                  }`}
                  key={index}
                >
                  {item}
                </h1>
              );
            }
          )}
          <p className="text-gray-500 font-medium font-[Outfit] mt-6 text-[20px] max-w-[75vw] sm:max-w-[40vw] sm:text-[30px] sm:leading-9">
            Discover thousands of high-quality, tested prompts for ChatGPT,
            Claude, Midjourney and more. Boost your productivity with our
            curated collection.
          </p>
          <div className="flex flex-col gap-1 mt-4 md:flex-row md:gap-3 md:mt-3">
            <button className="px-8 py-2  sm:py-4 text-white bg-purple-600 rounded-lg font-[pacifico] capitalize font-medium text-lg mt-4 ">
              browse prompt
            </button>
            <button className="px-8 py-2 sm:py-4 text-purple-600 border-[2px] border-purple-600 rounded-lg font-[pacifico] capitalize font-medium text-lg mt-3 ">
              View Pricing
            </button>
          </div>
          <div className="w-full flex items-center justify-between md:mt-8 py-2 sm:py-6">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
            <p className="max-w-[25vw] sm:text-xl">10,000+ Premium Prompts</p>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
            <p className="max-w-[25vw] sm:text-xl">Instant Download</p>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
            <p className="max-w-[25vw] sm:text-xl">Money Back Guarantee</p>
          </div>
        </div>
        </motion.div>
        
      </div>
    </div>
  );
}

export default Header;
