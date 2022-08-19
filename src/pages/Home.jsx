import React from 'react'
import TopNav from '../components/TopNav/TopNav'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import Impact from '../components/Impact/Impact'
import Partners from '../components/Partners/Partners'
import Slider from '../components/Slider/Slider'
import InsightsSection from '../components/InsightsSection/InsightsSection'
import Newsletter from '../components/Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
        <TopNav />
        <NavBar />
        <Hero />
        <Impact />
        <Partners />
        <Slider />
        <InsightsSection />
        <Newsletter />
    </div>
  )
}

export default Home
