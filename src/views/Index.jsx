import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from './homepage/HeroSection'
import SeasonCollections from './homepage/ServicesSection'
import OurProducts from './homepage/OurProduct'
import AboutSection from './homepage/AboutSection'

const Index = () => {
  return (
    <div className=''>

      <HeroSection />
      <OurProducts />

      <ServicesSection />
      <AboutSection />
    </div>
  )
}

export default Index
