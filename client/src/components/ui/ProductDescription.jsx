import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";

function ProductDescription() {
  // console.log(item)
  const location = useLocation();
  console.log(location);
  const [item, setItem] = useState({
    name: location.state.name,
    description: location.state.description,
    rating: location.state.rating,
    price: location.state.price,
    img: location.state.online_img,
    prompt: location.state.prompt,
  });
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-500 to-blue-500 flex items-center justify-center rounded-lg ">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="lg:w-[50vw]   px-8 sm:px-16 lg:h-fit bg-white sm:rounded-xl flex flex-col gap-4 w-full h-[100vh] py-24 items-center  shadow-lg shadow-purple-500"
      >
        <div className="image w-[80%] lg:w-[60%] h-60 lg:h-74 rounded-lg overflow-hidden group">
          <img
            src={item.img}
            alt=""
            className="h-full w-full object-cover object-center group-hover:scale-105 cursor-grab transition-all duration-300"
          />
        </div>
       <div className="flex flex-col gap-8">
         <div className=" w-full  p-6 flex flex-col gap-4 ">
          <h1 className="text-xl font-medium font-[Outfit] text-gray-700 group-hover:text-purple-500 capitalize">
            {item.name}
          </h1>
          <p className="text-md font-light font-[Outfit] text-gray-700 group-hover:text-purple-500 capitalize">
            {item.description}
          </p>
        </div>
        <div className="flex justify-between px-6 items-center w-full mt-4">
          <p className="text-xl font-medium font-[Outfit] ">
            ⭐⭐⭐⭐⭐ {item.rating}
          </p>
          <p className="text-xl font-medium text-purple-500 font-[Outfit] ">
            {item.price}
          </p>
        </div>
        <div className=" w-full px-6 text-center">
          <span className="text-md md:text-2xl font-medium font-[Outfit] ">
            Prompt:
          </span>
          <h1 className="text-md md:text-2xl font-medium font-[pacifico] relative blur-[3px] mt-6">
            {" "}
            {item.prompt}{" "}
            <div className="absolute inset-0 bg-transparent w-full h-full back "></div>{" "}
          </h1>
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          {/* <button className="px-5 py-3 w-full text-white font-medium font-[Outfit] bg-purple-500 rounded-lg capitalize">view detail</button> */}
          <button className="px-5 py-3 w-fit text-purple-500 font-medium font-[Outfit] border-2 border-purple-500 hover:text-white hover:bg-purple-500  rounded-lg capitalize">
            Add to cart
          </button>
        </div>
       </div>
      </motion.div>
    </div>
  );
}

export default ProductDescription;
