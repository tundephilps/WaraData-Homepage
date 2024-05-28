import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font bg-[#0b153c] hidden lg:flex ">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex items-center text-gray-900  md:mb-0">
          <img src={logo} className='h-[52px]'/>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-100 cursor-pointer relative">
            Home
            <div class="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 hover:bg-blue-400 rounded-full bg-none "></div>
          
       
          </a>
          <a class="mr-5 hover:text-gray-100 cursor-pointer relative">
            Contact Us
            
            <div class="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 hover:bg-blue-400 rounded-full bg-none "></div></a>
          <a class="mr-5 hover:text-gray-100 cursor-pointer relative">
            Services
          
            <div class="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 hover:bg-blue-400 rounded-full bg-none "></div> </a>
          <a class="mr-5 hover:text-gray-100 cursor-pointer relative">
            Feedback
          
            <div class="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 hover:bg-blue-400 rounded-full bg-none "></div></a>
        </nav>
        <div class="inline-flex items-center bg-[#424242] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-lg
         text-base mt-4 md:mt-0 cursor-pointer">
          <h1 className='text-[#2A71ff] font-extrabold'>Data Pricing</h1>
        </div>
      </div>
    </header>
  )
}

export default Navbar