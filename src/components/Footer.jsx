import React from 'react'
import '../styles/Footer.css'
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone,FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <p>Vashi, Navi Mumbai</p>
          </div>
          <div className='phone'>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <p>+91 9702907829</p>
          </div>
          <div className='email'>
            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <p>atharvak866@gmail.com</p>
          </div>
        </div>
        <div className='right'>
          <h4>Follow Me</h4>
          <div className='social'>
            <a href="https://www.linkedin.com/in/atharva-khangar-204429240/">
              <FaLinkedin size={20} style={{ color: "#fff" }} />
            </a>
            <a href="https://www.instagram.com/k_atharvv/">
              <FaInstagram size={20} style={{ color: "#fff" }} />
            </a>
            <a href="https://github.com/Atharv-0123">
              <FaGithub size={20} style={{ color: "#fff" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
