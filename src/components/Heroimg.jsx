import React from 'react';
import '../styles/Heroimg.css';
import IntroImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className='hero'>
      <div className='mask'></div>
      <img className="intro-img" src={IntroImg} alt="intro-img" />
      <div className='content'>
            <p>HI! I AM A DEVELOPER</p>
            <h1>REACT DEVELOPER</h1>
            <div>
                <Link to="/projects" className='btn'>Projects</Link>
                <Link to="/contact" className='btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg