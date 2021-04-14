import React, { useState } from 'react'
import {Form, Card, Button, Col} from "react-bootstrap"

const ServiceForm = () => {
    const [newService, setNewService] = useState({
        name:"",
        image: "",
        description: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newService)
    }
    return (
        <Card className="bg-info" style={{border:"none", height:"50%", marginTop:"45px"}}>
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
                                <Form.File
                                    onChange={(e) => setNewService({ ...newService, image: e.target.files[0] })}
                                    required
                                />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Button type="submit" className="w-50 mx-auto mt-4">Submit Your Service</Button>
                    </Form.Row>

                </Form>
            </Card.Body>
        </Card>
    )
}

export default ServiceForm
