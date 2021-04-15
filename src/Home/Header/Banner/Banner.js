import React from 'react'
import "./Banner.css"
import {Button} from "react-bootstrap"

const Banner = () => {
    return (
        <section className="banner-container">
            <h1 className="heading">Welcome To <span style={{color:"#000"}}>TEACHCoM</span></h1>
            <h1 className="heading">Your Technology, Our Responsibility</h1>
            <Button className="mt-3"><a href="#services" style={{color:"#fff"}}>Our Services</a></Button>
        </section>
    )
}

export default Banner
