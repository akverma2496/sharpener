import React, { useContext, useState } from 'react';
import { Form, Button, Container, Card, FormGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
//import { AuthContext } from '../store/AuthProvider';
import FormItem from '../components/FormItem';
import Alert from 'react-bootstrap/Alert';

const apiKey = import.meta.env.VITE_API_KEY

const Login = () => {

  //const authValues = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({
    variant: "",
    message: ""
  })

  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle login logic here

    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,{
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if(!response.ok){
      const {error} = await response.json()
      setAlert({ variant: "danger", message: error.message })
      setTimeout(() => {
        setAlert({variant: "", message: ""})
      },2000)
    }
    else{
        setAlert({
            variant: "success",
            message: "Logged in successfully"
        })
      const data = await response.json();
      localStorage.setItem("idToken", data.idToken)
      //authValues.setIdToken(data.idToken)
      //authValues.setIsLoggedIn(true)
      navigate("/home")
      setAlert({ variant: "", message: ""})
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center my-5" style={{ minHeight: '50vh',paddingTop: '100px'}}>
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Login</Card.Title>
          <Alert key={alert.variant} variant={alert.variant}>{alert.message}</Alert>
          <Form onSubmit={handleLogin}>
            
            {/* <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group> */}

            {/* <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group> */}

            <FormItem id={"loginEmail"} label={"Email Address"} type={"email"} placeholder={"EnterEmail"} value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormItem id={"loginPassword"} label={"Password"} type={"password"} placeholder={"EnterPassWord"} value={password} onChange={(e) => setPassword(e.target.value)} />

            <Button variant="success" type="submit" className="w-100">
              Log In
            </Button>
            
          </Form>
          <p style={{textAlign: "center", marginTop: "10px"}}>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
