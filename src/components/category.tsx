import React from 'react'
import ImageCard from './imageCard'
import Image from "next/image"


function Category() {
  return (
    <section className='w-full 
    mt-[900px] md:mt-[136]
    px-[10px] md:px-[opx]'>

        {/* heading */}
        <h1 className='
        text-[25px] md:text-[32px] leading-[35px] font-semibold text-[#272343]
        '>Top categories</h1>

        {/* Images main div */}
        <div className='
        w-full 
        h-[424px] 
        flex 
        flex-col md:flex-row
        gap-[20px] md:gap-[24px] 
        mt-[26px] md:mt-[40px]'>
            <ImageCard/>
        </div>


        {/* bottom pictures */}
        <div className='w-full 
        h-auto md:h-[648px] 
        grid 
        grid-cols-1 md:grid-cols-2 
        gap-[10px] md:gap-[24px] 
        mt-[500px] md:mt-[229px]'>

            {/* <p className='text-[34px] leading-[39px] transform rotate-190 '>Explore new and popular styles</p> */}

            {/* first full halff picture */}
            <div>
                <Image src={"/products/card1.png"} alt={"picture"} width={648} height={648} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out' />
            </div>


              {/* choty choty div */}
            <div className='
            grid 
            grid-cols-2 
            grid-rows-2 
            gap-[10px] md:gap-[24px] '>
                <div>
                    <Image src={"/products/card2.png"} alt="chair2" width={312} height={312} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                </div>
                
                <div>
                    <Image src={"/products/card3.png"} alt="chair2" width={312} height={312} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                </div>

                <div>
                    <Image src={"/products/card4.png"} alt="chair2" width={312} height={312} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                </div>

                <div>
                    <Image src={"/products/card5.png"} alt="chair2" width={312} height={312} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Category