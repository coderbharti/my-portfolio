import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";

function HomePage() {
  return (
    <div className=' flex flex-col items-center justify-center bg-gradient-to-r from-gray-50 to-gray-50' >
        <div id="img" className='w-48 h-48  rounded-[50%] overflow-hidden object-cover mt-8'>
            

         <img src="/img9.jpeg" className='w-full h-full  rounded-[50%] object-cover  ' />

        </div>

        <div id ="content" className='flex flex-col items-center justify-center'>

        <h3 className=' font-ovo text-2xl pt-2'>Hi! I'm Bharti  </h3>

        <h1 className=' font-ovo text-4xl font-medium text-center pt-4 px-2 sm:text-5xl'>
        frontend web developer <br/> based in Noida.
        </h1>

        <h2 className='text-lg text-center pt-4 font-ovo leading-9 px-4 '> <span className='md:whitespace-nowrap'>"I am a frontend developer from Delhi, eager to start my career with hands-on experience in</span> <br/> HTML, CSS, JavaScript, and React."</h2>
        </div>
        
        <div id="home-btn" className='flex flex-col  items-center justify-center gap-4 pt-4 pb-4 sm:flex-row '>
        <a  href="mailto:kmbharti1401@gmail.com" className='border flex items-center justify-center gap-3 px-4 py-2 font-ovo text-xl rounded-2xl bg-gradient-to-r from-red-400 to-pink-500 text-white font-medium'>Contact me <span>
        <IoArrowForwardOutline /></span></a>

        <a  href="https://drive.google.com/file/d/1WMq1OhIoQ-sS-COtU3qI1HtWgFUSOXxM/view?usp=drivesdk" target="_blank" download="bharti_Resume.pdf" className='border-2 flex items-center justify-center gap-3 px-4 py-2 font-ovo text-xl rounded-2xl  text-pink-500 border-pink-500 font-bold'>My resume <span>
        <GoDownload className='font-bold'/></span></a>



        </div>

      
      

    </div>
  )
}

export default HomePage