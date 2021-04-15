import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import {Alert, Button} from "react-bootstrap"
import { useAuth } from "../../../Authentication/Context/Context"
import StripeCheckout from "react-stripe-checkout"
import "./SelectedService.css"

const SelectedService = () => {
    const { id } = useParams()
    const [service, setService] = useState(null)
    const [error, setError] = useState()
    const { currentUser } = useAuth()
    useEffect(() => {
        fetch(`http://localhost:8000/specific/${id}`)
        .then(response => response.json())
        .then(data => setService(data.content))
    }, [id])

    const makePayment = token => {
        const body = {
            token,
            service
        }
        const headers = {
            "Content-Type": "application/json"
        }
        return fetch("http://localhost:8000/payment", {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
        .then(response => {
            if (response.status === 200) {
                handleOrder()
            }
        })
        .catch(error => setError("Something Went Wrong Please Try Again"))
    }
    const handleOrder = () => {
        const order = {
            newOrder: service,
            status: "Pending"
        }
        fetch("http://localhost:8000/customerOrder", {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(order)
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert("We Received Your Order")
                setService(null)
            }
        })
    }
    return (
        <div className="payment-card">
            {service ? <div>
                {error && <Alert variant="danger">{ error }</Alert>}
                <h6>Service Name : { service.name }</h6>
                <p>User Email : { currentUser.email }</p>
                <p>Service Price : {service.price}</p>
                <StripeCheckout
                    stripeKey="pk_test_51IeHD8CAJYOWPKWKAogESvMzfk2d68hZ0Xct9mRPNcXK7eKjKMjd3DB5VaCbDTfCkIeluld7j3TnBR9usshsD0FQ00gqLDOOVm"
                    token={makePayment}
                    name={service.name}
                    shippingAddress
                    billingAddress
                    amount={service.price * 100}>
                    <Button className="mt-3">PAY WITH CARD { service.price }</Button>
                </StripeCheckout>
            </div> : <h1>Select A Service</h1>}
            
        </div>
    )
}

export default SelectedService
