import React from 'react'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Pagination from '../components/pagination/pagination'
const Home = () => {
  return ( 
    <div className='mt-32'>
      <Hero />
      <Pagination />
      <About/>
    </div>
  )
}

export default Home