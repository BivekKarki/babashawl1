import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './views/Index'
import Navbar from './components/Navbar'
import ContactUs from './views/ContactUs'
import Footer from './components/Footer'

function App() {
  


  return (
  
  <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      </>
  )
}

export default App
