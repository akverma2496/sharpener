import { useState } from 'react';
import { Link } from 'react-router';
import { Form, Button, Container, Card } from 'react-bootstrap';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState("")

  return (
      <Container className="d-flex justify-content-center align-items-center my-5" style={{ minHeight: '50vh', paddingTop: '100px' }}>
        <Card style={{ width: '24rem' }}>
          <Card.Body>
            <Card.Title className="text-center mb-4">Create Account</Card.Title>
            <Form>

              <Form.Group className="mb-3" controlId="signupEmail">
                <Form.Label>Email Address</Form.Label>
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

              <Form.Group className="mb-3" controlId="signupPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
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
