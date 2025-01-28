import React from 'react'
import { IoIosMailUnread } from "react-icons/io";

export default function Footer() {
  return (
         <div className=' w-full mt-8'>
            <div className='flex items-center justify-center flex-col'>

        <h1 className="font-playfair text-5xl font-bold">
        Bharti<span className="text-7xl text-purple-700 font-bold">.</span>
         </h1>

         <a  href="mailto:kmbharti1401@gmail.com" className='  mt-2 flex items-center  gap-2 text-lg text-gray-600 font-ovo leading-8 pb-8 font-thin tracking-wider text-center lg:text-left'><span className='text-3xl'><IoIosMailUnread /></span>Kmbharti1401@gmail.com</a>
        
            </div>

             <div className=' hidden border-t-2 sm:flex items-center justify-center sm:justify-between px-4 py-3 gap-4'>
               <div><a  href="mailto:kmbharti1401@gmail.com" className=' text-base sm:text-xl text-gray-800 font-ovo leading-8 font-medium tracking-wider text-center lg:text-left'>kmbharti1401@gmail.com</a></div>
               <div className='flex items-center justify-between gap-4'>

            
               <ul>
                <li><a href='https://www.linkedin.com/in/bharti-kumari-85143722b/' target='_blank'  className='text-base sm:text-xl text-gray-800 font-ovo leading-8 pb-8 font-medium tracking-wider text-center lg:text-left'> LinkedIn</a></li>
               </ul>
              <ul>
               <li><a href='https://github.com/coderbharti' target='_blank'  className='text-base sm:text-xl text-gray-800 font-ovo leading-8 pb-8 font-medium tracking-wider text-center lg:text-left'>GitHub</a></li>
               </ul>
               </div>

            </div> 

        
        </div>
  )
}
