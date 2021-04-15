import React from 'react'
import OrderSidebar from '../OrderSidebar/OrderSidebar'
import ServiceReviewForm from './ServiceReviewForm'

const ServiceReview = () => {
    return (
        <main className="container-fluid">
            <section className="row">
                <div className="col-md-3 p-0 m-0">
                    <OrderSidebar />
                </div>
                <div className="col-md-9 p-0 m-0">
                    <ServiceReviewForm />
                </div>  
            </section>
        </main>
    )
}

export default ServiceReview
