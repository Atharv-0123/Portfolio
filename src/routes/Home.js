import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import WorkCard from '../components/WorkCard.jsx'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Home