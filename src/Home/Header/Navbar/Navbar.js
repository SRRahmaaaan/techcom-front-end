import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import {useAuth} from "../../../Authentication/Context/Context"
import { Link } from "react-router-dom"
import {Alert, Button} from "react-bootstrap"

const Navbar = () => {
    const [isAdmin, setIsAdmin] = useState(false)
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
    useEffect(() => {
        fetch("https://obscure-peak-79043.herokuapp.com/isAdmin", {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({email : currentUser?.email})
        })
        .then(response => response.json())
        .then(data => setIsAdmin(data))
    }, [currentUser?.email])
    return (
        <nav className={changeColor ? "changeColor" : ""}>
            <div className="logo">
                <h1 className="heading">TECHCoM....</h1>
            </div>
            <ul>
                <li><a href="#home" className="active" style={{color: changeColor && "#fff"}}>Home</a></li>
                {isAdmin && <li><Link to="/admin"  style={{color: changeColor && "#fff"}}>Admin</Link></li>}
                <li><Link to="/orders"  style={{color: changeColor && "#fff"}}>Orders</Link></li>
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
