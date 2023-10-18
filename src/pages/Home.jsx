import React from 'react'
import Hero from '../components/Hero/Hero'
import Pagination from '../components/pagination/pagination'
const Home = () => {
  return ( 
    <div className='mt-32 p-2 lg:p-2 xl:p-12'>
      <Hero />
      <Pagination/>
    </div>
  )
}

export default Home