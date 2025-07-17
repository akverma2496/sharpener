import { useState } from 'react'
import { Card, Container, Button, Form } from 'react-bootstrap'
import FormItem from './FormItem'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/auth-slice'
const apiKey = import.meta.env.VITE_API_KEY

const CompleteProfile = ({setRefreshUser}) => {

    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const displayName = useSelector(state => state.auth.displayName)
    const dispatch = useDispatch()

    const handleCompleteProfile = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`, {
                method: "POST",
                body: JSON.stringify({
                    idToken: localStorage.getItem("idToken"),
                    displayName: name,
                    photoUrl: url,
                    returnSecureToken: true
                }),
                headers: { "Content-Type": "application/json" }
            })

            if (!response.ok) {
                const { error } = await response.json()
                throw new Error(error)
            }
            else {
                dispatch(authActions.completeProfile(name))
                toast.success("Profile Completed")
            }
        }
        catch (error) { toast.error(error.message) }
    }

    return (

            !displayName &&

            <Container className="d-flex justify-content-center align-items-center my-5" style={{ minHeight: '50vh', paddingTop: '100px' }}>
            <Card style={{ width: '24rem' }}>

                <Card.Body>
                    <Card.Title className="text-center mb-4">Complete Your Profile</Card.Title>
                    <Form onSubmit={handleCompleteProfile}>
                        <FormItem id={"name"} label={"Enter your name"} type={"text"} placeholder={"Write your name..."} value={name} onChange={(e) => setName(e.target.value)} />
                        <FormItem id={"photo"} label={"Photo URL"} type={"text"} placeholder={"Paste your url here..."} value={url} onChange={(e) => setUrl(e.target.value)} />
                        <Button variant="primary" type="submit" className="w-100">Complete</Button>
                    </Form>

                </Card.Body>
            </Card>
        </Container>
            
        
    )
}

export default CompleteProfile