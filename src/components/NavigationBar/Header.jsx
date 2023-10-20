import React from 'react'
import { motion } from 'framer-motion'
export const Header = () => {
      return (
            <div className='fixed z-50 right-0 top-0 left-0  bg-black'>
                  <div className='flex bg-black relative  left-0 container   px-7  lg:w-[86.8%] mx-auto items-center p-4 justify-between'>
                        <div className=''>
                              <img src="/logo.svg" alt="" />
                        </div>
                        <div className='flex items-center space-x-4'>
                              <motion.button className='py-[14px] px-[32px] text-sm text-green-600 md:text-white font-medium md:bg-green-500/90 md:hover:bg-green-500/80 rounded '><a href="#join">join the waiting list</a></motion.button>
                              <div className='countrylogo relative right-0 h-auto'>
                                    <img src="/country.svg" className='w-8 countrylogo ' alt="" />
                                    <div className='popup countrylogo hidden absolute overflow-hidden right-1     rounded-lg w-28 text-black flex-col'>
                                          <div className='flex flex-col rounded-lg my-2  bg-white'>

                                                <span className='hover:bg-slate-400/20 p-3 flex font-semibold items-center  w-full'>
                                                      <span className='mr-2'>
                                                            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 0H.5a.5.5 0 0 0-.5.5V14a.5.5 0 0 0 .5.5h20a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5Z" fill="#008751"></path><path d="M14 0H7v14.5h7V0Z" fill="#fff"></path></svg>
                                                      </span>  Nigeria</span>
                                                <span className='hover:bg-slate-400/20 p-3 flex font-semibold items-center'>

                                                      <span className='mr-3'>
                                                            <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M0 9.293h21v4.224c0 .2-.162.362-.362.362H.362A.362.362 0 0 1 0 13.517V9.293Z" fill="#73AF00"></path><path d="M.362.12h20.276c.2 0 .362.163.362.363v4.224H0V.483C0 .283.162.12.362.12Z" fill="#464655"></path><path d="M21 4.707H0v4.586h21V4.707Z" fill="#C8414B"></path><g fill="#F5F5F5"><path d="M21 4.466H0v.724h21v-.724ZM21 8.81H0v.725h21V8.81Z"></path><path d="M12.439 3.95c.291-.602.595-1.994.595-1.994s-.905 1.1-1.197 1.702a.333.333 0 0 0 .054.369L8.57 10.874l.225.109 3.321-6.847a.333.333 0 0 0 .323-.187Z"></path><path d="M8.561 3.95c-.291-.602-.595-1.994-.595-1.994s.905 1.1 1.196 1.702a.333.333 0 0 1-.053.369l3.321 6.847-.225.109-3.321-6.847a.333.333 0 0 1-.323-.187Z"></path></g><path d="M12.31 7c0 2-1.477 3.62-1.81 3.62-.333 0-1.81-1.62-1.81-3.62s1.477-3.62 1.81-3.62c.333 0 1.81 1.62 1.81 3.62Z" fill="#C8414B"></path><g fill="#464655"><path d="M11.948 8.747A4.606 4.606 0 0 0 12.31 7c0-.634-.149-1.229-.362-1.747A4.608 4.608 0 0 0 11.586 7c0 .634.149 1.229.362 1.747ZM9.052 5.253A4.607 4.607 0 0 0 8.69 7c0 .634.148 1.229.362 1.747A4.607 4.607 0 0 0 9.414 7c0-.634-.149-1.229-.362-1.747Z"></path></g><g fill="#F5F5F5"><path d="M10.5 7.543c.2 0 .362-.243.362-.543 0-.3-.162-.543-.362-.543-.2 0-.362.243-.362.543 0 .3.162.543.362.543ZM10.554 3.38v3.077c.099-.206.274-.813.274-1.539s-.175-1.333-.274-1.539ZM10.446 3.38c-.099.205-.274.812-.274 1.538s.175 1.334.274 1.539V3.379ZM10.554 7.543v3.077c.099-.205.274-.812.274-1.538s-.175-1.334-.274-1.539ZM10.446 7.543c-.099.205-.274.813-.274 1.539s.175 1.333.274 1.538V7.543Z"></path></g></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h21v14H0z"></path></clipPath></defs></svg>
                                                      </span>

                                                      Kenya</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
