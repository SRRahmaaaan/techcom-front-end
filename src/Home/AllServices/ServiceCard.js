import React from 'react'
import { Button } from "react-bootstrap"
import {Link} from "react-router-dom"
import "./Services.css"

const ServiceCard = ({ service }) => {
    const { content } = service
    return (
            <div className="service-box">
                <div className="imgbx common">
                    <img src={service.imageURL} alt=""/>
                    <h5 style={{color:"#F37121"}}>{ content.name}</h5>
                </div>
                <div className="descbx common">
                    <p>{ content.description}</p>
                    <p style={{fontSize:'1.3rem', color:"#F37121"}}>{ content.price }</p>
                    <Button className="mt-2">
                        <Link to={`/orders/${service._id}`} className="text-white">Purchase</Link>
                    </Button>
                </div>
            </div>
    )
}

export default ServiceCard
