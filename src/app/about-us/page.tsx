import { Button } from '@/components/ui/button'
import React from 'react'
import Image from "next/image"
import RevCard from '@/components/revCard'

function Page() {
  return (
    <>

       <section className='w-full py-[20px] md:py-[100px] px-[10px] md:px-[300px]'>

        {/* about div 1 */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-[20px] md:gap-[29px]'>

            {/* 1 */}
            <div className='bg-[#007580] p-[15px] md:p-[64px] text-white transform hover:scale-[1.01] transition-transform duration-500 ease-in-out'>
                <h1 className='text-[21px] md:text-[32px] leading-[38px] font-semibold'>About Us - Comforty</h1>
                    
                <div className='w-full md:w-[495px] text-[14px] md:text-[18px] leading-[21px] mt-[12px]'>
                  <p>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                </div>

                <Button className='w-[140px] md:w-[179px] h-[40px] md:h-[56px] bg-[#F9F9F926] mt-[45px] md:mt-[143px] rounded-none'>View collection</Button>
            </div>

            {/* 2 */}
            <div className='w-full md:w-[619px] h-[300px] md:h-[463px] relative'>
                <Image src={"/products/card5.png"} alt="chair" layout='fill' objectFit='cover' className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
            </div>
        </div>



        {/* div 2 */}
        <div className='mt-[50px] md:mt-[132px]'>
            <h1 className='text-[24px] md:text-[32px] text-center leading-[35px] font-semibold'>What makes our Brand Different</h1>

            {/* card revew main div */}
            <div className='w-full h-[160px] md:h-[244px] overflow-x-auto md:overflow-x-visible flex gap-[10px] md:gap-[29px] mt-[30px] md:mt-[48px] relative'>
                <RevCard/>
            </div>
        </div>



        {/* div 3 */}
        <div className='mt-[40px] md:mt-[131px]'>
            <h1 className='text-[21px] md:text-[32px] leading-[35px] font-semibold'>Our Popular Products </h1>

            {/* pictures */}
         <div className='h-[462px] flex flex-wrap md:flex-row items-center md:gap-[20px] mt-[20px] md:mt-[43px]'>
             
             {/* div 1 */}
            <div className='md:h-full'>
                <div>
                    <Image src={"/products/p1.png"} alt="chairo" width={630} height={375} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                </div>

                <p className='text-[17px] md:text-[20px] leading-[28px] text-[#2A254B] md:mt-[24px] inline md:block'>The Poplar suede sofa</p>

                <h4 className='text-[18px] leading-[27px] text-[#2A254B] mt-[8px] inline md:block ml-[50px] md:ml-[0px]'>$99.00</h4>
            </div>


            {/* div 2 */}
            <div className='flex items-center gap-[10px] md:gap-[20px]'>

            <div className='h-full'>
                <div>
                    <Image src={"/products/p2.png"} alt="chairo" width={305} height={375} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                </div>

                <p className='md:text-[20px] leading-[28px] text-[#2A254B] mt-[5px] md:mt-[24px]'>The Dandy chair</p>

                <h4 className='text-[15px] font-medium md:font-normal md:text-[18px] leading-[27px] text-[#2A254B] mt-[] md:mt-[8px]'>$99.00</h4>
            </div>


               {/* div 2 */}
               <div className='h-full'>
                <div>
                    <Image src={"/products/p3.png"} alt="chairo" width={305} height={375} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                </div>

                <p className='md:text-[20px] leading-[28px] text-[#2A254B] mt-[5px] md:mt-[24px]'>The Dandy chair</p>

                <h4 className='text-[15px] font-medium md:font-normal md:text-[18px] leading-[27px] text-[#2A254B] mt-[] md:mt-[8px]'>$99.00</h4>
            </div>

            </div>

         </div>



        </div>

       </section>

    </>
  )
}

export default Page