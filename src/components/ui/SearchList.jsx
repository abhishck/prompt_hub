import React from 'react'
import { useNavigate } from 'react-router-dom';



function SearchList({item}) {
    const navigate=useNavigate();
  return (
    <div className=' w-full h-35 lg:h-30 flex items-center justify-center gap-3 group bg-gray-200 rounded-lg hover:scale-102 transition-all duration-200' onClick={()=>console.log("clicked")}>
      <div className='w-full px-4 py-2 flex flex-col gap-2'  onClick={()=>navigate("/productDesc",{state:item})}> 
        
        <h1 className='text-xl font-medium font-[Outfit] text-gray-700 group-hover:text-purple-500 capitalize'>{item.name}</h1>
        < p className='text-md font-light font-[Outfit] text-gray-700 group-hover:text-purple-500 capitalize'>{item.description}</p>
      </div>
    </div>
  )
}

export default SearchList
