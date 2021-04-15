import React, { useState } from 'react'
import axios from "axios"
import { Form, Card, Button, Col } from "react-bootstrap"
import {useHistory} from "react-router-dom"
import "./Service.css"

const ServiceForm = () => {
    const history = useHistory()
    const [newService, setNewService] = useState({
        name:"",
        description: "",
        price: ""
    })
    const [imageUrl, setImageUrl] = useState(null)
    const uploadImageUrl = (event) => {
        const newImage = new FormData()
        newImage.set("key", "0d5e7c99378ed383d26e9ee1a30d1c12");
        newImage.append("image", event.target.files[0])
        axios.post("https://api.imgbb.com/1/upload", newImage)
        .then(data => setImageUrl(data.data.data.display_url))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const postData = {
            content: newService,
            imageURL: imageUrl
        }
            fetch("http://localhost:8000/addService", {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body:JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    history.push("/")
                }
            })
    }

    return (
        <Card className="formCard">
            <Card.Body>
                <h2 className="heading text-center mb-3">Add Service</h2>

                <Form onSubmit={handleSubmit} className="mt-3">
                    <Form.Row>
                        <Col>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                                    value={newService.name}
                                    placeholder="Service Name"
                                    required
                                    className="mb-3"
                                />
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    maxLength={150}
                                    onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                                    value={newService.description}
                                    placeholder="Service Description Maximum 150 Letter "
                                    required
                                />
                        </Col>
                        <Col>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                                    value={newService.price}
                                    placeholder="Service Price"
                                    required
                                    className="mb-3"
                                />
                                <Form.File
                                    onChange={uploadImageUrl}
                                    required
                                />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Button
                            type="submit"
                            disabled={!imageUrl}
                            style={{cursor: !imageUrl && "no-drop"}}
                            className="w-50 mx-auto mt-4">Submit Your Service</Button>
                    </Form.Row>

                </Form>
            </Card.Body>
        </Card>
    )
}

export default ServiceForm
