import React, { useRef } from 'react'
import { FooterList } from '../../../DummyData/utils'
import { motion, useAnimate } from "framer-motion"
const FooterIItems = ({ title, link, setToggle, toggle , identifier }) => {
      const ref = useRef()

      const [scope, animate] = useAnimate()
      const HandleToggle = () => {
            if (identifier == toggle) {
                  animate("svg", { rotate: 0 }, { duration: .5 })
                  setToggle(null)
                  return;
            }
            animate("svg", { rotate: -180 }, { duration: .5 })
            setToggle(identifier)
      }
      return (

                  <ul  onClick={HandleToggle}  className='space-y-4 cursor-pointer'>
                        <div ref={scope} className='text-[#50555e] flex justify-between items-center'>{title}
                              <span className='text-white'><motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                              </motion.svg></span>
                        </div>
                        {
                           toggle == identifier &&  link.map((item, i) => (
                                    <li key={i}>
                                          {item}
                                    </li>
                              ))
                        }
                  </ul>
      )
}

export default FooterIItems