import React from 'react'

export default function ServiceCard({Icon ,content ,tittle}) {
  return (
   <div
            className={`border shadow-xl  w-full md:w-52 h-60 bg-rose-100/10
              rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[5px_5px_0_rgba(0,0,0,1)] flex  flex-col items-center justify-center gap-3 `}
          >
            
              <div className={`text-5xl text-pink-400  `}>
               {Icon}
              </div>
            
            <h1 className=" font-ovo text-xl font-bold text-gray-800">{tittle}</h1>
            <p className="tracking-wider text-center px-4 font-ovo  ">
             {content}
            </p>
          </div>
  
  )
}
