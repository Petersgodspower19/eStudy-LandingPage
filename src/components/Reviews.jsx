import React from 'react'
import pic1 from "../assets/image/pic1.png"
import pic2 from "../assets/image/pic2.png"
import pic3 from "../assets/image/pic3.png"
import ReviewCard from './ReviewCard'


function Reviews() {
  return (
    <div className='text-center md:px-13 md:py-13 pt-20' id='reviews'>
        <h1 className='text-2xl md:text-4xl font-bold h1 mb-5'>Our <span className='text-brightGreen'>Reviews</span></h1>
        <div className='flex items-center flex-wrap justify-center gap-3'>
        <ReviewCard url={pic1} />
        <ReviewCard url={pic2} />
        <ReviewCard url={pic3} />
        </div>
      
    </div>
  )
}

export default Reviews
