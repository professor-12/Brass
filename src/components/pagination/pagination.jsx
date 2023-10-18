import React, { useEffect } from 'react'
import { useState } from 'react'
import { DummyData } from '../../DummyData/utils'
import Card from '../../UI/card/Card'
const Pagination = () => {
      const [data, setData] = useState(DummyData)
      const [disable, setdisable] = useState({ left: true, right: false })
      const [paginateindex, setpaginateindex] = useState(0)
      const visible = data[paginateindex]
      const handlepaginateright = () => {
            if (paginateindex == 2) {
                  setdisable({ left: !true, right: !false })
                  return;
            }
            setpaginateindex((prev) => prev + 1)
            console.log(paginateindex)
      }

      const handlepaginateleft = () => {
            if (paginateindex == 0) {
                  setdisable({ left: true, right: false })
                  return;
            }
            setpaginateindex((prev) => prev - 1)
            console.log(paginateindex)
      }
      return (
            <section className='mt-20 w-full'>
                  <div>
                        <div className=''>
                              <h1 className='font-semibold tracking-tight md:text-center mb-8 text-3xl md:text-5xl'>The complete financial stack for your business</h1>
                              <p className='text-sm md:text-lg md:text-center'>Top-end financial tools to help your business with its financial operations and cash flow.
                              </p>
                              <p className='text-sm md:text-lg md:text-center'>We help companies of all types work better, save time and money with a simply better financial service that works.</p>
                        </div>
                        <section>
                              <div className='p-8 hidden md:flex space-y-6 md:space-y-0 md:space-x-4  overflow-auto'>
                                    <Card />
                                    <Card />
                                    <Card />
                              </div>
                              <div className='p-8 md:hidden space-y-6 md:space-y-0 md:space-x-4 flex-1 overflow-auto'>
                                    <Card title={visible.title} content={visible.content} image={visible.img} />
                              </div>

                              <div className='flex justify-between'>
                                    <svg width="32" onClick={handlepaginateleft} height="32" className='rotate-180 cursor-pointer' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="15.5" stroke="#E9EBEC"></circle><path d="M11.286 16h9.429M16.857 12.144 20.715 16l-3.858 3.857" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                                    <svg width="32" onClick={handlepaginateright} height="32" className='cursor-pointer' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="15.5" stroke="#E9EBEC"></circle><path d="M11.286 16h9.429M16.857 12.144 20.715 16l-3.858 3.857" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                              </div>
                        </section>
                  </div>
            </section>
      )
}

export default Pagination