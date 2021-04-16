import React, { useEffect, useState } from 'react'
import {Route} from "react-router-dom"
import { useAuth } from '../../Authentication/Context/Context';

const AdminRoute = ({ component: Component, ...other }) => {
    const {currentUser} = useAuth()
    const [isAdmin, setIsAdmin] = useState(false)
        useEffect(() => {
            fetch("http://localhost:8000/isAdmin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: currentUser?.email }),
            })
                .then((response) => response.json())
                .then((data) => setIsAdmin(data));
            }, [currentUser?.email]);

    return (
        <Route
            {...other}
            render={(props) => {
                return isAdmin ? <Component {...props} /> :
                <h1>NORMAL USER DON'T HAVE ACCESS HERE</h1>
            }}
        />
    )
}

export default AdminRoute
