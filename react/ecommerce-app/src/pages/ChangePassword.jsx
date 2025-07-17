import { useContext, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { AuthContext } from "../store/AuthProvider";
import { useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_API_KEY;

function ChangePassword() {

    const authValues = useContext(AuthContext)
    const navigate = useNavigate()
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add password validation or API call here

        console.log(authValues.idToken)
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`, {
            method: "POST",
            body: JSON.stringify({
                idToken: authValues.idToken,
                password: password,
                returnSecureToken: false
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            let error = await response.json();
            console.log(error)
        }

        localStorage.clear()
        authValues.setIsLoggedIn(false)
        authValues.setIdToken(null)
        authValues.setUserId("")
        alert("Password Changed Successfully.")
        navigate("/login")
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "400px", paddingTop: "100px" }}>
            <h3>Set New Password</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNewPassword" className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" block="true">
                    Set Password
                </Button>
            </Form>
        </Container>
    );
}

export default ChangePassword;
