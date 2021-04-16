import React from 'react'
import {Form} from "react-bootstrap"

const singleOrder = ({order}) => {
    const { newOrder } = order
    const handleUpdate = (e) => {
        const status = e.target.value
        const id = order._id
        const updateService = {status, id}
        fetch(`https://obscure-peak-79043.herokuapp.com/update/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(updateService)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    return (
        <div className="order-card">
            <p className="p-0 m-0">{order.email}</p>
            <h6 style={{ color: "#F37121", fontSize:"1.2rem"}}>{ newOrder.content.name}</h6>
            <Form>
                <Form.Control as="select" onChange={handleUpdate} className="bg-success text-white px-2">
                    <option>{ order.status }</option>
                    <option >Ongoing</option>
                    <option>Done</option>
                </Form.Control>
            </Form>
        </div>
    )
}

export default singleOrder
