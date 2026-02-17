import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import {Home,About,Contact,Projects} from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <main className='bg-slate-300/20'>
        {/* <h1 className='text-red-600'>Hello world!</h1> */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </main>
    </BrowserRouter>

  )
}

export default App