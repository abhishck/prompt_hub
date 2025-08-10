import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMessage } from "@fortawesome/free-solid-svg-icons";
import CategoryCard from "./CategoryCard";
import { motion } from "motion/react";

function Categories() {
  const promptCategories = [
  {
    category: "ChatGPT Prompts",
    description: "Conversational tasks with AI assistance",
    count: 42,
    img:"https://www.glorywebs.com/images/blogs/chatgpt-prompts-featured.jpg"
  },
  {
    category: "Business Prompts",
    description: "Ideas for improving business strategy",
    count: 35,
    img:"https://autogpt.net/wp-content/uploads/2023/05/chatgpt-prompts-for-business.jpg"
  },
  {
    category: "SEO Prompts",
    description: "Optimize content for search engines",
    count: 28,
    img:"https://promptdrive.ai/wp-content/uploads/2024/03/AI-Prompts-for-SEO.png"
  },
  {
    category: "Writing Prompts",
    description: "Creative inspiration for writing stories",
    count: 50,
    img:"https://i0.wp.com/alongwewrite.com/wp-content/uploads/2022/07/Untitled-design-23.png?resize=1140%2C628&ssl=1"
  },
  {
    category: "Art Prompts",
    description: "Visual ideas for artistic creations",
    count: 20,
    img: "https://www.adobe.com/in/products/firefly/discover/media_1d84ae9ecbfbdd31e3f67e38baf624d08b4493341.jpeg?width=750&format=jpeg&optimize=medium"
  }
];

  return (
    <div className="w-full  px-8 sm:px-12 md:px-24 lg:px-32 flex flex-col gap-10 pt-24 lg:pt-32 ">
      <motion.div
       initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:1}}
      viewport={{ once: true }}
      className="flex flex-col gap-4 text-center">
        <h1 className="text-[40px] font-bold font-[Outfit] max-w-[80vw] mx-auto leading-10 sm:text-7xl sm:leading-18 ">
          Explore Prompt Categories
        </h1>
        <p className="text-gray-500 font-medium font-[Outfit] mt-6 text-[20px] max-w-[62vw] mx-auto sm:text-[30px] sm:leading-9">
          Find the perfect prompts for your specific needs across multiple AI
          platforms and use cases
        </p>
      </motion.div>
      <motion.div 
     
      className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {promptCategories.map((item,index)=>{
          return (
            <CategoryCard item={item} key={index}/>
          )
        })}
      </motion.div>
    </div>
  );
}

export default Categories;
