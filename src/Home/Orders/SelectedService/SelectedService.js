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
        fetch(`https://obscure-peak-79043.herokuapp.com/specific/${id}`)
        .then(response => response.json())
        .then(data => setService(data))
    }, [id])
    const makePayment = token => {
        const body = {
            token,
            service
        }
        const headers = {
            "Content-Type": "application/json"
        }
        return fetch("https://obscure-peak-79043.herokuapp.com/payment", {
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
            status: "Pending",
            email: currentUser.email
        }
        fetch("https://obscure-peak-79043.herokuapp.com/customerOrder", {
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
                <h6>Service Name : { service.content.name }</h6>
                <p>User Email : { currentUser.email }</p>
                <p>Service Price : {service.content.price}</p>
                <StripeCheckout
                    stripeKey="pk_test_51IeHD8CAJYOWPKWKAogESvMzfk2d68hZ0Xct9mRPNcXK7eKjKMjd3DB5VaCbDTfCkIeluld7j3TnBR9usshsD0FQ00gqLDOOVm"
                    token={makePayment}
                    name={service.content.name}
                    shippingAddress
                    billingAddress
                    amount={service.content.price * 100}>
                    <Button className="mt-3">PAY WITH CARD { service.content.price }</Button>
                </StripeCheckout>
            </div> : <h1>Select A Service</h1>}
            
        </div>
    )
}

export default SelectedService
