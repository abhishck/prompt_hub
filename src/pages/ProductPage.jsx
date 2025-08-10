import React, { useEffect, useState } from 'react'
import Navbar from "../components/ui/Navbar.jsx";
import {prompts} from "../assets/prompt_catalog.js"
import { useDispatch, useSelector } from 'react-redux';
import { insertPageCategory } from '../Redux/Slices/CategoryPageSlice.jsx';
import ProductList from "../components/ui/ProductList.jsx"
import Pagination from '../components/ui/Pagination.jsx';
import { setSearch } from '../Redux/Slices/SearchSlice.jsx';
import { motion } from 'motion/react';

function ProductPage() {
  const [pageCategory,setPageCategory]=useState([]);
  const selector =useSelector((state)=>state.categoryPage.page);
  const searchSelector=useSelector((state)=>state.search.search)
  const dispatch=useDispatch();
 
  const uniqueCategory=()=>{
    const unique=[...new Set(prompts.map(item=>item.category))]
    setPageCategory(unique)
    
  }
   const [categoryPagination,setCategoryPagination]=useState([])
     
  // --------pagination---------

  const [currentPage,setCurrentPage]=useState(1);
  const [itemPerPage,setItemPerPage]=useState(8)

  const lastPostIndex=currentPage * itemPerPage;
  const firstPostIndex=lastPostIndex-itemPerPage;
  const totalPages=Math.ceil(categoryPagination.length/itemPerPage);

  const handlePrev=()=>{
    if(currentPage > 1){
      setCurrentPage(currentPage-1)
    }
  }

  const handleNext=()=>{
    if(currentPage <totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  

  

  useEffect(()=>{
    uniqueCategory()
  },[])

  useEffect(() => {
  const categoryPrompt = prompts.filter((item) => {
     const nameMatch = item.name.toLowerCase().includes(searchSelector.toLowerCase());
if (selector === "All") {
      return nameMatch;
    } else {
     return item.category === selector && nameMatch;
    }    
  });
  setCategoryPagination(categoryPrompt);
  setCurrentPage(1); // Optional: reset pagination to page 1 on category change
}, [selector,searchSelector]);


  

  console.log(pageCategory)
 console.log(selector)
  return (
     <>
      <Navbar/>
    <div className='w-full py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 mt-[80px] overflow-y-hidden '>
      <motion.div
        initial={{translateY:300}}
      whileInView={{translateY:0}}
      transition={{duration:1}}
      viewport={{ once: true }}
      className='flex flex-col space-y-1 items-center justify-center p-10 text-center w-full h-full '>
      <h1 className='m-0 p-0 text-[40px] sm:text-[60px] sm:max-w-[80vw] font-semibold font-[Outfit] text-white max-w-[90vw] lg:max-w-full'>All Premium Prompts</h1>
      <p className='text-xl max-w-[90vw] text-gray-200 sm:text-2xl sm:max-w-[70vw] font-[Outfit]'>Discover our complete collection of high-quality AI prompts for every use case</p>
      <input type="text" onChange={(e)=>dispatch(setSearch(e.target.value))} placeholder='Search prompt here...' className='px-12 py-3 rounded-xl outline-none text-center bg-white font-[Pacifico] text-gray-600 mt-6 border-8 border-gray-400' />
     </motion.div>
    </div>
   
     <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between px-8 py-8 sm:py-12 sm:px-12 md:px-24 lg:px-32'>
       <motion.div 
         initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:1}}
      viewport={{ once: true }}
       className=' flex gap-3 lg:gap-4 items-center justify-center flex-wrap '>
        <button onClick={()=>dispatch(insertPageCategory("All"))} className={`px-5 sm:px-8 py-2 sm:py-3 rounded-lg font-[Outfit] cursor-pointer font-medium bg-gray-400 text-white text-xl transition-all duration-200 hover:scale-105 ${selector === "All" && "text-white bg-purple-500"}`}>All</button>
        {
          pageCategory.map((item,index)=>{
            return (
               <button onClick={()=>dispatch(insertPageCategory(item))} key={index} className={`px-5 sm:px-8 py-2 sm:py-3 cursor-pointer rounded-lg font-[Outfit] font-medium bg-gray-400 text-white text-xl transition-all duration-400 hover:scale-105 ${selector === item && "text-white bg-purple-500"}`}>{item}</button>
            )
          })
        }
      </motion.div>
      <div className='flex gap-4 items-center justify-center w-full lg:w-[33%]'>
        <h1>Sort by:</h1>
        <select className='px-10 w-4/5 py-3 rounded-lg bg-gray-300  font-medium font-[Outfit] text-lg sm:text-xl' name="sort" id="">
          <option  value="MostPopular">Most Popular</option>
          <option value="Highest Rated">Highest Rated</option>
          <option value="Newest">Newest</option>
          <option value="Price:Low to High">Price:Low to High</option>
          <option value="Price:High to Low">Price:High to Low</option>
        </select>
      </div>
     </div>
     <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 place-items-center lg:place-items-start px-8 py-8 sm:py-12 sm:px-12 md:px-24 lg:px-32'>
      {categoryPagination.slice(firstPostIndex,lastPostIndex).map((item,index)=>{
        return (
          <ProductList key={index} item={item}/>
        )
      })}
     </div>
     <div className='w-full flex items-center justify-center py-12'>
      <Pagination  handlePrev={handlePrev} handleNext={handleNext} totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
     </div>
    </>
  )
}

export default ProductPage
