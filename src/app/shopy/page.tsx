import React from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { FiShoppingCart } from "react-icons/fi";
import Feature from '@/components/feature';

function Page() {
  return (
    <>
       <section className='md:mt-[50px] p-[10px] md:px-[300px]'>

        {/* first div */}
        <div className='flex flex-col md:flex-row gap-[5px] md:gap-[111px]'>
            <div>
                <Image src={"/products/product2.png"} alt="chairi" width={675} height={607}/>
            </div>

            {/* text */}
            <div>
                <h1 className='text-[30px] md:text-[60px] leading-[66px] font-bold text-[#272343]'>Library Stool <br className='hidden md:block'/> Chair</h1>

                <Button className='text-[20] leading-[22] font-semibold text-white bg-[#029FAE] mt-[0px] md:mt-[32px] rounded-[100px]'>$20.00 USD</Button>

                <div className='w-full md:w-[400px] text-[22] text-center md:text-start leading-[33px] text-[#272343] pt-[10px] md:pt-[37px] border-t-[1px] mt-[37px]'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>

                <Button className='w-full md:w-[212px] h-[55px] md:h-[63px] flex items-center gap-[9px] text-[#FFFFFF] bg-[#029FAE] mt-[20px] md:mt-[32px]'>
                    <FiShoppingCart size={29} color='white'/>
                    <p className='text-[20px] leading-[22px] font-medium '>Add To cart</p>
                </Button>
            </div>
        </div>


        {/* feature products */}
        <div className='w-full mt-[50px] md:mt-[123px] mb-[30px] md:mb-[141px]'>

            <div className='text-[#000000] font-bold flex items-center justify-between'>
                <h1 className='text-[20px] md:text-[28px] leading-[33px]  tracking-[20%]'>Featured Products</h1>

                <p className='text-[13px] md:text-[18px] leading-[21px] underline '>View all</p>
            </div>


            {/* main div */}
            <div className='w-full h-[300px] overflow-y-auto md:overflow-y-visible md:h-[306px] flex flex-col md:flex-row gap-[26px] mt-[40px] md:mt-[69px]'>
                <Feature/>
            </div>


        </div>

       </section>
    </>
  )
}

export default Page