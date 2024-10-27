import React from 'react'
import about from "../assets/image/about.svg"
import Button from './Button'

function About() {
  return (
    <div className='bg-home md:px-13 md:py-13 pt-20 flex flex-col md:flex-row items-center justify-around' id='about'>
    <img src={about} alt='' className='w-[510px]'/>

    <div className='w-full md:w-[550px] text-center'>
    <h1 className='text-2xl md:text-4xl font-bold h1 mb-3'>About <span className='text-brightGreen'>Us?</span></h1>
    <p className=' text-lightText mb-3 px-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequuntur, 
        impedit delectus fugiat ratione ullam ipsum eos! Illo dolorum omnis possimus corporis tempora impedit. 
        Quis perspiciatis saepe ratione sapiente soluta!
    </p>
    <Button />
    </div>
    </div>
  )
}

export default About
