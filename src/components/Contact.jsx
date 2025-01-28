import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";

const Contact = React.forwardRef( function Contact(props ,ref) {
  return (
    <div ref={ref} className='w-full flex flex-col items-center mt-14'>
        <h4 className="font-thin font-ovo text-lg pb-2">Connect with me</h4>
        <h2 className="text-4xl font-medium pb-8 tracking-wider">Get in touch</h2> 
        <div className='w-[60%] flex flex-col items-center '>
        <p  className='text-xl font-ovo leading-8 pb-8 font-thin tracking-wider text-center lg:text-left'>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
         <div className=' w-full '>
        
            {/* <div className=' w-full flex items-center justify-between gap-7 flex-col sm:flex-row ' >
                <input id ="name"type="text" required placeholder='Enter Your Name ' className='px-2 py-4 border w-full border-gray-500 rounded-lg '/>
                <input id ="name" type="email" required placeholder='Enter Your Email' className='px-2 py-4 border w-full border-gray-500 rounded-lg '/>


            </div> */}
            {/* <textarea className='px-2 py-8 border w-full border-gray-500 rounded-lg mt-6 mb-6' placeholder='Enter Your Message' /> */}

            <a  href="mailto:kmbharti1401@gmail.com" className=' w-max border flex items-center justify-center gap-3 px-4 py-2 font-ovo text-xl rounded-2xl bg-gradient-to-r from-red-400 to-pink-500 m-auto'>Contact me <span>  <IoArrowForwardOutline />
          </span></a>

       


         </div>



        </div>


    </div>
  )
})
export default Contact;
