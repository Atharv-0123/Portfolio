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
            <p>Welcome to my Portfolio</p>
            <h1>Atharva Khangar</h1>
            <div>
                <Link to="/projects" className='btn'>Projects</Link>
                <Link to="https://docs.google.com/document/d/1WJBv3esqlEyJvcK2gBjrakfPWlGdpuIX/edit?usp=sharing&ouid=109277615199297108362&rtpof=true&sd=true" className='btn-light' target="_blank" rel="noopener noreferrer">Resume</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg
