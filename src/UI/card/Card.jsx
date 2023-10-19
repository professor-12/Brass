import React from 'react'

const Card = ({ title, content, image }) => {
      return (
            <div className=''>
                  <div className='rounded-lg  w-[100%] lg:ml-10  mx-auto lg:w-[30rem]  bg-[#212326]  justify-between flex flex-col  h-[32rem] lg:h-[40rem]'>
                        <p className='text-2xl m-4 lg:text-3xl font-semibold'>{title}</p>
                        <div className='flex  items-center justify-center'>
                              <img src={image} className='w-full md:w-[17rem] lg:w-[15rem]' alt="" />
                        </div>
                        <div className='bg-[#1a1a1bb8]   lg:text-3xl  p-5 rounded-b-lg pt-6   text-xl font-semibold'>
                              <span>{content}</span>
                        </div>
                  </div>
            </div>
      )
}

export default Card