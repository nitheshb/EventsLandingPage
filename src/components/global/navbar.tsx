import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import { UserButton, currentUser } from '@clerk/nextjs'
import { Zap } from "lucide-react";

type Props = {}

const Navbar = async (props: Props) => {
  const user = await currentUser()
  return (
    <nav className="bg-[#F5F4F6] relative    w-full  rounded-[20px]">
    <div className=" px-5  ">
      <div className="flex justify-between items-center relative  w-full px-[70px] py-[16px] rounded-[20px]">

      <div className="hidden sm:flex items-center space-x-8">
          <Link href="#" className="transition-all duration-200 text-[18px] leading-[24px] font-medium text-[hsla(0,0%,9%,.3)]">
            Home
          </Link>
          <Link href="#" className="transition-all duration-200 text-[18px] leading-[24px] font-medium text-[hsla(0,0%,9%,.3)]">
            Event
          </Link>
          <Link href="#" className="transition-all duration-200 text-[18px] leading-[24px] font-medium text-[hsla(0,0%,9%,.3)]">
          Ticket
          </Link>

        </div>
         


        <div className="flex items-center">
          <Zap className="h-8 w-8 text-[#82e600]" />
          <span className="ml-2 text-xl font-semibold text-gray-900">EventKit</span>
        </div>




        <div>
        <button className="px-[24px] py-[14px] rounded-full text-[18px] leading-[20px] font-medium text-[black] border border-[black] bg-transparent outline-none cursor-pointer">
            Login
          </button>
        </div>
        

      </div>
    </div>
  </nav>
  )
}

export default Navbar
