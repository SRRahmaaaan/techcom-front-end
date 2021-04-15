import React from 'react'
import AllServices from '../AllServices/AllServices'
import Header from '../Header/Header'
import ServicePolicy from '../ServicePolicy/ServicePolicy'
const Home = () => {
    return (
        <>
            <Header />
            <ServicePolicy />
            <AllServices />
        </>
    )
}

export default Home
