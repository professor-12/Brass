import React from 'react'

const Hero = () => {
      return (
            <section className='w-full lg:px-4 p-4 lg:container mx-auto lg:w-[78%]'>
                  <div className='flex  md:flex-row  flex-col-reverse md:space-x-8 items-center justify-between'>
                        <div className='space-y-6 mt-12 md:mt-0 md:w-[80%]'>
                              <h1 className='text-5xl  sm:text-5xl lg:text-6xl tracking-wide lg:leading-[1] lg:font-bold font-semibold'>The growth patner for your business</h1>
                              <p className='text-lg'>Do more with a Brass account that comes with top-end financial tools and integrations to help grow your business.
                              </p>
                              <br /> 
                              <button className='md:py-[14px]  fixed md:static bottom-0 right-0 p-8  left-0 md:px-[32px] text-sm font-medium z-10 md:bg-green-500/90 bg-green-500 md:hover:bg-green-500/80 md:rounded '>join the waiting list</button>
                        </div>
                       
                              <img src=" https://brass.co.ke/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Fhero-image.37faa7f5.png?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image.37faa7f5.png&w=640&q=75" className="w-[100%] md:w-[50%]"   alt="" />
                       
                  </div>
            </section>
      )
}

export default Hero