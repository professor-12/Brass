import React  from 'react'
import { useAnimate, motion } from 'framer-motion'
import { list } from 'postcss'

const AccordionItem = ({ setToggle, identifier, toggle , data , list }) => {

      const [scope, animate] = useAnimate()
      const HandleToggle = () => {
            if (identifier == toggle) {
                  animate("svg",{rotate:0},{duration:.5})
                  setToggle(null)
                  return;
            }
            animate("svg",{rotate:-180},{duration:.5})
            setToggle(identifier)
      }


      return (
            <div style={{ background: `${toggle == identifier ? "rgb(26, 28, 31)" : "black"}` }} onClick={() => { HandleToggle() }} className={`${toggle == identifier && 'bg-[#151518]'} py-10  w-full cursor-pointer  px-3 border-[#393939] border-b`}>
                  <div className='space-y-4 font-semibold !w-[100%] flex flex-col'>
                        <div className='flex justify-between'><div className='font-bold '>{data.title}</div> <div ref={scope}>
                              <motion.svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                              </motion.svg>
                        </div></div>
                        <div>
                        {toggle == identifier && data.content.map((item) => <li className={`${list == "none" ? "list-none" : "list-disc" }`}>{item}</li> )}

                        </div>
                  </div>
            </div>
      )
}

export default AccordionItem