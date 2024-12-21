import React from 'react'
import Image from "next/image"
import {category_Data} from "@/components/constant/category"

function ImageCard() {
  return (
    <>

        {category_Data.map((item, index)=> {
            return(

            <div className='
            h-full 
            w-full md:w-[424px] 
            relative transform hover:scale-[1.02] transition-transform duration-500 ease-in-out ' key={index}>
                <Image src={item.src} alt="image" width={424} height={424}/>

              <div className='
              flex flex-col justify-center
              w-full md:w-[424px] 
              h-[70px] md:h-[85px] 
              text-white 
              bg-[#000000B2] absolute bottom-0 rounded-[4px] left-0 p-[20px]'>
                <h2 className='
               text-[15px]  md:text-[20px] 
                leading-[22px] font-semibold '>{item.name}</h2>
                <p className='
                text-[11px] md:text-[14px] leading-[15px] mt-[8px]'>{item.about}</p>
              </div>
           </div>

            )
        })}
        

    </>
  )
}

export default ImageCard