import React from 'react'

function Button({children, onClick}) {
  if(children) return <button onClick={onClick} className='text-center w-fit border-2 btn rounded-[20px] py-1 px-3 bg-white hover:bg-brightGreen hover:border-0'>
    {children}
  </button>
  return (
    <button className='text-center w-fit border-2 btn rounded-[20px] py-1 px-3 bg-white hover:bg-brightGreen hover:border-0'>
      <a href="#contact" className='text-black no-underline hover:text-white'>Contact Us</a>
    </button>
  )
}

export default Button
