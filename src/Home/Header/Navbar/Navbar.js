import React, { useState } from 'react'
import "./Navbar.css"
import {Link } from "react-router-dom"

const Navbar = () => {
    const [changeColor, setChangeColor] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setChangeColor(true)
        } else {
            setChangeColor(false)
        }
    }
    window.addEventListener("scroll", changeBackground)
    return (
        <nav className={changeColor ? "changeColor" : ""}>
            <div className="logo">
                <h1 className="heading">TEACHCoM....</h1>
            </div>
            <ul>
                <li><a href="#home" className="active" style={{color: changeColor && "#fff"}}>Home</a></li>
                <li><Link to="/admin"  style={{color: changeColor && "#fff"}}>Admin</Link></li>
                <li><a href="#policy" style={{color: changeColor && "#fff"}}>Service Policy</a></li>
                <li><a href="#services" style={{color: changeColor && "#fff"}}>Services</a></li>
                <li><a href="#about" style={{color: changeColor && "#fff"}}>About</a></li>
                <li><a href="#blogs" style={{color: changeColor && "#fff"}}>Blogs</a></li>
                <li><a href="#contact" style={{color: changeColor && "#fff"}}>Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
