import React from 'react'

function Links({to, children, onClick}) {
  return (
    <a href={`#${to}`} onClick={onClick} className='text-[15px] md:text-[16px] text-black hover:text-brightGreen no-underline'>{children}</a>
  )
}

export default Links
