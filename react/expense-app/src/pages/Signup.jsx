import { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../store/auth-actions';
import { toast } from 'react-toastify';

const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signUpUser({ email, password })).unwrap();
      toast.success("Account created successfully!");
      navigate("/home");
    } catch (errorMessage) {
      toast.error(errorMessage || "Signup failed");
    }
  }

  return (
      <Container className="d-flex justify-content-center align-items-center my-5" style={{ minHeight: '50vh', paddingTop: '100px' }}>
        <Card style={{ width: '24rem' }}>
          <Card.Body>
            <Card.Title className="text-center mb-4">Create Account</Card.Title>
            <Form onSubmit={handleSignup}>

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
