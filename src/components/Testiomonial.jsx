import React from 'react'
import TestCard from './TestCard';

function Testiomonial() {
    let number=[];
    for(let i=0 ;i<8;i++){
        number.push(i);
    }
  return (
   <div className="w-full  bg-white px-8 sm:px-12 md:px-24 lg:px-32 flex flex-col gap-10 pt-24 lg:pt-32">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-[40px] font-bold font-[Outfit] max-w-[80vw] mx-auto leading-10 sm:text-7xl sm:leading-18 ">
        Trusted by 50,000+ Creators

        </h1>
        <p className="text-gray-500 font-medium font-[Outfit] mt-6 text-[20px] max-w-[62vw] mx-auto sm:text-[30px] sm:leading-9">
        See how professionals are transforming their work with our premium prompts
        </p>
        </div>
        <div className=' flex flex-col gap-8 lg:flex-row lg:flex-wrap items-center max-w-[80vw] mx-auto py-10'>
            {
                number.map((_,index)=>{
                    return(
                        <TestCard key={index}/>
                    )
                })
            }
        </div>
        <div className='flex flex-col items-center md:flex-row justify-center w-full py-15'> 
            <div className='w-[70vw] bg-gray-300 flex flex-col gap-10 items-center  lg:flex-row p-10 lg:justify-between lg:px-48 rounded-lg group shadow-xl hover:shadow-2xl hover:scale-102 transition-smooth duration-300'>
               <div className='text-center hover:scale-110 transition-smooth duration-200'>
                <h1 className='text-5xl font-[Outfit] font-semibold text-purple-500'>50k+</h1>
                <p className='font-[Outfit] font-medium text-gray-500 text-2xl'>Happy Customer</p>
               </div>
               <div className='text-center hover:scale-110 transition-smooth duration-200'>
                <h1 className='text-5xl font-[Outfit] font-semibold text-purple-500'>50k+</h1>
                <p className='font-[Outfit] font-medium text-gray-500 text-2xl'>Happy Customer</p>
               </div>
               <div className='text-center hover:scale-110 transition-smooth duration-200'>
                <h1 className='text-5xl font-[Outfit] font-semibold text-purple-500'>50k+</h1>
                <p className='font-[Outfit] font-medium text-gray-500 text-2xl'>Happy Customer</p>
               </div>
               <div className='text-center hover:scale-110 transition-smooth duration-200'>
                <h1 className='text-5xl font-[Outfit] font-semibold text-purple-500'>50k+</h1>
                <p className='font-[Outfit] font-medium text-gray-500 text-2xl'>Happy Customer</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Testiomonial
