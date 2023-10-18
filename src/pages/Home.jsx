import React from 'react'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Pagination from '../components/pagination/pagination'
import Stat from '../components/stat/stat'
const Home = () => {
  return ( 
    <div className='mt-32'>
      <Hero />
      <Pagination />
      <About />
      <Stat/>
      
    </div>
  )
}

export default Home