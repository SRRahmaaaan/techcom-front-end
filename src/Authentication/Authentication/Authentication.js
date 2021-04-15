import React from 'react'
import { useAuth } from '../Context/Context'
import Login from '../Forms/Login'
import SignUp from '../Forms/SignUp'

const Authentication = () => {
    const {isSignUp} = useAuth()
    return (
        <section className="d-flex align-items-center justify-content-center flex-colum" style={{minHeight:"100vh"}}>
            {isSignUp ? <SignUp /> : <Login />}
        </section>
    )
}

export default Authentication
