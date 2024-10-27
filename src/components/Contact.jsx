import React from 'react'
import contact from "../assets/image/contact.svg"
import Button from './Button'

function Contact() {
    function handleSubmit(e) {
        e.preventDefault();
    }
  return (
    <div className='md:px-13 md:py-13 pt-20' id='contact'>
      <h1 className='text-2xl md:text-4xl font-bold h1 mb-5 text-center'>Contact <span className='text-brightGreen'>Us</span></h1>
      <div className=' flex flex-col md:flex-row items-center justify-around' >
        <form className='flex flex-col gap-3 w-full md:w-[500px] p-8' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-1'>
            <label htmlFor="name">Your Name</label>
            <input type='text' name='name' id='name' placeholder='enter your name' required />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="email">Your Email</label>
            <input type='email' name='email' id='email' placeholder='enter your email' required />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="number">Your Number</label>
            <input type="number" name='number' id='number' placeholder='enter your number' required />
        </div>
        <Button>Send Message</Button>
        </form>
      <img src={contact} alt=''  className='w-[510px]' />
    </div>
    </div>
  )
}

export default Contact
