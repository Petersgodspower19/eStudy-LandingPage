import React from "react";

function CourseCard({ url, heading }) {
    return (
      <div className='flex flex-col gap-3 course justify-center bg-white p-2 rounded-[3px] shadow-lg hover:shadow-2xl transition-shadow duration-300'>
        <img src={url} alt="" className='w-[200px] m-auto' />
        <h1 className='font-bold text-black text-[20px]'>{heading}</h1>
        <p className='text-lightText text-[13px]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, illo aliquid.
        </p>
      </div>
    );
  }
  
  export default CourseCard;
  