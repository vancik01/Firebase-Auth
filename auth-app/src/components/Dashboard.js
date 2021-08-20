import React, { useState } from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'



export default function Dashboard() {

    const history = useHistory()

    async function handleLogout(){
        seterror('')

        try{
            await logout()
            history.pushState("/login")
        }
        catch{
            seterror("Failed to log out")
        }
        
    }
    const [error, seterror] = useState("")
    const {currentUser, logout} = useAuth()


    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mt-2">Dashboard</h2>
                    {error && <Alert variant="danger"> {error}</Alert>}.
                    <p><strong >Email: </strong>{currentUser.email}</p>
                    <Link to='/update-profile' className="btn btn-primary w-100 mt-3">Update account</Link>
                </Card.Body>                
            </Card>

            <Button className="w-100 mt-2" variant="link" type="submit" onClick={handleLogout}>Log Out</Button>
        </>
    )
}
