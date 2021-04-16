import React from 'react'
import About from '../About/About'
import AllServices from '../AllServices/AllServices'
import CustomersReview from '../CustomersReview/CustomersReview'
import Header from '../Header/Header'
import ServicePolicy from '../ServicePolicy/ServicePolicy'
const Home = () => {
    return (
        <>
            <Header />
            <ServicePolicy />
            <AllServices />
            <About />
            <CustomersReview />
        </>
    )
}

export default Home
