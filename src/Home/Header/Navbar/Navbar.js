import React, { useState } from 'react'
import "./Navbar.css"
import {useAuth} from "../../../Authentication/Context/Context"
import { Link } from "react-router-dom"
import {Alert, Button} from "react-bootstrap"

const Navbar = () => {
    const {currentUser, logOut} = useAuth()
    const [changeColor, setChangeColor] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setChangeColor(true)
        } else {
            setChangeColor(false)
        }
    }
    window.addEventListener("scroll", changeBackground)
    const [error, setError] = useState("")
    const handleLogout = async () => {
        try {
            setError("")
            await logOut()
        } catch (error) {
            setError("FAILED TO LOG OUT")
        }
    }
    return (
        <nav className={changeColor ? "changeColor" : ""}>
            <div className="logo">
                <h1 className="heading">TEACHCoM....</h1>
            </div>
            <ul>
                <li><a href="#home" className="active" style={{color: changeColor && "#fff"}}>Home</a></li>
                <li><Link to="/admin"  style={{color: changeColor && "#fff"}}>Admin</Link></li>
                <li><a href="#services" style={{color: changeColor && "#fff"}}>Services</a></li>
                <li><a href="#blogs" style={{color: changeColor && "#fff"}}>Blogs</a></li>
                <li><a href="#contact" style={{ color: changeColor && "#fff" }}>Contact Us</a></li>
                {currentUser ?
                    <Button onClick={handleLogout}>Logout</Button>:
                    <Button style={{ border: "none" }}><Link to="/login" className="text-white">Login</Link></Button>}
            </ul>
            {error && <Alert variant="danger">{ error }</Alert>}
        </nav>
    )
}

export default Navbar
