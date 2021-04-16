import React from 'react'
import "./Footer.css"
import { FaTools, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelopeOpen, FaPhone, }
from "react-icons/fa"

const Footer = () => {
    return (
        <section className="footer-container container-fluid mx-auto">
            <div className="row">
                <div className="col-md-4">
                    <div className="box-1">
                        <FaTools className="headIcon" /> <h1 className="heading d-inline">TEACHCoM</h1>
                        <p>Being the best in our field means that we are committed to every project, we have ingenious ideas that become reality and we make every client happy.</p>
                        <FaFacebook className="socialIcon" />
                        <FaInstagram className="socialIcon" />
                        <FaTwitter className="socialIcon" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box-2">
                        <h4>Our Services</h4>
                        <ul>
                            <li>Computer Service</li>
                            <li>Laptop Service</li>
                            <li>Data Recovery</li>
                            <li>Virus Remove</li>
                            <li>Network Service</li>
                            <li>Hacking Protection</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box-3">
                        <h4 className="mb-4">OUR COMPANY</h4>
                        <p><FaMapMarkerAlt className="icons" /> No.320, Fifth Avenue New York, NY 90210</p>
                        <p><FaPhone className="icons" />  (123) 456-7890</p>
                        <p><FaPhone className="icons" /> (123) 456-7777</p>
                        <p><FaEnvelopeOpen className="icons" /> info@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="mt-3 bg-dark py-3">
                <p className="text-center text-success m-0 p-0">
                    @ Copyright {new Date().getFullYear()} All Right Reserved && Grateful To The Programming Hero Team
                </p>
            </div>
        </section>
    )
}

export default Footer
