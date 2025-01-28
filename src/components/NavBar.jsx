import React from "react";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { RiMenuFoldFill } from "react-icons/ri";
import { GiSplitCross } from "react-icons/gi";
import { useState } from "react";
import MobileNabar from "./MobileNabar";

export default function NavBar({scrollToAbout, scrollToServices,scrollToContact, scrollToMyWork}) {
  const [openMunu, setOpenMenu] = useState("false");
  function handleOpenMenu() {
    setOpenMenu((prevState) => !prevState);
  }
  return (
    <div className="px-6 py-3  flex items-center justify-between   bg-gradient-to-r from-gray-50 to-gray-50 ">
      <h1 className="font-playfair text-5xl font-bold">
        Bharti<span className="text-7xl text-purple-700 font-bold">.</span>
      </h1>
      <nav className="hidden lg:block  bg-rose-100/10 drop-shadow-lg  py-4 rounded-3xl px-8">
        <ul className=" hidden lg:flex items-center justify-center gap-8">
          <li className="font-normal text-xl hover:font-medium cursor-pointer  active:underline underline-offset-8">
            <button>
              Home
              </button>
          </li>
          <li className="font-normal  text-xl hover:font-medium cursor-pointer  active:underline underline-offset-8">
            <button onClick={scrollToAbout}>About me</button> 
          </li>
          <li className="font-normal  text-xl hover:font-medium cursor-pointer  active:underline underline-offset-8">
            <button onClick={scrollToServices}>Services</button>
          </li>
          <li className="font-normal  text-xl hover:font-medium cursor-pointer  active:underline underline-offset-8">
             <button onClick={scrollToMyWork}>My Work</button>
          </li>
          <li className="font-normal  text-xl hover:font-medium cursor-pointer  active:underline underline-offset-8">
            <button onClick={scrollToContact}>Contact me</button>
          </li>
        </ul>
      </nav>

      <a href="mailto:kmbharti1401@gmail.com" className=" hidden lg:flex border-2  py-3 px-3 rounded-3xl  items-center justify-center gap-2 text-pink-500 border-pink-500 font-medium">
        <button onClick={scrollToContact}>Contact me</button>
        <span className="text-xl">
          <HiMiniArrowTrendingUp />
        </span>
      </a>

      <div className="lg:hidden">
        {/* 
        {openMunu ? <RiMenuFoldFill className='text-3xl' onClick={handleOpenMenu} />:  
         <GiSplitCross className='text-3xl'onClick={handleOpenMenu} />} */}

        {openMunu ? (
          <RiMenuFoldFill className="text-3xl" onClick={handleOpenMenu} />
        ) : (
         <MobileNabar onhandleOpenMenu={handleOpenMenu} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} scrollToMyWork={scrollToMyWork} scrollToServices={scrollToServices} />
        )}
      </div>
    </div>
  );
}
