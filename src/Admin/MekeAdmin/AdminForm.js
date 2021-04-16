import React, {useState} from 'react'
import {Form, Card, Button} from "react-bootstrap"

const AdminForm = () => {
    const [newAdmin, setNewAdmin] = useState({
        name:"",
        phone:"",
        email:""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://obscure-peak-79043.herokuapp.com/addAdmin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(newAdmin)
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert("ADMIN ADDED SUCCESSFULLY")
                setNewAdmin({
                    name: "",
                    phone: "",
                    email:""
                })
            }
        })
    }
    return (
        <Card className="bg-info pt-5" style={{border:"none", height:"100%"}}>
            <Card.Body>
                <h2 className="heading text-center mb-3">Add Admin</h2>

                <Form onSubmit={handleSubmit} className="mt-3 w-75 mx-auto">
                    <Form.Group>
                        <Form.Label>Admin Name</Form.Label>
                        <Form.Control type="text" required onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })} value={ newAdmin.name}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Admin Phone</Form.Label>
                        <Form.Control type="number" required onChange={(e) => setNewAdmin({ ...newAdmin, phone: e.target.value })} value={ newAdmin.phone}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Admin Email</Form.Label>
                        <Form.Control type="email" required onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })} value={ newAdmin.email}/>
                    </Form.Group>
                    <Button type="submit" className="w-100 mx-auto mt-4">Submit Your Service</Button>
                </Form>
            </Card.Body>
        </Card>
        
    )
}

export default AdminForm