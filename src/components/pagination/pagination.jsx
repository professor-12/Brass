import { motion, useScroll , useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { DummyData } from '../../DummyData/utils'
import Card from '../../UI/card/Card'
import Svg from '../../UI/card/Svg/Svg'
const Pagination = () => {
      const [data] = useState(DummyData)
      const [disable , setdisable] = useState({ left: true, right: false })
      const [paginateindex, setpaginateindex] = useState(0)
      const visible = data[paginateindex]

      const ref = useRef(null)
      const { scrollYProgress, scrollY, scrollX } = useScroll(ref)
      const xaxxis = useTransform(scrollX , [10 , 30] , [1,100])
      console.log(scrollYProgress)

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
                        <motion.section className='mt-12'>
                              <motion.div ref={ref} className='hidden  lg:flex flex-col   overflow-auto' >
                                    <motion.div ref={ref} className='lg:ml-32 w-[110%] flex scroll-child'>
                                          {DummyData.map((item, index) => (
                                                <Card key={index} title={item.title} content={item.content} image={item.img} />
                                          ))}
                                    </motion.div>
                              </motion.div>



                              <div className='hidden lg:flex  items-center mt-20 w-[77%] mx-auto'>
                                    <div className='flex-1'>
                                          <motion.div  className='bg-[#212326]  rounded-lg'>
                                                <motion.div style={{ x: xaxxis }} className='bg-white h-full relative py-2 rounded-lg w-[60%]'></motion.div>
                                          </motion.div>
                                    </div>

                                    <div>
                                          <div className='flex space-x-6 justify-between px-1'>
                                                <Svg h="60" style={`rotate-180   cursor-pointer`} onclick={handlepaginateleft} />
                                                <Svg h="60" style={''} onclick={handlepaginateright} />
                                          </div>
                                    </div>

                              </div>
                              <div className='p-6  lg:hidden'>
                                    <Card title={visible.title} content={visible.content} image={visible.img} />
                              </div>
                              <div className='flex justify-between px-1 lg:hidden'>
                                    <Svg style={`rotate-180  cursor-pointer`} w='32' h='32' onclick={handlepaginateleft} />
                                    <Svg style={''} w='32' onclick={handlepaginateright} />
                              </div>
                        </motion.section>
                  </div>
            </section>
      )
}

export default Pagination