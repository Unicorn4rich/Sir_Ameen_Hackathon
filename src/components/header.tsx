"use client"

import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { IoAlertCircleOutline } from "react-icons/io5";
import Image from "next/image"
import { LuShoppingCart } from "react-icons/lu";
import { Button } from './ui/button';
import Link from "next/link"
import { IoMdMenu } from "react-icons/io";




function Header() {

 let [TrFalse, SetTrFalse] = React.useState(false)

  return (
    <>

       <div className='
       w-full
       flex 
       flex-col '>


        {/* top div 1 */}
        <div className='
        px-[10px] md:px-[300px]
        h-[30px] md:h-[45px] 
        flex 
        items-center 
        justify-between 
        py-[14px] 
        text-[#FFFFFF] 
        bg-[#272343] 
        '>

          <div className='
          flex 
          items-center 
          gap-[10px] md:gap-[80px]'>
          <FaCheck  className='
          text-[10px] md:text-[16px]' />
          <p className='
          text-[8px] md:text-[.8125rem] 
          leading-[14.3008px]'>Free shipping on all orders over $50</p>
          </div>

         {/* top right icons */}
          <div>

            <div className='
            flex 
            gap-[0px] md:gap-[24px] 
            text-[8px] md:text-[13px] 
            leading-[16px]'>
            <div>
                <DropdownMenu >

                    <DropdownMenuTrigger className=' relative flex items-center gap-[6px] focus:outline-none hover:text-[#d5f4f7c2] hover:cursor-pointer '>
                    Eng
                    <ChevronDown size={15} />
                    </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>Spanish</DropdownMenuItem>
                    <DropdownMenuItem>Russian</DropdownMenuItem>
                    <DropdownMenuItem>Urdu</DropdownMenuItem>
                </DropdownMenuContent>

                </DropdownMenu>
            </div>

            <Link href={"/questions"}><p className='hover:text-[#d5f4f7c2] cursor-pointer'>Faqs</p></Link>

            <div className='flex items-center gap-[6px]'>
            <IoAlertCircleOutline />
            <Link href={"/questions"} className='hover:text-[#d5f4f7c2]'><p>Need Help</p></Link>
            </div>

            </div>
          </div>

        </div>


         {/* second div 2 */}
        <div className='flex items-center justify-between bg-[#F0F2F3] 
        py-[15px] md:py-[20px] 
        px-[10px] md:px-[300px]'> 

          <div className='flex items-center gap-[8px]'>
           <Image src={"/logo.png"} alt="logo" width={40} height={40}/>
            <h2 className='
            text-[18px] md:text-[26px] 
            leading-[31px] font-medium'>Comforty</h2>
          </div>

          <div className='flex items-center gap-[8px] py-[11px] px-[16px] bg-white rounded-[8px] '>
            <Link href={"/pagesRoute"}><LuShoppingCart className='hover:cursor-pointer
            text-[16px] md:text-[22px]'/></Link>
            <p className='
            text-[10px] md:text-[12px] leading-[13px] font-medium hover:cursor-pointer'>Cart</p>
            <Button size={"icon"} className='
            text-[13px]
            h-[17px] md:h-[20px] 
            w-[17px] md:w-[20px] rounded-full bg-[#007580]'>2</Button>
          </div>

        </div>


        {/* third div 3 */}
        <div className='
        flex 
        items-center 
        justify-between 
        py-[15px] md:py-[29.5008px] 
        border-b-[1px] 
        px-[10px] md:px-[300px]'>

          {TrFalse == true ? (

            <ul className='flex items-center justify-center gap-[10px] flex-col absolute top-[157px] right-[20px] bg-white w-[40%] h-[40vh] p-[10px] z-10'>

            <Link href={"/"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Home</li></Link>
            <Link href={"/shopy"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Shop</li></Link>
            <Link href={"/products"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Product</li></Link>
            <Link href={"/pagesRoute"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Pages</li></Link>
            <Link href={"/about-us"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>About</li></Link>
            <Link href={"/contact"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Contact</li></Link>
          </ul>

          ):
          (
            <ul className='md:flex gap-[32px] hidden '>
            <Link href={"/"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Home</li></Link>
            <Link href={"/shopy"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Shop</li></Link>
            <Link href={"/products"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Product</li></Link>
            <Link href={"/pagesRoute"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Pages</li></Link>
            <Link href={"/about-us"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>About</li></Link>
            <Link href={"/contact"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Contact</li></Link>
          </ul>
          )}

          <IoMdMenu className='text-[20px] order-2 md:hidden' onClick={()=>{SetTrFalse(!TrFalse)}} />

          <div className='flex gap-[8px] items-center'>
            <p className='
            text-[11px] md:text-[14px] 
            leading-[15px] text-[#636270]'>Contact:</p>
            <p className='
            text-[11px] md:text-[14px] 
            leading-[15px] font-medium'>(808) 555-0111</p>
          </div>
        </div>

       </div>

    </>
  )
}

export default Header