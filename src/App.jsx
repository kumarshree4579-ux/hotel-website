import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import { About } from './Pages/About'
import AboutUs from './Components/AboutUs'
import Rooms from './Components/Rooms'
import Testimonials from './Components/Testimonials'
import Facilities from './Components/Facilities'
import ExperienceVid from './Components/ExperienceVid'
import Gallery from './Components/Gallery'
import LocalActivities from './Components/LocalActivities'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <AboutUs/>
    <Testimonials/>
    <Rooms/>
    <Facilities/>
    <ExperienceVid/>
    <Gallery/>
    <LocalActivities/>
    
    {/* <About/> */}

    </>
  )
}

export default App