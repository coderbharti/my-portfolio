import React from 'react'
import { GiSplitCross } from "react-icons/gi";

function MobileNabar({onhandleOpenMenu ,scrollToAbout ,scrollToServices,scrollToContact, scrollToMyWork}) {
  return (
    <div className=' absolute top-0 right-0 h-screen   bg-rose-100/70 rounded-md pt-3 pl-6 z-50  '>
      <div className='flex justify-end pr-4 pt-5'>

     
        <GiSplitCross className=' ml-20 text-2xl cursor-pointer' onClick={onhandleOpenMenu} />

        </div>
      <nav className='p-4 -ml-4 '>
        <ul className='space-y-5'>

            <li className=' text-xl hover:font-medium cursor-pointer '>home</li>
            <li className=' text-xl hover:font-medium cursor-pointer '><button onClick={scrollToAbout}>About me</button> </li>
            <li className=' text-xl hover:font-medium cursor-pointer '> <button onClick={scrollToServices}>Services</button></li>

            <li className=' text-xl hover:font-medium cursor-pointer '>  <button onClick={scrollToMyWork}>My Work</button></li>
            <li className=' text-xl hover:font-medium cursor-pointer '> <button onClick={scrollToContact}>Contact me</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNabar