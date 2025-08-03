import React from "react";
import footer from "../assets/footer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <>
      <div
        className="w-full  bg-cover bg-center "
        style={{ backgroundImage: `url(${footer})` }}
      >
        <div className="masker w-full h-full bg-gradient-to-b py-24 lg:py-32 from-purple-600 to-blue-200/70 relative">
          <div className="w-12 h-12 rounded-full bg-purple-300/50 absolute left-30 top-25 animate-pulse duration-500 ease-in-out  "></div>
          <div className="w-10 h-10 rounded-full bg-purple-100/50 absolute left-30 bottom-25 animate-bounce  "></div>
          <div className="w-8 h-8 rounded-full bg-purple-300/50 absolute right-30 top-25 animate-bounce  "></div>
          <div className="w-6 h-6 rounded-full bg-purple-300/50 absolute right-30 bottom-25 animate-pulse  "></div>
          <div className="flex flex-col gap-4 text-center  text-white ">
            <h1 className="text-[40px] font-bold font-[Outfit] max-w-[80vw] mx-auto leading-10 sm:text-7xl sm:leading-18 ">
              Stay Ahead of the AI Revolution
            </h1>
            <p className=" font-medium font-[Outfit] mt-6 text-[20px] max-w-[62vw] mx-auto sm:text-[30px] sm:leading-9">
              Get exclusive access to new prompt collections, AI tips, and
              special discounts delivered to your inbox weekly
            </p>
          </div>
          <div className="w-full p-6 flex items-center justify-center mt-6">
            <form action="" className="flex flex-col lg:flex-row gap-6">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="px-8 py-3 rounded-xl bg-white outline-none w-[300px]"
              />
              <button className="px-5 py-3 rounded-lg bg-purple-500 text-white font-medium font-[Outfit]">
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-full p-6 flex items-center justify-center ">
            <div className="flex flex-col md:flex-row gap-10 ">
              <p className="font-[Outfit] font-medium text-white/70 text-xl">
                No spam, ever
              </p>
              <p className="font-[Outfit] font-medium text-white/70 text-xl">
                No spam, ever
              </p>
              <p className="font-[Outfit] font-medium text-white/70 text-xl">
                No spam, ever
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  px-8 sm:px-12 md:px-24 lg:px-32 flex flex-col gap-8 pt-12 lg:pt-6 bg-black">
        <div className="py-24 flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-[25vw] flex flex-col gap-8 text-center">
            <h1 className="capitalize font-[pacifico] font-semibold text-2xl sm:text-3xl text-purple-600">
              promptHub
            </h1>
            <p className="text-xl font-medium font-[Outfit] text-white/80">
              Your premium destination for high-quality AI prompts. Boost your
              creativity and productivity with our curated collection of tested
              prompts for all major AI platforms.
            </p>
            <div className="flex gap-3 w-full items-center justify-center">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-white/80 text-xl"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white/80 text-xl"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white/80 text-xl"
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white/80 text-xl"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white/80 text-xl"
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap lg:flex-col gap-4 mt-4 justify-center">
            <div className="w-full text-center">
              <h1 className="text-xl font-medium font-[Outfit] text-white/80 w-full">
                Prompt
              </h1>
            </div>
            <div className="h-1 w-full" />
            <a
              className="text-lg font-medium font-[Outfit] text-white/60"
              href=""
            >
              All Prompts
            </a>
            <a
              className="text-lg font-medium font-[Outfit] text-white/60"
              href=""
            >
              ChatGPT
            </a>
            <a
              className="text-lg font-medium font-[Outfit] text-white/60"
              href=""
            >
              ChatGPT
            </a>
            <a
              className="text-lg font-medium font-[Outfit] text-white/60"
              href=""
            >
              ChatGPT
            </a>
            <a
              className="text-lg font-medium font-[Outfit] text-white/60"
              href=""
            >
              ChatGPT
            </a>
            <a
              className="text-lg font-medium font-[Outfit] text-white/60"
              href=""
            >
              ChatGPT
            </a>
          </div>
          <div className="flex flex-row flex-wrap lg:flex-col gap-4 lg:mr-14 mt-2 justify-center">
            <div className="w-full text-center">
              {" "}
              <h1 className="text-xl font-medium font-[Outfit] text-white/80">
                Company{" "}
              </h1>
            </div>
            <div className="h-1 w-full" />

            <a
              className="text-lg font-medium font-[Outfit] text-white/60"
              href=""
            >
              All Prompts
            </a>
            <a
              className="text-lg font-medium font-[Outfit] text-white/60"
              href=""
            >
              ChatGPT
            </a>
            <a
              className="text-lg font-medium font-[Outfit] text-white/60"
              href=""
            >
              ChatGPT
            </a>
            <a
              className="text-lg font-medium font-[Outfit] text-white/60"
              href=""
            >
              ChatGPT
            </a>
            <a
              className="text-lg font-medium font-[Outfit] text-white/60"
              href=""
            >
              ChatGPT
            </a>
            <a
              className="text-lg font-medium font-[Outfit] text-white/60"
              href=""
            >
              ChatGPT
            </a>
          </div>
        </div>
        <div className="h-1 bg-gray-400 w-full "></div>
        <div className="flex w-full flex-col gap-4 items-center lg:items-center lg:justify-between lg:flex-row pb-16">
          <h1 className="text-lg font-medium font-[Outfit] text-gray-400">
            © 2024 PromptHub. All rights reserved.
          </h1>
          <div className="flex flex-col gap-3 text-center lg:flex-row lg:justify-between">
            <a href=""  className="text-lg font-medium font-[Outfit] text-white/60">Privacy Policy</a>
            <a href="" className="text-lg font-medium font-[Outfit] text-white/60">Terms of Service</a>
            <a href="" className="text-lg font-medium font-[Outfit] text-white/60">Refund Policy</a>
            <a href="" className="text-lg font-medium font-[Outfit] text-white/60">Support</a>
          </div>
        </div>
        {/* <div className="border-b h-0.5 bg-red-400 border-white max-w-[80vw] mx-auto" ></div> */}
      </div>
    </>
  );
}

export default Contact;
