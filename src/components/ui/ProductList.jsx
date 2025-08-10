import React from "react";
import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";

function ProductList({item}) {
  const navigate=useNavigate()
  return (
    
      <motion.div
        initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:0.5,}}
      viewport={{ once: true }} className="h-fit w-[300px] group hover:-translate-y-2 overflow-hidden sm:w-[400px]  transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group rounded-lg">
        <img
          src={item.online_img}
          alt="img"
          className="h-[200px] w-full rounded-t-xl object-cover object-center cursor-grab group-hover:scale-105 transition-all duration-200"
        />
        <div className="p-6 flex flex-col gap-4">
          <h1 className="text-3xl font-bold max-w-[350px] group-hover:text-purple-500">{item.name}</h1>
          <p className="text-xl hidden sm:block font-medium font-[Outfit] ">
           {item.description}
          </p>
         <div className="flex justify-between items-center">
            <p className="text-xl font-medium font-[Outfit] ">⭐⭐⭐⭐⭐ {item.rating}</p>
            <p className="text-xl font-medium text-purple-500 font-[Outfit] ">{item.price}</p>
         </div>
         <div className="w-full flex flex-col gap-2">
            <button className="px-5 py-3 w-full text-white font-medium font-[Outfit] bg-purple-500 rounded-lg capitalize cursor-pointer" onClick={()=>navigate("/productDesc",{state:item})}>view detail</button>
            <button className="px-5 py-3 w-full text-purple-500 font-medium font-[Outfit] border-2 border-purple-500  rounded-lg capitalize cursor-pointer">Add to cart</button>
         </div>
        </div>
      </motion.div>
  
  );
}

export default ProductList;
