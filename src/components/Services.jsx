import React from "react";
import Card from "./Card";
import { CgDesignmodo } from "react-icons/cg";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { SiCircuitverse } from "react-icons/si";
import ServiceCard from "./ServiceCard";
const Services = React.forwardRef( function Services(props,ref) {
  return (
    <div className=" w-full flex flex-col items-center mt-14" ref={ref}>
      <h4 className="font-thin font-ovo text-lg pb-2">What i offer</h4>
      <h2 className="text-4xl font-medium pb-8 tracking-wider">My Services</h2>

      <div className="w-[60%]  flex flex-col items-center">
        <p className="text-lg font-ovo leading-8 pb-8 font-thin tracking-wider text-center lg:text-left">
          "I am a frontend developer from Noida, eager to start my career with
          hands-on experience in HTML, CSS, JavaScript, and React."{" "}
        </p>
      </div>

      <div
        id="service-card"
        className="flex flex-col items-center justify-center mx-4  gap-8 md:flex-row "
      >
        <ServiceCard
          Icon={<CgDesignmodo />}
          tittle={"Web Design"}
          content={
            "Creating responsive and visually appealing website layouts."
          }
          
        />

         

        <ServiceCard
          Icon={<LiaLaptopCodeSolid />}
          tittle={"Web Development"}
          content={
            "Building functional, scalable, and user-friendly websites with clean code."
          }
          
        />

        <ServiceCard
          Icon={<SiCircuitverse />}
          tittle={"UI/UX"}
          content={
            "Designing intuitive and user-centric interfaces for seamless experiences."
          }
          color={"text-pink-500"}
        />

       



      </div>
    </div>
  );
})
export default Services
