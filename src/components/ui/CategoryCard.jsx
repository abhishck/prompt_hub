    import React from 'react'
   import { motion } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faMessage } from '@fortawesome/free-solid-svg-icons'
function CategoryCard({item}) {
  return (
    <motion.div
      initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:1}}
      viewport={{ once: true }} className='flex flex-col gap-8  bg-white rounded-lg shadow-xl hover:shadow-2xl group hover:scale-105 transition-smooth duration-500 max-w-[330px] sm:max-w-[40vw]'>
      <div className='overflow-hidden relative h-48 rounded-t-lg '>
        <img src={item.img} alt="" className='hover:scale-110 cursor-grab transition-all object-cover object-top h-full w-full duration-500'/>
        <div className='w-12 h-12 rounded-full bg-purple-300 group absolute top-5 left-5 flex items-center justify-center cursor-pointer'>
          <FontAwesomeIcon icon={faMessage} className='text-xl text-white cursor-pointer transform transition-transform duration-200 group-hover:rotate-12'/>
        </div>
      </div>
      <div className='p-6  flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-medium font-[Outfit] hover:text-purple-500 hover:scale-103 transition-all duration-500'>{item.category}</h1>
          <div className='px-5 py-3 rounded-xl bg-purple-400 flex items-center justify-center font-medium font-[Outfit]'>{item.count}+</div>
        </div>
        <p className='text-2xl font-light font-[Outfit] hover:text-purple-500 hover:scale-103 transition-all duration-500'>{item.description}</p>
        <a className='flex items-center text-xl font-light text-purple-500 group hover:scale-102 transition-all duration-500 font-[Outfit]' href="">Explore More <FontAwesomeIcon icon={faArrowRight} className='ml-1 group-hover:translate-x-1'/> </a>
      </div>
    </motion.div>
  )
}

export default CategoryCard
