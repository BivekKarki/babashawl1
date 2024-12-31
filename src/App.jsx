import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './views/Index'

function App() {
  


  return (
  
  <>
  <p className='text-red-600 w-10 m-auto'> Hellooo</p>
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      
      </BrowserRouter>
      </>
  )
}

export default App
