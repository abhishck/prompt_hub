import React, { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar.jsx";
import { prompts } from "../assets/prompt_catalog.js";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../Redux/Slices/SearchSlice.jsx";
import SearchList from "../components/ui/SearchList.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Register from "../components/auth-ui/Register.jsx";
import ContactForm from "../components/auth-ui/ContactForm.jsx";

function HomePage() {
  const selectorSearch = useSelector((state) => state.search.search);
  const dispatch = useDispatch();
  const [isSearchActive, setSearchActive] = useState(false);
  useEffect(() => {
    setSearchActive(false);
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col gap-12 pt-[80px] px-8 sm:px-12 md:px-24 lg:px-32  ">
        <div className="w-full  flex flex-col items-center gap-2 justify-center text-center  py-8 ">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-[Outfit]">
            Welcome Back ,{" "}
            <span className="text-xl font-medium font-[pacifico] capitalize">
              Abhishek Rathore👋
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-400 font-[Outfit]">
            Find the perfect AI prompt for your next project.
          </p>
        </div>
        <div className="relative w-full flex flex-col gap-4 ">
          <div className="relative w-full flex items-center justify-between shadow-xl px-4 py-3 rounded-2xl">
            <input
              type="text"
              placeholder="Search All the Prompt you want..."
              className="outline-none text-gray-700 flex-1 text-center"
              onClick={() => setSearchActive(true)}
              onChange={(e) => dispatch(setSearch(e.target.value))}
            />
            {isSearchActive && (
              <FontAwesomeIcon
                icon={faXmark}
                className="cursor-pointer text-xl p-1"
                onClick={() => setSearchActive(false)}
              />
            )}
          </div>
          {isSearchActive && (
            <div className="absolute top-[150%] left-0 w-full bg-gray-100 z-9 grid grid-rows-9 gap-2" >
              {selectorSearch === "" ? (
                <div className="flex items-center mt-10 w-full justify-center">
                  <h1 className="text-2xl font-medium font-[Outfit] text-gray-700">
                    {" "}
                    No input...
                  </h1>
                </div>
              ) : (
                prompts
                  .filter((item) => {
                    return item.name
                      .toLowerCase()
                      .includes(selectorSearch.toLowerCase());
                  })
                  .map((item, index) => {
                    return <SearchList key={index} item={item} />;
                  })
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-6 w-full mt-6 items-center justify-center text-center">
          <h1 className="text-md md:text-2xl font-medium font-[pacifico]">
            ✨ "Every great idea starts with a spark — and the right prompt can
            light that fire.
          </h1>
          <p className="text-sm md:text-xl font-medium  font-[Mozilla_Headline] ">
            creating art, building content, or developing the next big
            innovation, our expertly crafted prompts save you time, boost
            creativity, and help you achieve more with less effort. Don’t waste
            hours staring at a blank screen — unlock inspiration instantly and
            turn your ideas into reality. Your next breakthrough is just one
            prompt away." 🚀
          </p>
          <Link to="/products">
            <button className="px-5 md:px-8 py-3 rounded-lg font-medium font-[Outfit] text-black bg-gray-300 cursor-pointer mb-3 group hover:bg-purple-600 hover:text-white">
              {" "}
              View All Prompts
            </button>
          </Link>
        </div>
         <div className="w-full flex items-center justify-center">
                <h1 className="text-md md:text-2xl font-medium font-[pacifico]">Why Choose Us?</h1>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            <div className="w-full h-60 lg:h-80  rounded-lg bg-gray-100 hover:scale-105 text-center py-6 px-8 transition-all duration-200 shadow-2xl ">
                <h1 className="text-md md:text-2xl font-medium font-[pacifico] text-purple-500 mb-4">💡 AI-Optimized Prompts</h1>
                 <p className="text-sm md:text-xl font-medium  font-[Mozilla_Headline] text-gray-700 mb-4 ">
            Each prompt is handcrafted, tested, and refined to give you the most accurate and creative AI output possible.
          </p>
                <h1 className="text-md md:text-2xl font-medium font-[pacifico] text-purple-500 mb-4">⏳ Save Hours of Work</h1>
                 <p className="text-sm md:text-xl font-medium  font-[Mozilla_Headline] text-gray-700 ">
            No more struggling to figure out the perfect AI input — just copy, paste, and get instant results.
          </p>
            </div>
            <div className="w-full h-60 lg:h-80">
                 <div className="w-full h-60 lg:h-80  rounded-lg bg-gray-100 hover:scale-105 text-center py-6 px-8 transition-all duration-200 shadow-2xl ">
                <h1 className="text-md md:text-2xl font-medium font-[pacifico] text-purple-500 mb-4">📈 Boost Your Productivity</h1>
                 <p className="text-sm md:text-xl font-medium  font-[Mozilla_Headline] text-gray-700 mb-4 ">
           Whether you’re writing, designing, coding, or marketing, our prompts help you achieve more in less time.
          </p>
                <h1 className="text-md md:text-2xl font-medium font-[pacifico] text-purple-500 mb-4">🌍 Trusted by Creators Worldwide</h1>
                 <p className="text-sm md:text-xl font-medium  font-[Mozilla_Headline] text-gray-700 ">
          Used by writers, entrepreneurs, and designers in over 30+ countries
          </p>
            </div>
            </div>
            <div className="w-full h-60 lg:h-80" >
                   <div className="w-full h-60 lg:h-80  rounded-lg bg-gray-100 hover:scale-105 text-center py-6 px-8 transition-all duration-200 shadow-2xl ">
                <h1 className="text-md md:text-2xl font-medium font-[pacifico] text-purple-500 mb-4">🛡 Quality & Satisfaction Guaranteed</h1>
                 <p className="text-sm md:text-xl font-medium  font-[Mozilla_Headline] text-gray-700 mb-4 ">
          We stand by our prompts — if you don’t love them, we’ll make it right.
          </p>
                <h1 className="text-md md:text-2xl font-medium font-[pacifico] text-purple-500 mb-4">🌍 Trusted by Creators Worldwide</h1>
                 <p className="text-sm md:text-xl font-medium  font-[Mozilla_Headline] text-gray-700 ">
          Used by writers, entrepreneurs, and designers in over 30+ countries
          </p>
            </div>
            </div>
        </div>
        <ContactForm/>
      </div>
    </>
  );
}

export default HomePage;
