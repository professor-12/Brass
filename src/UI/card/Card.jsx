import React from 'react'

const Card = ({title,content,image}) => {
  return (
        <div className='bg-[#212326] rounded-lg'>
              <div className='p-5'>
                    <p className='text-2xl font-semibold'>{title}</p>
                    <div className='flex my-28 justify-center'><img src={image} className='w-[75%] ' alt="" /></div>
              </div>
              <div className='bg-[#1a1a1bb8] h-[8.7rem] p-5 rounded-b-lg pt-6  text-xl font-semibold'>
                    <span>{content}</span>
            </div>
        </div>
  )
}

export default Card