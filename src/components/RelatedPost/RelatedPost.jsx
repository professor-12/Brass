import React from 'react'

const RelatedPost = () => {
      return (
            <section className='py-40'>
                  <div className='space-y-6'>
                        <h1 className='font-bold text-center text-4xl'>Related posts to get you started</h1>
                        <p className='text-center md:w-[45%] mx-auto'>We have partnered with businesses on the same mission as ours to help local businesses. We have also added resources you need to start, run and grow your business.</p>


                        <div className='flex gap-8 mx-auto flex-wrap  lg:w-[80%] justify-center'>
                              <div style={{ background: "rgb(26, 28, 31)" }} className='bg-[]  w-[25rem] rounded-xl'>
                                    <img className='w-full' src="https://brass.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frelated-post-starting.04b17918.png&w=384&q=75" alt="" />
                                    <div className='p-4 pb-12'>
                                          <h1 className='font-semibold text-xl'>Starting a business with limited capital</h1>
                                          <p className='font-semibold'>Every business needs a separate account</p>
                                    </div>
                              </div>
                              <div style={{ background: "rgb(26, 28, 31)" }} className='bg-[]  w-[25rem] rounded-xl'>
                                    <img className='w-full' src="https://brass.co.ke/_ipx/w_384,q_75/%2F_next%2Fstatic%2Fmedia%2Frelated-post-five-things.cd17dd28.png?url=%2F_next%2Fstatic%2Fmedia%2Frelated-post-five-things.cd17dd28.png&w=384&q=75" alt="" />
                                    <div className='p-4 pb-12'>
                                          <h1 className='font-semibold text-xl'>Five things you should consider before..</h1>
                                          <p className='font-semibold'>How to figure out the right business idea for you</p>
                                    </div>
                              </div>
                              <div style={{ background: "rgb(26, 28, 31)" }} className='bg-[]  w-[25rem] rounded-xl'>
                                    <img className='w-full' src="https://brass.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frelated-post-starting.04b17918.png&w=384&q=75" alt="" />
                                    <div className='p-4 pb-12'>
                                          <h1 className='font-semibold text-xl'>Marketing for small Businesses</h1>
                                          <p className='font-semibold'>Every business needs a separate account</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default RelatedPost