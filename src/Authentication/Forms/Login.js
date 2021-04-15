import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from "react-bootstrap"
import { useHistory, useLocation } from 'react-router'
import { useAuth } from '../Context/Context'
import "./Forms.css"

const Login = () => {
    const { setIsSignUp, logIn } = useAuth()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || {from : {pathname:"/"}}

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            setError("")
            await logIn(emailRef.current.value, passwordRef.current.value)
            history.replace(from)
        } catch (error) {
            setError("FAILED TO LOG IN")
        }
            setLoading(false);
    }

    return (
        <div className="w-100" style={{maxWidth:"400px"}}>
            <Card className="form-card">
                <Card.Body>
                    <h2 className="heading mb-3 text-center">LOGIN</h2>
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
                        <Button type="submit" disabled={loading} style={{cursor: loading && "no-drop"}} className="w-100 mt-4">LOG IN</Button>
                    </Form>
                </Card.Body>
                <div className="mt-4 text-center">
                    <p>Don't Have An Account ? <span onClick={() => setIsSignUp(true)}>SIGN UP</span></p>
                </div>
            </Card>
        </div>
    )
}

export default Login
