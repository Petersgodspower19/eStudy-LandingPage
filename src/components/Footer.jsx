import React from 'react'
import Links from './Links'

function Footer() {
  return (
    <footer className='w-full flex justify-between bg-white  px-3 py-4 lg:px-16 lg:py-4'>
      <div className='flex items-center gap-3'>
            <Links to="home">Home</Links>
            <Links to="about">About</Links>
            <Links to="courses">Courses</Links>
            <Links to="reviews">Reviews</Links>
            <Links to="contact">Contact</Links>
        </div>
        <h1 className='text-[18px] md:text-[25px] font-bold text-black'>eStudy</h1>
    </footer>
  )
}

export default Footer
