import React from 'react'
import  Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/Heroimg2'
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="Info about me"/>
      <Footer/>
    </div>
  )
}

export default About