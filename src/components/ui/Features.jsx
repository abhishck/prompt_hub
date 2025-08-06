import React, { useEffect,useState } from 'react'
import { prompts } from '../../assets/prompt_catalog'
import ProductList from './ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../../Redux/Slices/CategorSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Features() {
    const [categories,setCategories]=useState([])
    
    const selector=useSelector((state)=>state.category.category)
    const dispatch = useDispatch()

    const uniqueCategories=()=>{
       const unique=[...new Set(prompts.map(item=>item.category))]
       setCategories(unique)
    }

    useEffect(()=>{
        uniqueCategories()
    },[])
    
    console.log(categories)
  return (
   <div className="w-full  bg-white px-8 sm:px-12 md:px-24 lg:px-32 flex flex-col gap-10 pt-24 lg:pt-32">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-[40px] font-bold font-[Outfit] max-w-[80vw] mx-auto leading-10 sm:text-7xl sm:leading-18 ">
         Featured Premium Prompts

        </h1>
        <p className="text-gray-500 font-medium font-[Outfit] mt-6 text-[20px] max-w-[62vw] mx-auto sm:text-[30px] sm:leading-9">
         Hand-picked, tested, and optimized prompts that deliver exceptional results
        </p>
      </div>
      <div className={`w-full flex items-center gap-6 justify-center flex-wrap`}>
         <button onClick={
          ()=>dispatch(setCategory("All"))
         } className={`px-5 md:px-8 py-3 rounded-lg font-medium font-[Outfit] text-black bg-gray-300 cursor-pointer ${selector === "All" && "bg-purple-600 text-white"}`}>All</button>
            {categories.map((item,index)=>{
                return (
                    <button key={index} onClick={()=>dispatch(setCategory(item))} className={`px-5 md:px-8  py-3 rounded-lg font-medium font-[Outfit] text-black bg-gray-300 cursor-pointer ${selector === item && "bg-purple-600 text-white"}`}>{item}</button>
                )
            })}
      </div>
      <div className='flex flex-col gap-4 lg:flex-row items-center lg:flex-wrap justify-center '> 
        {prompts.filter(item=>{
          if(selector==="All"){
            return item;
          }else {
            return selector === item.category
          }
        }).slice(0,4).map((item,index)=>{
          return (
            <ProductList key={index} item={item}/>
          )
        })}
      </div>
      <div className='flex item-center justify-center'>
       <Link to="/products">
        <button className='px-5 md:px-8 py-3 rounded-lg font-medium font-[Outfit] text-black bg-gray-300 cursor-pointer mb-3 group hover:bg-purple-600 hover:text-white'  > <FontAwesomeIcon icon={faArrowDown} className='group-hover:translate-y-1 group-hover:text-white transition-all duration-100'/> View All Prompts</button></Link>
      </div>
    </div>
  )
}

export default Features
