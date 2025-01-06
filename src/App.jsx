import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './views/Index'
import Navbar from './components/Navbar'
import ContactUs from './views/ContactUs'
import Footer from './components/Footer'
import ShawlProducts from './views/productpage/Shawls';
// import Scarfs from './Scarfs';
import ProductDetail from './views/productpage/ProductDetail';

function App() {
  


  return (
  
  <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shawls" element={<ShawlProducts />} />
          {/* <Route path="/scarfs" element={<Scarfs />} /> */}
          <Route path="/:cat/:id" element={<ProductDetail />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      <Footer />
      </BrowserRouter>
      </>
  )
}

export default App
