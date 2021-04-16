import React from 'react'
import About from '../About/About'
import AllServices from '../AllServices/AllServices'
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'
import CustomersReview from '../CustomersReview/CustomersReview'
import Footer from '../Footer/Footer'
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
            <Blogs />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
