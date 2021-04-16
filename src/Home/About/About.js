import React from 'react'
import AboutImg from "../../images/about.jpg"
import "./About.css"

const About = () => {
    return (
        <section className="sectionContainer">
            <div className="row w-100 about-section">
                <div className="col-md-6 left">
                    <h3 className="heading">WHO WE ARE</h3>
                    <p>TECHCoM is an established New York based company, specialist in Computer Repairs and Services, We repair out of warranty laptops and Computer.</p>
                </div>
                <div className="col-md-6 p-0">
                    <img src={AboutImg} alt="AboutPicture" className="img-fluid"/>
                </div>
            </div>
        </section>
    )
}

export default About
