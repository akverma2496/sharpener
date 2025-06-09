import { useContext, useState } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthProvider';
const apiKey = import.meta.env.VITE_API_KEY;

const Signup = () => {

  const {setIdToken, setLoggedIn, setUserId} = useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({
    variant: "",
    message: ""
  })

  const handleSignup = async (e) => {

    e.preventDefault();

    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      }),
      headers: { "Content-Type": "application/json" }
    })

    if (!response.ok) {
      const { error } = await response.json()
      setAlert({ variant: "danger", message: error.message })
      setTimeout(() => { setAlert({ variant: "", message: "" }) }, 2000)
    }
    else {
      const data = await response.json();

      localStorage.setItem("idToken", data.idToken)
      localStorage.setItem("refreshToken", data.refreshToken)
      localStorage.setItem("userId", data.localId)

      setIdToken(data.idToken)
      setUserId(data.localId)
  

      setAlert({
        variant: "success",
        message: "Account has been created"
      })
      setTimeout(() => {
        setLoggedIn(true)
        navigate("/home")
        setAlert({ variant: "", message: "" })
      }, 2000)
    }
  }

  return (
    <Container className="d-flex justify-content-center align-items-center my-5" style={{ minHeight: '50vh', paddingTop: '100px' }}>
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Create Account</Card.Title>
          {alert.message && <Alert key={alert.variant} variant={alert.variant}>{alert.message}</Alert>}
          <Form onSubmit={handleSignup}>

            <Form.Group className="mb-3" controlId="signupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
          <p style={{ textAlign: "center", marginTop: "10px" }}>Have an account? <Link to="/login">Login</Link></p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;
