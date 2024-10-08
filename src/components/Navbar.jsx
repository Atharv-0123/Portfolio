import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(true);
    const lastScrollTopRef = useRef(0);

    const handleClick = () => setClick(!click);

    const handleScroll = useCallback(() => {
        const currentScroll = window.scrollY;
        const lastScrollTop = lastScrollTopRef.current;
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            setScrollingUp(false);
        } else {
            // Scrolling up
            setScrollingUp(true);
        }
        lastScrollTopRef.current = currentScroll;

        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className={`${color ? "header header-bg" : "header"} ${scrollingUp ? "" : "header-hidden"}`}>
            <Link to="/"><h1>Portfolio</h1></Link>
            <ul className={click ? "nav-menu activ" : "nav-menu"}>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/about">About</Link></li> */}
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff", cursor: "pointer" }} className="hamburger-icon" />
                ) : (
                    <FaBars size={20} style={{ color: "#fff", cursor: "pointer" }} className="hamburger-icon" />
                )}
            </div>
        </div>
    );
};

export default Navbar;
