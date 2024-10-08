import { Link } from 'react-router-dom'
import '../styles/AboutContent.css'
import React from 'react'
// import aboutImage from '../assets/bg3.png'
const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who am I?</h1>
            <p>An AI & Data Science engineering graduate passionate about exploring and working with a wide range of emerging technologies including web development, AI, machine learning, and data science.</p>
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