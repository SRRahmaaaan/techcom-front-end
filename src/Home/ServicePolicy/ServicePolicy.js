import React from 'react'
import "./ServicePolicy.css"
import img1 from "../../images/hService.png"
import img2 from "../../images/qService.png";
import img3 from "../../images/oService.png";
import PolicyCard from './PolicyCard';

const policyData = [
    {
        name: "Honest Service",
        description: "We are so confident with our service that if we can’t fix the problem, you don’t pay. All repairs come with a 10 day guarantee",
        image: img1
    },
    {
        name: "Quick Repair",
        description: "Our company is reliable, and our work is trusted. We provide worry free service you can always count on",
        image: img2
    },
    {
        name: "On Time Delivery",
        description: "Choose the delivery method that matches your requirements. We provides fast and quick pick and drop facility",
        image:img3
    }
]
const ServicePolicy = () => {
    return (
        <section id="policy" className="sectionContainer">
            <h3 className="heading mb-5">WE BELIEVE <span style={{fontSize:"6rem", color:"black"}}>3</span> THINGS</h3>
            <div className="row w-100">
                {
                    policyData.map((data) => <PolicyCard key={data.name} data={data} />)
                }
            </div>
        </section>
    )
}

export default ServicePolicy
