import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from './homepage/HeroSection'
import SeasonCollections from './homepage/CollectionSection'

const Index = () => {
  return (
    <div className=''>
      <HeroSection />

      <SeasonCollections />
    </div>
  )
}

export default Index
