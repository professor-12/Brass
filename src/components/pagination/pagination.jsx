import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { DummyData } from '../../DummyData/utils'
import Card from '../../UI/card/Card'
import Svg from '../../UI/card/Svg/Svg'
const Pagination = () => {
      const [data] = useState(DummyData)
      const [disable, setdisable] = useState({ left: true, right: false })
      const [paginateindex, setpaginateindex] = useState(0)
      const visible = data[paginateindex]


      const containerref = useRef()

      const { scrollY, scrollX } = useScroll(containerref)
      const x = useTransform(scrollX, [0, 200], [0 , 10])



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
            <section  className='mt-20 pb-32 px-4 relative w-full'>
                  <div>
                        <div>
                              <h1 className='font-bold tracking-tight lg:text-center text-start  mb-8 text-[2rem] md:text-5xl'>The complete financial stack for your business</h1>
                              <p className='text-sm font-semibold md:text-lg  lg:text-center'>Top-end financial tools to help your business with its financial operations and cash flow.
                              </p>
                              <p className='text-sm font-semibold md:text-lg lg:text-center'>We help companies of all types work better, save time and money with a simply better financial service that works.</p>
                        </div>
                        <motion.section className='mt-12'>
                              <motion.div  className='hidden scroll lg:flex flex-col overflow-hidden overflow-x-scroll' >
                                    <div  className='lg:ml-32 w-[110%]  flex'>
                                          {DummyData.map((item, index) => (
                                                <Card key={index} title={item.title} content={item.content} image={item.img} />
                                          ))}
                                    </div>
                                    
                                    <div className='hidden lg:flex  items-center  bottom-12 mx-auto space-x-12 absolute w-[77%] left-40'>
                                          <div className='flex-1'>

                                                <motion.div className='bg-[#212326]  rounded-lg'>
                                                      <motion.div style={{ x:x }} className='bg-white h-full  py-2 rounded-lg w-[60%]'></motion.div>
                                                </motion.div>
                                          </div>

                                          <div>
                                                <div className='flex space-x-6 justify-between px-1'>
                                                      <Svg h="60" style={`rotate-180   cursor-pointer`} onclick={handlepaginateleft} />
                                                      <Svg h="60" style={'cursor-pointer'} onclick={handlepaginateright} />
                                                </div>
                                          </div>

                                    </div>
                              </motion.div>


                              <div className='lg:hidden'>
                                    <Card title={visible.title} content={visible.content} image={visible.img} />
                              </div>
                              <div className='flex justify-between px-1 mt-4 lg:hidden'>
                                    <Svg style={`rotate-180  cursor-pointer`} w='32' h='32' onclick={handlepaginateleft} />
                                    <Svg style={''} w='32' onclick={handlepaginateright} />
                              </div>
                        </motion.section>
                  </div>
            </section>
      )
}

export default Pagination