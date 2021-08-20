import React, { useState } from 'react'
import { useRef } from 'react'
import {Card, Form, Button, FormLabel, FormControl, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'




export default function Login() {

    const [error, seterror] = useState("")
    const [loading, setloading] = useState(false)

    const emailRef=useRef()
    const passwordRef=useRef()
    const {login} = useAuth()
    const history = useHistory()


    async function handleSubmit(e){
        e.preventDefault()           
            try{
                seterror('')
                setloading(true)
                await login(emailRef.current.value , passwordRef.current.value)
                history.push('/')
            }
            catch(error){
                seterror("Error:" + error)
                
            }            
            setloading(false)             
    }

    return (
        <>
            <Card>
                <Card.Body>
                    
                    <h2 className="text-center mt-2">Log In</h2>                    
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

                        <Button className="w-100 mt-2" disabled={loading} type="submit">Log In</Button>
                    </Form>
                </Card.Body>
                <div className="w-100 mt-3 text-center" ><Link to="/forgot-password">Forgot password?</Link></div>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to={'/signup'}>Sign up</Link>
            </div>
        </>
    )
}