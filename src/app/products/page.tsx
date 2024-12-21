import { Product_Data } from '@/components/constant/productsPage'
import ProductCard from '@/components/productCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import Image from "next/image"

function page() {
  return (
    <>

       <section className='w-full mt-[30px] px-[10px] md:px-[300px] md:mt-[57px]'>

        {/* heading */}
       <div>
            <h1 className='text-[27px] md:text-[32px] leading-[35px] font-semibold text-[#272343]'>Our Products</h1>
      </div>


        {/* Cards main */}
        <div className='w-full grid grid-cols-2 md:grid-cols-4 h-[640px] md:h-auto overflow-y-auto  gap-x-[8px] md-gap-x-[10px] gap-y-[25px] md:gap-y-[70px] grid-rows-3 mt-[10px] md:mt-[40px] '>
          <ProductCard data={Product_Data} />
        </div>



        {/* bottom subscribe section */}
        <div className='w-full text-center mt-[40px] md:mt-[173px] px-[5px] md:px-[0px] py-[5px] pb-[30px] md:py-[100px] bg-[#F0F2F3]'>

           <h1 className='text-[18px] md:text-[50px] leading-[58px] font-medium '>Or subscribe to the newsletter</h1>


           {/* input and button */}
           <div className='flex items-center justify-center gap-[4px] md:mt-[20px] text-black'>
            
            <div className='border-b-[2px] border-black'>
            <Input type="email" placeholder="Your email"  className='w-[160px] md:w-[643px] h-[32px] border-none border-b-[2px] text-[16px] leadin-[16px] py-[15px] px-[20px]' />
            </div>

            <div className='border-b-[2px] border-black ml-[8px] mb-[2px]'>
            <Button className='w-[90px] text-[16px] leadin-[110%] font-semibold py-[14px] px-[24px] bg-transparent text-black shadow-none'>Subscribe</Button>
            </div>

          </div>



          {/* heading 2 */}
          <h1 className='text-[25px] md:text-[50px] md:leading-[58px] font-medium mt-[30px] md:mt-[70px]'>Follow products and discounts on Instagram</h1>


          {/* pictures div */}
          <div className='flex itmes-center justify-center overflow-x-auto md:overflow-x-visible gap-[10px] md:gap-[24px] mt-[20px] md:mt-[60px]'>

            <Image src={"/products/cat2.png"} alt="pic" width={186} height={186} className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
            <Image src={"/products/cat1.png"} alt="pic" width={186} height={186} className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
            <Image src={"/products/product2.png"} alt="pic" width={186} height={186} className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
            <Image src={"/products/product1.png"} alt="pic" width={186} height={186} className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
            <Image src={"/products/product3.png"} alt="pic" width={186} height={186} className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
            <Image src={"/products/cat3.png"} alt="pic" width={186} height={186} className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>

          </div>
          

        </div>


       </section>
    
    </>
  )
}

export default page