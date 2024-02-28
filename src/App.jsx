/* -----> Third party Packages <-----*/
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

/* -----> External Components <----- */
import Home from './Pages/Home'
import Header from './Layouts/Header'
import About from './Pages/About'


/* -----> Component <----- */
const App = () => {
  console.log("App Layout")


  // Return JSX
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App