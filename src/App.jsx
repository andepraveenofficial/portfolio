/* -----> Third party Packages <-----*/
import { BrowserRouter, Route, Routes } from "react-router-dom"

/* -----> External Components <----- */
import Header from './Layouts/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"

/* -----> Features <----- */
import Cursor from './Features/Cursor'
import Colors from './Features/BackgroundEffects/Colors'


/* -----> Component <----- */
const App = () => {
  console.log("App Layout")


  // Return JSX
  return (
    <div className='flex flex-col h-screen '>
      <Cursor />
      <Colors />
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