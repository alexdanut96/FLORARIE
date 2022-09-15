import React, { useContext, useState, useEffect } from "react"
import { auth } from "../../Firebase/Firebase"
import { useLocalStorage } from "../../Hooks/useLocalStorage"

const AuthContext = React.createContext()
export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    const [userEmail, setUserEmail] = useLocalStorage("currentUser", false)

    const [loading, setLoading] = useState(true)

    function showEmail() {
        setUserEmail(true)
    }

    function hideEmail() {
        setUserEmail(false)
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        if (currentUser) {
            setUserEmail(true)
        } else {
            setUserEmail(false)
        }
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (!user) {
                setUserEmail(false)
            }
        })

        return unsubscribe
    }, [setUserEmail])

    const value = {
        currentUser,
        userEmail,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        showEmail,
        hideEmail
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}