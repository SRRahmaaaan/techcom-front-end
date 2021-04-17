import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://obscure-peak-79043.herokuapp.com/allServices")
        .then(response => response.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section className="sectionContainer pb-5" id="services">
            <h4 className="mb-4 text-center heading">WHAT WE DO BEST</h4>
            <div className="service-container">
                {
                    services.map((service) => <ServiceCard key={service._id} service={service} />)
                }
            </div>
        </section>
    )
}

export default AllServices
