import React from 'react'
import { FaCode } from "react-icons/fa6";

export default function Card({Icon ,tittle,content,color}) {
  return (
    <div className= {`border  w-full  sm:w-48 h-48 ${color ? "bg-pink-50": "bg-gray-100"}  rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[5px_5px_0_rgba(0,0,0,1)] flex  flex-col items-center justify-center gap-3`}>



     {Icon && <div className={`text-3xl  ${color ? color: "text-gray-500"}`}>{Icon}</div>}
    <h1 className=' font-ovo text-xl font-medium'>{tittle}</h1>
    <p className='tracking-wider text-center px-4 font-ovo  '>{content}</p>


    </div> 
  )
}
