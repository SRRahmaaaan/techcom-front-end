import React, { useEffect, useState } from 'react'
import OrderSidebar from '../OrderSidebar/OrderSidebar'
import {useAuth} from "../../../Authentication/Context/Context"
import BookingCard from './BookingCard'

const BookingList = () => {
    const [services, setServices] = useState([])
    const {currentUser} = useAuth()
    useEffect(() => {
        fetch("https://obscure-peak-79043.herokuapp.com/orderedService?email=" + currentUser.email)
        .then(response => response.json())
        .then(data => setServices(data))
    }, [currentUser])
    return (
        <main className="container-fluid">
            <section className="row">
                <div className="col-md-3 p-0 m-0">
                    <OrderSidebar />
                </div>
                <div className="col-md-9 p-0 m-0">
                    <div className="row mx-auto pt-3" style={{ width: "85%" }}>
                        {
                            services.length === 0 && <h1>You Don't Have Any Booking</h1>
                        }
                        {
                            services.map((service) => <BookingCard key={service._id} service={service} />)
                        }
                    </div>
                </div>  
            </section>
        </main>
    )
}

export default BookingList
