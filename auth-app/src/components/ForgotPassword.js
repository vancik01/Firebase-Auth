import React, { useState } from 'react'
import { useRef } from 'react'
import {Card, Form, Button, FormLabel, FormControl, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'




export default function ForgotPassword() {

    const [error, seterror] = useState("")
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState("")

    
    const passwordRef=useRef()
    const emailRef =useRef()
    const {resetPassword} = useAuth()
    


    async function handleSubmit(e){
        e.preventDefault()           
            try{
                seterror('')
                setmessage('')
                setloading(true)
                const log = await resetPassword(emailRef.current.value)
                setmessage('Email was sent to your email adress')
                
            }
            catch{
                seterror("Failed to Reset Password")
                
            }       
              
            setloading(false)             
    }

    return (
        <>
            <Card>
                <Card.Body>
                    
                    <h2 className="text-center mt-2">Reset password</h2>                    
                    {error && <Alert variant="danger"> {error}</Alert>}
                    {message && <Alert variant="success"> {message}</Alert>}
                    <Form onSubmit ={handleSubmit}>
                        <Form.Group id ="email">
                            <FormLabel>Email</FormLabel>
                            <FormControl type="email" ref={emailRef} required></FormControl>
                        </Form.Group>                   

                        <Button className="w-100 mt-2" disabled={loading} type="submit">Reset password</Button>
                    </Form>
                </Card.Body>
                <div className="w-100 mt-3 text-center" ><Link to="/login">Log in</Link></div>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to={'/signup'}>Sign up</Link>
            </div>
        </>
    )
}