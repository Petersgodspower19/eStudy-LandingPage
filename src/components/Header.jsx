import React from 'react'
import Links from './Links'
import { IoMenu } from "react-icons/io5";

function Header({ onMenuClick }) {
  return (
    <header className='flex items-center justify-between px-3 py-4 lg:px-16 
    lg:py-4 w-full fixed z-1000 bg-white shadow-lg'>
        <h1 className='text-[25px] font-bold text-black'>eStudy</h1>

        <div className='md:flex items-center gap-8 hidden'>
            <Links to="home">Home</Links>
            <Links to="about">About</Links>
            <Links to="courses">Courses</Links>
            <Links to="reviews">Reviews</Links>
            <Links to="contact">Contact</Links>
        </div>
        <IoMenu size={35} color='black' className='cursor-pointer md:hidden' onClick={onMenuClick}/>
      
    </header>
  )
}

export default Header
