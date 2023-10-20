import React, { useState } from 'react'
import { FooterList } from '../../DummyData/utils'
import FooterIItems from './FooterItems/FooterIItems'
import  Index from './FooterItems/index'
const Footer = () => {
      const [selected , setSelected] =  useState(null)
      return (
            <>
            <footer>
                  <div className='md:flex hidden  font-medim justify-between items-start my-12 mx-auto container px-2 md:w-[80%]'>
                        <ul className='space-y-3'>
                              <li className='text-[#50555e]'>support</li>
                              <li>Blog</li>
                              <li>Legal</li>
                        </ul>
                        <ul className='space-y-3'>
                              <li className='text-[#50555e]'>Legal</li>
                              <li>Terms of service</li>
                              <li>Privacy policy</li>
                        </ul>
                        <ul className='space-y-3'>
                              <li className='text-[#50555e]'>Follow</li>
                              <li>Twitter</li>
                              <li>Instagram</li>
                              <li>Facebook</li>
                              <li>Youtube</li>
                        </ul>
                        <ul className='space-y-3'>
                              <li className='text-[#50555e]'>contact</li>
                              <li>+254 753870128</li>
                              <li>hello@brass.co.ke</li>
                              <li>hello@brass.co.ke</li>
                        </ul>

                  </div>
                  <div className='py-10 md:hidden font-medium space-y-6 justify-between items-start my-12 mx-auto container px-6 lg:w-[80%'>
                        {
                              FooterList.map((item , i) => {
                                    return (
                                          <FooterIItems toggle={selected} setToggle={setSelected}  identifier={i + 1} key={item.title} title={item.title} link={item.links} />
                                    )
                              })
                        }
                       

                  </div>

                  </footer>
                  <Index></Index>
                  </>
      )
}

export default Footer