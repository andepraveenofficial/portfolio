/* -----> Third party Packages <-----*/
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

/* -----> External Components <----- */
import Header from './Layouts/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"


/* -----> Component <----- */
const App = () => {
  console.log("App Layout")


  // Return JSX
  return (
    <div className='bg-[#333333] flex flex-col h-screen'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App