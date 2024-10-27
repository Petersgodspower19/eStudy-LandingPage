import React from 'react'
import Button from './Button'
import hero from "../assets/image/hero.svg"

export default function Home() {
  return (
    <div className='bg-home md:px-13 md:py-13 pt-20 flex flex-col md:flex-row items-center justify-around' id='home'>
        <div className='w-full md:w-[500px] text-center'>
            <h1 className='text-2xl md:text-4xl font-bold h1 mb-5'>Knowledge with  
                <span className='text-brightGreen'> eStudy</span></h1>
               <p className='md:text-start text-lightText mb-3 px-8'>eStudy is your gateway to a word of limitless learning possibilities. With our cutting-edge eLearning
                platform, you can explore a vast library of courses, from academic subjects to practical skills, all designed to
                help you achieve your academic goals.
                </p> 
                <Button />
        </div>
      <img src={hero} alt='' className='w-[510px]' />
    </div>
  )
}
