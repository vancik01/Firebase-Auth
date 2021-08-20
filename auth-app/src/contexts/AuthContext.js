import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../firebase-auth.js'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

function signup(email, password){
    auth.createUserWithEmailAndPassword(email,password)
}

function login(email, password){
    auth.signInWithEmailAndPassword(email, password).then((user)=>{
        console.log(user.user)
    }).catch((error)=>{
        return error
    })
}

function logout(){
    return auth.signOut()
}

function resetPassword(email){
    return auth.sendPasswordResetEmail(email)
}


export function AuthProvider({children}) {

    const [loading, setloading] = useState(true)
    const [currentUser, setCurrentUser] = useState()

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            setloading(false)
            

        })

        return unsubscribe
    },[])

    

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            
                {!loading && children}
            
        </AuthContext.Provider>
            
        
    )
}
