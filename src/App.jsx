import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Event from "./Pages/Events/Event"
import Contact from "./Pages/Contact/Contact"
import OurTeam from "./Pages/Teams/OurTeam"
import Footer from "./Components/Footer/Footer"

import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<OurTeam />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>


  )
}

export default App
