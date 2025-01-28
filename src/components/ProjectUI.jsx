import React from "react";
import Highlight from "./Highlight";

export default function ProjectUI({ tittle, description, href, point, img }) {
  return (
    <>
      <div className="flex flex-col items-center gap-4 mt-4">
        <h1 className=" shadow-md font-semibold font-ovo text-3xl whitespace-nowrap  text-gray-800">
          {tittle}
        </h1>
      </div>
      <div id="" className="w-72 h-56 sm:w-96 sm:h-72 flex-shrink-0 mt-4">
        <img src={img} className="w-full h-full   " />
      </div>

      <div className="flex flex-col items-center gap-4 pt-7">
        <p className="text-lg font-ovo leading-8 pb-8 font-thin tracking-wider text-center lg:text-left">
          {description}
        </p>
        <p>
          <span className="text-xl font-bold mr-2">Live Demo :-</span>{" "}
          <a
            target="_blank"
            href={href}
            className="text-xl text-pink-600 font-semibold shadow-pink  drop-shadow-[0_4px_10px_rgba(255,192,203,0.8)] hover:scale-150"
          >
            {href}
          </a>
        </p>

        <div className="flex items-center justify-start gap-3 flex-wrap mt-4 mb-4">
          <h1 className="text-xl font-bold mr-2">Highlights:</h1>
          {/* <Highlight highlightName="Responsive Design" />
                  <Highlight highlightName="Responsive Design" />
                  <Highlight highlightName="Responsive Design" />
                  <Highlight highlightName="Responsive Design" />
                  <Highlight highlightName="Responsive Design" />
                  <Highlight highlightName="Responsive Design" />
                  <Highlight highlightName="Responsive Design" /> */}

          {/* {highlightName.map((name) => (
             <Highlight key={name} name={name} />
                ))} */}

          {point.map((curr, index) => (
            <h1 className="font-medium" key={curr}>
              {curr},
            </h1>
          ))}

          <div></div>
        </div>
      </div>
    </>
  );
}
