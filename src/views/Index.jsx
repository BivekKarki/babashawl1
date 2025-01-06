import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from './homepage/HeroSection'
import ServicesSection from './homepage/ServicesSection'
import OurProducts from './homepage/OurProduct'
import AboutSection from './homepage/AboutSection'

const Index = () => {
  return (
    <div className='font-poppins '>

      <HeroSection />
      <OurProducts />

      <ServicesSection />
      <AboutSection />
    </div>
  )
}

export default Index
