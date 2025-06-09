import { useState } from 'react'
import { Card, Container, Button, Alert, Form } from 'react-bootstrap'
import FormItem from './FormItem'
import { useNavigate } from 'react-router-dom'
const apiKey = import.meta.env.VITE_API_KEY

const CompleteProfile = ({setRefreshUser}) => {

    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const navigate = useNavigate()

    const [alert, setAlert] = useState({
        variant: "",
        message: ""
    })

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
                setAlert({ variant: "danger", message: error.message })
                setTimeout(() => {
                    setAlert({ variant: "", message: "" })
                }, 2000)
            }
            else {
                const data = await response.json()

                setAlert({
                    variant: "success",
                    message: "Profile Completed"
                })

                setTimeout(() => {
                    setAlert({ variant: "", message: "" })
                    setRefreshUser(prev => !prev);
                    navigate("/login")
                },2000)
            }
        }
        catch (err) {}

        setName("")
        setUrl("")
    }

    return (

            <Container className="d-flex justify-content-center align-items-center my-5" style={{ minHeight: '50vh', paddingTop: '100px' }}>
            <Card style={{ width: '24rem' }}>

                <Card.Body>
                    <Card.Title className="text-center mb-4">Complete Your Profile</Card.Title>

                    {alert.message && <Alert key={alert.variant} variant={alert.variant}>{alert.message}</Alert>}

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