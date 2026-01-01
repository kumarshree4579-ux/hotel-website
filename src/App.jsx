import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import { About } from './Pages/About'
import AboutUs from './Components/AboutUs'
import Rooms from './Components/Rooms'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <AboutUs/>
    {/* <About/> */}
    <Rooms/>
    </>
  )
}

export default App