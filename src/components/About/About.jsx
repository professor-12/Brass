import React from 'react'
import AboutPagination from '../AboutPaagination/AboutPagination'

const About = () => {
      return (
            <div className='bg-white text-lg   py-20 text-black lg:p-40 md:p-12 p-8'>
                  <div className='space-y-5 w-[28rem]  md:w-[40rem] mx-auto'>
                        <h1 className='text-3xl leading-[1.6] lg:leading-[1.3] tracking-tighter md:text-5xl text-center font-bold'>All the growth needs for your business in one place.</h1>
                        <p className='font-medium sm:text-center'>Best-in-class financial tools and services integrated on one platform connected with your bank account.
                        </p>
                  </div>
                  <AboutPagination/>
                  <div>
                  </div>
            </div>
      )
}

export default About