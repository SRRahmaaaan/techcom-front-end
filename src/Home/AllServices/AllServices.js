import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/allServices")
        .then(response => response.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section className="sectionContainer pb-5" id="services">
            <h4 className="mb-4 text-center heading">WHAT WE DO BEST</h4>
            <div className="row mx-auto" style={{width:"85%"}}>
                {
                    services.map((service) => <ServiceCard key={service._id} service={service} />)
                }
            </div>
        </section>
    )
}

export default AllServices
