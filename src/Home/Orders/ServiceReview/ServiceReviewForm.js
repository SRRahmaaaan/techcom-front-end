import React from 'react'
import { useForm } from "react-hook-form";
import {Form, Button, Card} from "react-bootstrap"
import { useHistory } from 'react-router';

const ServiceReviewForm = () => {
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:8000/getReview", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result) {
                alert("THANKS FOR YOUR PRECIOUS REVIEW")
                history.push("/")
            }
        })
    };
    return (
        <>
            <Card style={{background:"linear-gradient(45deg, #111d53, #1b1717)", borderRadius:"0px", paddingBottom:"20px"}}>
                <Card.Body>
                    <h2 className="text-center mb-3 heading">Write Your Review Down Here</h2>
                    <Form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">
                        <Form.Group>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" {...register("name", {required: true })}/>
                            {errors.name && <span className="text-danger">This filed is required</span>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Your Designation</Form.Label>
                            <Form.Control type="text" {...register("designation", {required: true })}/>
                            {errors.designation && <span className="text-danger">This filed is required</span>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Your Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} maxLength={160} placeholder="maximum 160 letter" {...register("comment", {required: true })}/>
                            {errors.comment && <span className="text-danger">This filed is required</span>}
                        </Form.Group>
                        <Button type="submit" className="w-50 mx-auto d-block">Submit Your Review</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default ServiceReviewForm
