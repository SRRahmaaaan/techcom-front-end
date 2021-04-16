import React from 'react'
import {Card, Form, Col, Button} from "react-bootstrap"
import { useForm } from "react-hook-form";
import "./Contact.css"

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data) {
            alert("Thanks For Message We Will Reach You Soon")
            document.getElementById("form").reset()
        }
    };
    return (
        <section className="sectionContainer" id="contact">
            <h3 className="heading">CONTACT US FROM ANYWHERE</h3>
            <Card className="contact-card">
                <Card.Body>
                    <Form id="form" className="w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Row>
                                <Col>
                                    <Form.Control placeholder="First Name" type="text" {...register("fName", {required:true})} />
                                    {errors.fName && <span className="text-danger mt-2 text-center">This field is required</span>}
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Last Name" type="text" {...register("lName", {required:true})} />
                                    {errors.lName && <span className="text-danger mt-2 text-center">This field is required</span>}
                                </Col>
                            </Form.Row>
                            <Form.Row className="mt-4">
                                <Col>
                                    <Form.Control placeholder="Contact Number" type="number" {...register("number", {required:true})} />
                                    {errors.number && <span className="text-danger mt-2 text-center">This field is required</span>}
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Contact Email" type="email" {...register("email", {required:true})} />
                                    {errors.email && <span className="text-danger mt-2 text-center">This field is required</span>}
                                </Col>
                            </Form.Row>
                            <Form.Row className="mt-4">
                                <Col>
                                    <Form.Control placeholder="Message" as="textarea" rows={5} {...register("message", {required: true})} />
                                    {errors.message && <span className="text-danger mt-2 text-center">This field is required</span>}
                                </Col>
                            </Form.Row>
                        <Button type="submit" className="w-100 mt-4">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </section>
    )
}

export default Contact
