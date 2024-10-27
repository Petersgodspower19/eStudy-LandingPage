import React from 'react'

function ReviewCard({url}) {
  return (
    <div className='w-[350px] bg-white rounded-[8px] p-3 text-lightText text-center shadow-lg hover:shadow-2xl transition-shadow duration-300'>
    <p className='mb-2'>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veritatis rem magni? Ipsam aut tenetur commodi optio officia totam earum animi, 
        dolorem omnis praesentium ab corporis illum magnam autem consequatur."
    </p>
     <img src={url} alt=""  className='w-[40px] m-auto rounded-[50%]'/> 
    </div>
  )
}

export default ReviewCard;
