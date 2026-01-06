import React from 'react'
import background from "../assets/background.png"
import Hero from '../components/Hero'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <section className='hero bg-top'>
        <Hero/>
        <Cards/>  
    </section>
  )
}

export default Home