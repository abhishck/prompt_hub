import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";


function ContactForm() {
  
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-purple-50 overflow-y-hidden">
      <motion.div
        initial={{translateY:300, opacity:0}}
      whileInView={{translateY:0,opacity:1}}
      transition={{duration:1,}}
      viewport={{ once: true }}
      className="sm:w-[50vw] lg:w-[25vw] px-8 sm:h-fit bg-white sm:rounded-xl flex flex-col gap-4 w-full h-[100vh] py-24 items-center  shadow-lg shadow-purple-500 ">
        <h1 className="text-3xl font-[Mozilla_Headline] text-purple-500 font-semibold">
         Contact Form 
        </h1>
        <p className="text-xl font-[pacifico] text-purple-400 font-medium">Contact Us</p>

        <form action="" className="flex flex-col gap-4 w-full ">
        
          <div className="text-area flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-lg font-medium font-[Outfit] "
            >
              Email :{" "}
            </label>
            <input
              type="text"
              placeholder="Enter email..."
              className=" w-full  bg-gray-300 px-5 py-2 outline-none rounded-3xl border-2 border-gray-500 hover:border-purple-500 "
            />
          </div>
          
          <div className="text-area  flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-lg font-medium font-[Outfit]"
            >
              Message :{" "}
            </label>
            <textarea
              type="text-area"
              placeholder="Write Message..."
              className=" w-full  bg-gray-300 px-5 py-2 outline-none rounded-3xl border-2 border-gray-500 hover:border-purple-500 "
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-5 py-2 cursor-pointer font-[pacifico] mt-2 rounded-lg text-white bg-purple-500  "
          >
            Send
          </button>
        </form>
        
       
      </motion.div>
    </div>
  );
}

export default ContactForm;
