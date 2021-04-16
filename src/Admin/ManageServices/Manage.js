import React, { useEffect, useState } from 'react'
import "./ManageService.css"
import SingleService from './SingleService'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/allServices")
        .then(response => response.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section className="pt-2">
            <h1 className="heading text-center">All Services</h1>
            <div className="servicesContainer">
                {
                    services.map((service) => <SingleService key={service._id} service={service} />)
                }
            </div>
        </section>
    )
}

export default Services
