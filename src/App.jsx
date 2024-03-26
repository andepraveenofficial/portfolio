/* -----> Third party Packages <-----*/
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"

/* -----> Redux Store <----- */
import appStore from './Store/appStore'
import { Provider } from 'react-redux'

/* -----> External Components <----- */
import Header from './Layouts/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import Learning from "./Pages/Learning"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"

/* -----> Features <----- */
import Cursor from './Features/Cursor'
// import BackgroundEffects from "./Features/BackgroundEffects"
const BackgroundEffects = lazy(() => import("./Features/BackgroundEffects"))

/* -----> Styles <----- */
import './App.css';

/* -----> Component <----- */
const App = () => {
  console.log("App Layout")


  // Return JSX
  return (
    < Provider store={appStore} >
      <div className='flex flex-col h-screen bg-[#333333]'>

        <BrowserRouter>
          <Header />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Cursor />
        <Suspense>
          <BackgroundEffects />
        </Suspense>
      </div>
    </Provider >
  )
}

/* -----> Export <----- */
export default App