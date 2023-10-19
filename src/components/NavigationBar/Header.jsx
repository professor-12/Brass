import React from 'react'
import { motion } from 'framer-motion'
export const Header = () => {
      return (
            <div className='fixed z-50 right-0 top-0 left-0  bg-black'>
                  <div className='flex bg-black relative  left-0 container   px-4  lg:w-[86.8%] mx-auto items-center p-4 justify-between'>
                        <div className=''>
                              <img src="/logo.svg" alt="" />
                        </div>
                        <div className='flex items-center space-x-4'>
                              <motion.button className='py-[14px]  px-[32px] text-sm text-green-600 md:text-white font-medium md:bg-green-500/90 md:hover:bg-green-500/80 rounded '>join the waiting list</motion.button>
                              <div className='countrylogo relative right-0 h-9'>
                                    <img src="/country.svg" className='w-8' alt=""  />
                                    <div className='popup hidden relative overflow-hidden right-1  bg-white left-0   bottom-0  space-y-4 py-5 rounded-lg p-3 w-28 text-black flex-col'>
                                          <span>   Nigeria</span>
                                          <span>  Kenya</span>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
