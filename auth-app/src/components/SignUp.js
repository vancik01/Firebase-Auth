import React, { useState } from 'react'
import { useRef } from 'react'
import {Card, Form, Button, FormLabel, FormControl, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'



export default function SignUp() {

    const [error, seterror] = useState("")
    const [loading, setloading] = useState(false)

    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()
    const {signup} = useAuth()
    const history = useHistory()


    async function handleSubmit(e){
        e.preventDefault()
        
            if(passwordRef.current.value !== passwordConfirmRef.current.value){
                return seterror("Passwords don´t match")
            }
            try{
                seterror('')
                setloading(true)
                await signup(emailRef.current.value , passwordRef.current.value)
                history.pushState('/')
                
            }
            catch{
                seterror("Failed to create account")
            }
            
            setloading(false)
               
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mt-2">Sign Up</h2>                    
                    {error && <Alert variant="danger"> {error}</Alert>}
                    <Form onSubmit ={handleSubmit}>
                        <Form.Group id ="email">
                            <FormLabel>Email</FormLabel>
                            <FormControl type="email" ref={emailRef} required></FormControl>
                        </Form.Group>

                        <Form.Group id ="password">
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" ref={passwordRef} required></FormControl>
                        </Form.Group>

                        <Form.Group id ="passwordConfirm">
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl type="password" ref={passwordConfirmRef} required></FormControl>
                        </Form.Group>
                        <Button className="w-100 mt-2" disabled={loading} type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to={'/login'}>Log in</Link>
            </div>
        </>
    )
}