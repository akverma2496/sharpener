import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const apiKey = import.meta.env.VITE_API_KEY;

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    // Handle signup logic here

    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        }),
        headers : {
            "Content-Type": "application/json"
        }
    })
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Sign Up</Card.Title>
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
          <p style={{textAlign: "center", marginTop: "10px"}}>Have an account? <Link to="/login">Login</Link></p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignupPage;
