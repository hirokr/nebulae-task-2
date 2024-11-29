"use client";

import Image from "next/image";
import { useState } from "react";

const AboutCard = ({ data }) => {
  const { img, title, extra, doings, description } = data;
  const { fg, bg } = img;
  const [hovered, setHovered] = useState(false);
  const change  = (x) =>{
    setTimeout(() => {
      setHovered(x);
    }, 100);
  }
  return (
    <div
      onMouseEnter={() => {
        change(true);
      }}
      onMouseLeave={() => {
        change(false);
      }}
      className={` group w-full s_lg:w-[18rem] p-6 h-[23rem] transition-all duration-500 hover:bg-hoverColor hover:text-white shadow-lg`}
    >
      <div className='w-10 h-10'>
        {hovered == true ? (
          <Image
            src={bg}
            alt='image'
            height={10}
            width={10}
            className='w-10 h-10'
          />
        ) : (
          <Image
            src={fg}
            height={10}
            width={10}
            className='w-10 h-10'
            alt='image'
          />
        )}
      </div>
      <h1 className='py-5 text-xl text-gray-900 group-hover:text-white'>
        {title}
      </h1>
      <div>
        {hovered === true ? (
          <div>
            <ul className='arrowStyle pl-5 text-sm '>
              {doings.map((item, index) => (
                <li className='pl-1 py-1' key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <div>
            {extra!==null? <button className="text-white px-3 py-1 rounded-full border-2 transition-all duration-500
            mt-2 border-white hover:bg-white hover:text-hoverColor">view</button>: ""}
            </div>
          </div>
          
        ) : (
          <p className='leading-7'>{description}</p>
        )}
      </div>
    
    </div>
  );
};

export default AboutCard;
