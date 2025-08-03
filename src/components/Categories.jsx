import React from "react";
import category1 from "../assets/category1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMessage } from "@fortawesome/free-solid-svg-icons";

function Categories() {
  return (
    <div className="w-full h-screen bg-gray-700 px-8 sm:px-12 md:px-24 lg:px-32 flex flex-col gap-10 pt-24 lg:pt-32 max-w-[90vw] mx-auto">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-[40px] font-bold font-[Outfit] max-w-[80vw] mx-auto leading-10 sm:text-7xl sm:leading-18 ">
          Explore Prompt Categories
        </h1>
        <p className="text-gray-500 font-medium font-[Outfit] mt-6 text-[20px] max-w-[62vw] mx-auto sm:text-[30px] sm:leading-9">
          Find the perfect prompts for your specific needs across multiple AI
          platforms and use cases
        </p>
      </div>
    </div>
  );
}

export default Categories;
