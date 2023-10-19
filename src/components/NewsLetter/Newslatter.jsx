import React from 'react'

const Newslatter = () => {
      return (
            <div className='pb-40 p-2 space-y-12'>
                  <div className='md:w-[45rem] mx-auto space-y-4 text-center '>
                        <h1 className='text-3xl mx-auto md:text-4xl xl:text-4xl font-bold'>Get started for free</h1>
                        <p className="md:font-[500] text-sm  md:w-[45rem] font-semibold mx-auto  leading-6 md:text-base">Get all the best financial products for your business growth for free. Open the last financial tool you will ever need for your business.</p>
                  </div>


                  <form  className='w-full'>
                        <div className='flex flex-col md:flex-row  md:space-x-2  md:space-y-0 space-y-4 md:w-[40rem] mx-auto px-4'>
                              <input className='bg-[#1a1c1f] flex-1 outline-none border rounded-md border-[#393c41] px-3 p-2 text-base' type="text" name="" id=""  placeholder='Email address'/>
                              <button className='bg-[#0bce5a] p-1 font-semibold px-6 py-3  text-sm rounded'> Join the waiting list</button>

                        </div>
                  </form>
            </div>
      )
}

export default Newslatter