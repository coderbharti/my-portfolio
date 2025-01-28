import React from 'react'
import Card from './Card'
import { FaCode } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";

const AboutMe = React.forwardRef(function AboutMe(props,ref) {
  return (
    <div ref={ref} className=" w-full flex flex-col items-center justify-center mt-8   ">
        <h4 className='font-thin font-ovo text-lg pb-2'>Introduction</h4>
        <h2 className='text-4xl font-medium pb-8 tracking-wider'>About me</h2>
        <div className=' w-[70%]  flex flex-col items-center justify-center gap-8 lg:flex-row '>
        <div id="about-me-img" className='w-72 h-56 sm:w-96 sm:h-72 flex-shrink-0"> '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDy1nu9rnJ6VYuGpyB88QGTTRpgO5aUe4nQQ&s" className='w-full h-full  rounded-lg  object-fill '/>

        </div>
        <div id="content" className=''>
            <p className='text-base font-ovo leading-8 pb-8 font-thin tracking-wider text-center lg:text-left'>"I am an aspiring Frontend Developer with a solid foundation in web development technologies like HTML, CSS, and JavaScript, along with hands-on experience using React to build responsive and interactive web applications. </p>

            <div id ="card" className='flex flex-col items-center justify-start gap-7 sm:flex-row'>
            
                <Card Icon={<FaCode />} tittle ={"Languages"} content={"HTML,CSS ,JavaScript ,React.js"}/> 
                <Card Icon={<FaUserGraduate />} tittle ={"Education"} content={" B.Sc. in General Science "}/> 
                <Card
                Icon={<FaLaptopCode />} tittle={"Projects"} content={"Built more than 5 projects"}/>

            </div>

        </div>


        </div>

        <div id="wrraper" className='flex flex-col items-center justify-start pt-8'>

       
        <div id="tool " className='flex flex-col items-center justify-start pt-4    '>
          <h1 className='text-3xl font-ovo font-medium tracking-wider pb-4 '>Tool i use</h1>
          <div id="icon" className='flex items-center gap-6 sm:gap-20'>
          <VscVscodeInsiders className='text-sky-500 text-4xl sm:text-5xl' />
          <FaGithub className='text-4xl sm:text-5xl' />
          <RiTailwindCssFill className='text-sky-400 text-4xl sm:text-5xl' />
          <GrReactjs className='text-sky-600 text-4xl sm:text-5xl' />
          <IoLogoJavascript className='text-4xl sm:text-5xl text-yellow-400' />

          </div>

        </div>
        </div>
        
        
    </div>
  )
})

export default AboutMe