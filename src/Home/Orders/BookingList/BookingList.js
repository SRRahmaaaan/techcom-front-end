import React from 'react'
import OrderSidebar from '../OrderSidebar/OrderSidebar'

const BookingList = () => {
    return (
        <main className="container-fluid">
            <section className="row">
                <div className="col-md-3 p-0 m-0">
                    <OrderSidebar />
                </div>
                <div className="col-md-9 p-0 m-0">
                    <h1>This Is Booking List</h1>
                </div>  
            </section>
        </main>
    )
}

export default BookingList
