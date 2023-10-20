import React from 'react'

const Stat = () => {
      return (
            <div className='py-32'>
                  <div className='text-center space-y-6 lg:w-[45rem] mx-auto'>
                        <h1 className='text-3xl p-2  md:text-4xl xl:text-5xl font-bold'>The best decision you will make for your business today</h1>
                        <p className="md:font-[500] font-[400] md:text-lg">We are very open and transparent with our customers. So open that we’ve published a pricing table with all the information you need.</p>
                  </div>
                  <div className='mx-auto px-4 lg:w-[80%] p-2 md:mt-12  mb-40'>
                        <h1 className='text-xl mb-10 md:text-xl xl:text-[1.3rem] font-semibold'>Outgoing payments</h1>


                        <div className='hidden lg:flex'>
                              <table className='table-fixed  overflow-hidden lg:h-auto w-full '>
                                    <tr className='h-[4rem] bg-[#131416]'>
                                          <th className='text-left'></th>
                                          <th className='text-left'>To</th>
                                          <th className='text-left'>What you pay in KES</th>
                                          <th className='text-left'>Additional charges</th>
                                    </tr>
                                    <tr className='h-[4rem] border-b-2 border-[#202025]'>
                                          <th className='text-left'>Mobile money</th>
                                          <td className='text-left'>M-PESA, Airtel money</td>
                                          <td className='text-left'>What you pay in KES</td>
                                          <td className='text-left'>Standard MPESA / Airtel Charges</td>
                                    </tr>
                                    <tr className='h-[4rem] border-b-2 border-[#202025]'>
                                          <th className='text-left'>Bank transfers</th>
                                          <td className='text-left'>All banks</td>
                                          <td className='text-left'>50</td>
                                          <td className='text-left'>Standard Bank Charges</td>
                                    </tr>
                                    <tr></tr>
                                    <tr></tr>
                              </table>
                        </div>


                        <div className='lg:hidden'>
                              <div className='flex justify-between'>
                                    <div>
                                          <h1>Mobile Money</h1>
                                          <p>Standard MPESA / Airtel Charges</p>
                                    </div>
                                    <div>
                                          <h1>
                                                Bank transfers
                                          </h1>
                                          <p>Standard Bank Charges</p>
                                    </div>
                              </div>
                              <div></div>
                        </div>
                  </div>
                  <div className='mx-auto w-full px-4 lg:w-[80%]'>
                        <h1 className='text-xl mb-10 md:text-xl xl:text-[1.3rem] font-semibold'>Incoming payments</h1>


                        <table className='table-fixed w-full '>
                              <tr className='h-[4rem] bg-[#131416]'>
                                    <th className='text-left'></th>
                                    <th className='text-left'>From</th>
                                    <th className='text-left'>What you pay</th>
                                    <th className='text-left'>What your customers pay</th>
                              </tr>
                              <tr className='h-[4rem]'>
                                    <th className='text-left'>Mobile money</th>
                                    <td className='text-left'>M-PESA, Airtel money</td>
                                    <td className='text-left'>0.5% of transaction amount</td>
                                    <td className='text-left'>Standard MPESA / Airtel Charges</td>
                              </tr>
                              <tr className='h-[4rem] border-b border-[#202025]'>
                                    <th className='text-left'></th>
                                    <td className='text-left'>Airtel money</td>
                                    <td className='text-left'>1% of transaction amount	</td>
                                    <td className='text-left'>-</td>
                              </tr>
                              <tr className='h-[4rem] border-b border-[#202025]'>
                                    <th className='text-left'>Local cards</th>
                                    <td className='text-left'>VISA, MasterCard</td>
                                    <td className='text-left'>2.50%</td>
                                    <td className='text-left'>-</td>
                              </tr>
                              <tr className='h-[4rem]'>
                                    <th className='text-left'>International cards</th>
                                    <td className='text-left'>VISA, MasterCard</td>
                                    <td className='text-left'>3.25%</td>
                                    <td className='text-left'>-</td>
                              </tr>
                              <tr className='h-[4rem]  '>
                                    <th className='text-left'></th>
                                    <td className='text-left'>AMEX</td>
                                    <td className='text-left'>3.80%</td>
                                    <td className='text-left'>-</td>
                              </tr>
                        </table>
                  </div>
                  <div></div>
            </div>
      )
}

export default Stat