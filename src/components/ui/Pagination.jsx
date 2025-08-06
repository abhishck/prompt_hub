import React from 'react'
import { prompts } from '../../assets/prompt_catalog'
import { div } from 'motion/react-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


function Pagination({handlePrev,handleNext,totalPages,setCurrentPage , currentPage}) {
    const selector=useSelector((state)=>state.categoryPage.page)
   
    // const totalPages=Math.ceil(prompts.length/itemPerPage);
  let pages=[]
    for(let i=1;i<=totalPages;i++){
        pages.push(i)
    }
        
    
  return (
   
    <div className='flex items-center justify-center gap-2'>
        <div onClick={handlePrev} className='px-4 py-4 bg-[#f9f9fa] flex items-center rounded-lg justify-center cursor-pointer hover:scale-102 transition-all duration-200 hover:bg-gray-200 text-gray-400 hover:text-gray-700'>Prev <FontAwesomeIcon icon={faArrowLeft}/></div>
      {
        pages.map((i,index)=>{
            return (
                <div onClick={()=>setCurrentPage(i)} key={index} className={`w-6 bg-[#f9f9fa] space-x-1 rounded-lg h-6 ${currentPage === i && "bg-purple-500 text-white"} cursor-pointer md:w-8 md:h-8 flex items-center justify-center hover:bg-purple-500 hover:text-white`}>{i}</div>
            )
        })
      }
       <div onClick={handleNext} className='px-4 py-4 bg-[#f9f9fa] flex items-center rounded-lg justify-center cursor-pointer hover:scale-102 transition-all duration-200 hover:bg-gray-200 text-gray-400 hover:text-gray-700'>Next <FontAwesomeIcon icon={faArrowRight}/></div>
    </div>
  )
}

export default Pagination
