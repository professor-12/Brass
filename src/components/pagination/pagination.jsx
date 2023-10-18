import { motion, useScroll, useTransform , useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { DummyData } from '../../DummyData/utils'
import Card from '../../UI/card/Card'
import Svg from '../../UI/card/Svg/Svg'
const Pagination = () => {
      const targetScroll = useRef(null)
      const { scrollX } = useScroll({ target: targetScroll })
      useMotionValueEvent(scrollX, "change", (latest) => {
            console.log("Page scroll: ", latest)
      })
      const scroll = useTransform(scrollX, [0, 100], [0, 300])
      const [data] = useState(DummyData)
      const [disable , setdisable] = useState({ left: true, right: false })
      const [paginateindex, setpaginateindex] = useState(0)
      const visible = data[paginateindex]

      const handlepaginateright = () => {
            if (paginateindex == 2) {
                  setdisable({ left: !true, right: !false }); return;
            }
            setpaginateindex((prev) => prev + 1)
      }

      const handlepaginateleft = () => {
            if (paginateindex == 0) {
                  setdisable({ left: true, right: false }); return;
            }
            setpaginateindex((prev) => prev - 1)
      }
      return (
            <section className='mt-20 pb-32 px-4 w-full'>
                  <div>
                        <div>
                               <h1 className='font-bold tracking-tight lg:text-center text-start  mb-8 text-3xl md:text-5xl'>The complete financial stack for your business</h1>
                              <p className='text-sm font-semibold md:text-lg  lg:text-center'>Top-end financial tools to help your business with its financial operations and cash flow.
                              </p>
                              <p className='text-sm font-semibold md:text-lg lg:text-center'>We help companies of all types work better, save time and money with a simply better financial service that works.</p>
                        </div>
                        <section className='mt-12'>
                              <div className='hidden  lg:flex flex-col   overflow-auto' ref={targetScroll}>
                                    <div className='lg:ml-32 w-[110%] flex scroll-child'>
                                          {DummyData.map((item, index) => (
                                                <Card key={index} title={item.title} content={item.content} image={item.img} />
                                          ))}
                                    </div>
                              </div>

                              <div className='hidden lg:flex  items-center space-x-12 mt-20 w-[77%] mx-auto'>
                                    <div className='flex-1'>
                                          <div className='bg-[#212326]  rounded-lg'>
                                                <motion.div style={{ x: scroll }} className='bg-white h-full relative  py-2 rounded-lg w-[60%]'></motion.div>
                                          </div>
                                    </div>

                                    <div>
                                          <div className='flex space-x-6 justify-between px-1'>
                                                <Svg h="60" style={`rotate-180   cursor-pointer`} onclick={handlepaginateleft} />
                                                <Svg h="60" style={''} onclick={handlepaginateright} />
                                          </div>
                                    </div>

                              </div>
                              <div className='p-8  lg:hidden'>
                                    <Card title={visible.title} content={visible.content} image={visible.img} />
                              </div>
                              <div className='flex justify-between px-1 lg:hidden'>
                                    <Svg style={`rotate-180  cursor-pointer`} w='32' h='32' onclick={handlepaginateleft} />
                                    <Svg style={''} w='32' onclick={handlepaginateright} />
                              </div>
                        </section>
                  </div>
            </section>
      )
}

export default Pagination