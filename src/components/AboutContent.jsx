import { Link } from 'react-router-dom'
import '../styles/AboutContent.css'
import React from 'react'
// import aboutImage from '../assets/bg3.png'
const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who am I?</h1>
            <p>I am an AI & Data Science engineering graduate who loves to work on all kinds of new technologies like web development, AI, Machine Learning, Data science.</p>
            <Link to='/contact' className='btn'>
                 Contact Me
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                
            </div>
        </div>
    </div>
  )
}

export default AboutContent