import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
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
        <div className="hamburger">
            <faBars />
        </div>
    </div>
  )
}

export default Navbar