import React, { useEffect, useState, useCallback } from 'react'
import { VideoData } from '../../DummyData/utils'

const AboutPagination = () => {
      const [videoDataindex, setvideoDataindex] = useState(0)
      const numberofButton = [1,2,3,4,5,6]
      const video = VideoData[videoDataindex]
      const staticvideo = VideoData[3].videouRL
      const handleslideShow = useCallback(() => {
            if (videoDataindex >= 5) {
                  setvideoDataindex(0)
            }
            else if (videoDataindex < 5) {
                  setvideoDataindex((prev) => prev + 1)
            }
            else {
                  setvideoDataindex(0)
            }
      })

      useEffect(() => {
            const away = setTimeout(() => {
                  handleslideShow()
            }, 2000)
            
            return () => {
                  clearTimeout(away)
            }
      })
      return (
            <section className='mt-12 mx-auto'>
                  {/* Desktop */}
                  <div className='hidden lg:grid   p-6 grid-cols-1 xl:grid-cols-2 w-[80%] mx-auto gap-20'>

                        {
                              VideoData.map((item) => {
                                    return (
                                          <div key={item.videouRL} className='border  min-h-[34rem] rounded-2xl border-gray-300/60 pb-8'>
                                                <video src={item.videouRL} className='rounded-t-xl w-full' preload autoPlay loop muted ></video>

                                                <div className='text-center space-y-4  mt-12 mx-auto'>
                                                      <h2 className='text-3xl font-semibold'>{item.title}</h2>
                                                      <p className='font-medium w-[80%] mx-auto text-lg'>{item.content}

                                                      </p>                                     </div>
                                          </div>
                                    )
                              })
                        }
                  </div>

                  {/* Mobile View */}
                  <div className='lg:hidden flex justify-center space-y-8 flex-col mx-auto'>
                        <div className='border mx-auto md:w-[20rem]  w-full min-h-[34rem] rounded-2xl border-gray-300/60 pb-8'>
                              <video src={staticvideo} className='rounded-t-xl w-full' preload autoPlay loop muted ></video>

                              <div className='text-center space-y-4  mt-12 mx-auto'>
                                    <h2 className='md:text-3xl text-xl  font-semibold'>{video.title}</h2>
                                    <p className='md:font-medium w-[80%] text-base mx-auto md:text-lg'>{video.content}
                                    </p>                                            </div>
                        </div>


                        <div className='space-x-3 flex justify-center'>
                              {
                                    numberofButton.map((i, index) => (
                                          <button onClick={() => { setvideoDataindex(index) }} className={`w-3 h-3 ${i === videoDataindex + 1 ? 'bg-black' : 'bg-gray-300'} rounded-full `}></button>

                                    ))
                              }

                        </div>
                  </div>

            </section>
      )
}

export default AboutPagination