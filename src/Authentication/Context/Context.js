import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth} from "../Forms/Firebase"




const contextProvider = createContext()
export const useAuth = () => useContext(contextProvider)
const Provider = ({ children }) => {
    const [isSignUp, setIsSignUp] = useState(false)
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    const logIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    const logOut = () => {
        return auth.signOut()
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])
    const value = {
        isSignUp,
        currentUser,
        setIsSignUp,
        signUp,
        logIn,
        logOut
    }
    return (
        <contextProvider.Provider value={value}>
            {!loading && children}
        </contextProvider.Provider>
    )
}

export default Provider
