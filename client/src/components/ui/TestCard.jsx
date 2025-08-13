import React from 'react'
import { motion } from 'motion/react'

function TestCard() {
  return (
    <motion.div
      initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:1}}
      viewport={{ once: true }}
     className='flex flex-col gap-6 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-smooth duration-300'>
      <p>⭐⭐⭐⭐⭐</p>
      <p className='text-xl text-center font-medium font-[Outfit] lg:max-w-[15vw] ' >"PromptHub has completely transformed my content creation process. The quality of prompts is exceptional, and I've seen a 300% increase in engagement since using them."</p>
      <div className='flex items-center gap-4'>
        <div className="overflow-hidden">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className='w-15 h-15 rounded-full '/>
        </div>
        <div className='flex flex-col '>
            <h2 className='text-xl font-medium font-[Outfit]'>Sarah Mitchell</h2>
            <p className='text-xl font-light font-[Outfit]'>Content Creator</p>
            <p className='text-xl font-light font-[Outfit]'>Digital Marketing Pro</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestCard
