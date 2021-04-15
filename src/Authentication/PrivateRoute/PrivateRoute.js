import React from 'react'
import {useAuth} from "../Context/Context"
import {Route, Redirect} from "react-router-dom"

const PrivateRoute = ({ component:Component, ...other }) => {
    const {currentUser} = useAuth()
    console.log(currentUser)
    return (
        <Route
            {...other}
            render={(props) => {
                return currentUser ? <Component {...props} /> :
                <Redirect to={{pathname:"/login", state: {from: props.location}}} />
            }}
        />
    )
}

export default PrivateRoute
