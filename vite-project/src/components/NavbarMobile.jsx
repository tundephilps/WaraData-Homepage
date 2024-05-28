import React from 'react'
import logo from "../assets/logo.png"
import { CgMenuRightAlt } from "react-icons/cg";

const NavbarMobile = () => {
  return (
    <div className='py-4 w-full px-2  bg-[#0b153c] flex lg:hidden flex-row items-center justify-between'>
<img src={logo} className='h-[52px] mt-3 '/>
<div className='bg-[#4c4c4c] p-3 rounded-md mr-4'>
<CgMenuRightAlt className='text-3xl text-white'/>
</div>
    </div>
  )
}

export default NavbarMobile