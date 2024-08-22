import React, { useState } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const[click,setClick] = useState(false)

    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <Link to="/"><h1>Portfolio</h1></Link>
        <ul className='nav-menu'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
  {click ? (
    <FaTimes size={20} style={{ color: "#fff", cursor: "pointer" }} className="hamburger-icon" />
  ) : (
    <FaBars size={20} style={{ color: "#fff", cursor: "pointer" }} className="hamburger-icon" />
  )}
</div>

    </div>
  )
}

export default Navbar