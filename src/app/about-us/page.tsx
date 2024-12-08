import { Button } from '@/components/ui/button'
import React from 'react'
import Image from "next/image"
import RevCard from '@/components/revCard'

function Page() {
  return (
    <>

       <section className='w-full'>

        {/* about div 1 */}
        <div className='flex items-center justify-center gap-[29px]'>

            {/* 1 */}
            <div className='bg-[#007580]  p-[64px] text-white'>
                <h1 className='text-[32px] leading-[38px] font-semibold'>About Us - Comforty</h1>
                    
                <div className='w-[495px] text-[18px] leading-[21px] mt-[12px]'>
                  <p>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                </div>

                <Button className='w-[179px] h-[56px] bg-[#F9F9F926] mt-[143px] rounded-none'>View collection</Button>
            </div>

            {/* 2 */}
            <div className='w-[619px] h-[463px] relative'>
                <Image src={"/products/card5.png"} alt="chair" layout='fill' objectFit='cover'/>
            </div>
        </div>



        {/* div 2 */}
        <div className='mt-[132px]'>
            <h1 className='text-[32px] text-center leading-[35px] font-semibold'>What makes our Brand Different</h1>

            {/* card revew main div */}
            <div className='w-full h-[244px] flex gap-[29px] mt-[48px]'>
                <RevCard/>
            </div>
        </div>

       </section>

    </>
  )
}

export default Page