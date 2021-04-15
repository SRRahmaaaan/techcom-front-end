import React, { useRef, useState } from 'react'
import {useHistory, useLocation} from "react-router-dom"
import { Card, Button, Form, Alert } from "react-bootstrap"
import { useAuth } from '../Context/Context'
import "./Forms.css"

const SignUp = () => {
    const { setIsSignUp, signUp } = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const history = useHistory()
    const location = useLocation()
    const {from} = location.state || {from: {pathname: "/"}}

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (! /\S+@\S+\.\S+/.test(emailRef.current.value)) {
            return setError("INVALID EMAIL")
        }
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError("PASSWORD DO NOT MATCH")
        }
        if (passwordRef.current.value.length < 6) {
            return setError("PASSWORD SHOULD BE 6 CHARACTER LONG")
        }
        try {
            setError("")
            setLoading(true)
            await signUp(emailRef.current.value, confirmPasswordRef.current.value)
            history.replace(from)
        } catch (error) {
            setError("FAILED TO CREATE AN ACCOUNT")
        }
        setLoading(false)
    }

    return (
        <div className="w-100" style={{maxWidth:"400px"}}>
            <Card className="form-card">
                <Card.Body>
                    <h2 className="heading mb-3 text-center">SIGN UP</h2>
                    {error && <Alert variant="danger">{ error }</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required ref={emailRef}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required ref={passwordRef}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" required ref={confirmPasswordRef}/>
                        </Form.Group>
                        <Button type="submit" disabled={loading} style={{cursor: loading && "no-drop"}} className="w-100 mt-4">SIGN UP</Button>
                    </Form>
                </Card.Body>
                <div className="pb-2 text-center">
                    <p>Already Have An Account ? <span onClick={() => setIsSignUp(false)}>LOG IN</span></p>
                </div>
            </Card>
        </div>
    )
}

export default SignUp
