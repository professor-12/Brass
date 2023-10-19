import React from 'react'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import Pagination from '../components/pagination/pagination'
import Stat from '../components/stat/stat'
import RelatedPost from '../components/RelatedPost/RelatedPost'
import Accordion from '../components/Accordion/Accordion'
import Newslatter from '../components/NewsLetter/Newslatter'
import Footer from '../components/Footer/Footer'
const Home = () => {
  return ( 
    <div className='mt-32'>
      <Hero />
      <Pagination />
      <About />
      <Stat />
      <RelatedPost />
      <Accordion />
      <Newslatter />
      <Footer/>
    </div>
  )
}

export default Home