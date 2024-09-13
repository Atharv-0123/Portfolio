import { Link } from 'react-router-dom'
import '../styles/AboutContent.css'

import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1> Who am I?</h1>
            <p>I am a a developer</p>
            <Link to='/contact'>
                <button> Contact me</button>
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