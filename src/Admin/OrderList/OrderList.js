import React, { useEffect, useState } from 'react'
import SingleOrder from "./SingleOrder"
import "./OrderList.css"
import "./OrderList.css"

const OrderList = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch("https://obscure-peak-79043.herokuapp.com/allOrders")
        .then(response => response.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <section>
            <div className="order-container">
                <h1 className="heading text-center mb-4">ORDER LISTS</h1>
                <div className="heading-content">
                    <h3>User Email</h3>
                    <h3>Order Name</h3>
                    <h3>Status</h3>
                </div>
                {
                    orders.map((order) => <SingleOrder key={order._id} order={order} />)
                }
            </div>
        </section>
    )
}

export default OrderList
