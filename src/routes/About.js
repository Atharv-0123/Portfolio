import React from 'react'
import  Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/Heroimg2'
import AboutContent from '../components/AboutContent'
import TechStack from '../components/TechStack'
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="Info about me"/>
      <AboutContent/>
      <TechStack/>
      <Footer/>
    </div>
  )
}

export default About