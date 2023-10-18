import React from 'react'
import { motion } from 'framer-motion'
export const Header = () => {
      return (
            <nav className='bg-black'>
                  <div className='flex bg-black fixed top-0 right-0  left-0 container   px-8 lg:px-0 lg:w-[80%] mx-auto items-center p-4 justify-between'>
                        <div className=''>
                              <img src="/logo.svg" alt="" />
                        </div>
                        <div className='flex items-center space-x-4'>
                              <motion.button className='py-[14px] px-[32px] text-sm font-medium bg-green-500/90 hover:bg-green-500/80 rounded '>join the waiting list</motion.button>
                              <div className='countrylogo relative right-0 h-9 bg-red-500'>
                                    <img src="/country.svg" className='w-8' alt=""  />
                                    <div className='popup relative overflow-hidden right-1  bg-white left-0   bottom-0  space-y-4 py-5 rounded-lg p-3 w-28 text-black flex-col'>
                                          <span>   Nigeria</span>
                                          <span>  Kenya</span>
                                    </div>
                              </div>
                        </div>
                  </div>
            </nav>
      )
}
