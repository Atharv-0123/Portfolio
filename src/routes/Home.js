import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
// import WorkCard from '../components/WorkCard.jsx'
import AboutContent from '../components/AboutContent.jsx'
import TechStack from '../components/TechStack.jsx'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <AboutContent/>
      <TechStack/>
      <Footer/>
    </div>
  )
}

export default Home