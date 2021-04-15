import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1 className="heading">TEACHCoM....</h1>
            </div>
            <ul>
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#policy">Service Policy</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
