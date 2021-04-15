import React from 'react'
import OrderSidebar from '../OrderSidebar/OrderSidebar'
import SelectedService from '../SelectedService/SelectedService'

const Orders = () => {
    return (
        <main className="container-fluid">
            <section className="row">
                <div className="col-md-3 p-0 m-0">
                    <OrderSidebar />
                </div>
                <div className="col-md-9 p-0 m-0">
                    <SelectedService />
                </div>  
            </section>
        </main>
    )
}

export default Orders
