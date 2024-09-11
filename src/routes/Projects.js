import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import '../components/WorkCard.jsx'
import WorkCard from '../components/WorkCard.jsx'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="Some of my works"/>
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Projects