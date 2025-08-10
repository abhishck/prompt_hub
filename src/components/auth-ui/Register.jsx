import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";


function Register() {
  const [state,setState]=useState("register");
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-purple-50 overflow-y-hidden">
      <motion.div
        initial={{translateY:300, opacity:0}}
      whileInView={{translateY:0,opacity:1}}
      transition={{duration:1,}}
      viewport={{ once: true }}
      className="sm:w-[50vw] lg:w-[25vw] px-8 sm:h-fit bg-white sm:rounded-xl flex flex-col gap-4 w-full h-[100vh] py-24 items-center  shadow-lg shadow-purple-500 ">
        <h1 className="text-3xl font-[Mozilla_Headline] text-purple-500 font-semibold">
         {state === "register"? "Create Account": "Login"}
        </h1>
        <p className="text-xl font-[pacifico] text-purple-400 font-medium">{state==="register"? "Create an account":"Login to your Account"}</p>

        <form action="" className="flex flex-col gap-4 w-full ">
         {state === "register" && (
           <div className="text-area  flex flex-col gap-2  justify-items-start">
            <label
              htmlFor="username"
              className="text-lg font-medium font-[Outfit]"
            >
              Username :{" "}
            </label>
            <input
              type="text"
              placeholder={`Enter username...`}
              className=" w-full  bg-gray-300 px-5 py-2 outline-none rounded-3xl border-2 border-gray-500 hover:border-purple-500 "
            />
          </div>
         )}
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
              htmlFor="password"
              className="text-lg font-medium font-[Outfit]"
            >
              Password :{" "}
            </label>
            <input
              type="text"
              placeholder="Enter password..."
              className=" w-full  bg-gray-300 px-5 py-2 outline-none rounded-3xl border-2 border-gray-500 hover:border-purple-500 "
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2 cursor-pointer font-[pacifico] mt-2 rounded-lg text-white bg-purple-500  "
          >
            Register
          </button>
        </form>
        {state=== "register" ? ( <p className="font-light font-[Outfit] text-md">Already Have an Account? <span className="text-blue-600 font-medium underline cursor-pointer hover:text-blue-800" onClick={()=>setState("login")}>Login</span></p>):(<p className="font-light font-[Outfit] text-md">Don't have an Account? <span className="text-blue-600 font-medium underline cursor-pointer hover:text-blue-800" onClick={()=>setState("register")}>Create new</span></p>)}
       
      </motion.div>
    </div>
  );
}

export default Register;
