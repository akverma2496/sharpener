import React, { useContext, useState, useRef } from 'react';
import { Form, Button, Container, Card, FormGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import FormItem from '../components/FormItem';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/auth-actions';
import { toast } from 'react-toastify';
const apiKey = import.meta.env.VITE_API_KEY

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputRef = useRef(null)

  const forgotPasswordHandler = async () => {
    try {
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`, {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: email
        })
      })

      if (!response.ok) {
        const { error } = await response.json()
        throw error;
      }
      else {
        toast.success("Please check your mail")
      }
    }
    catch (err) {
      inputRef.current.focus()
      toast.error(err.message)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password })).unwrap();
      toast.success("Login successful!");
      navigate("/home");
    } catch (errorMessage) {
      toast.error(errorMessage || "Login failed");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center my-5" style={{ minHeight: '50vh', paddingTop: '100px' }}>
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Login</Card.Title>
          <Form onSubmit={handleLogin}>

            <FormItem ref={inputRef} id={"loginEmail"} label={"Email Address"} type={"email"} placeholder={"Enter email"} value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormItem id={"loginPassword"} label={"Password"} type={"password"} placeholder={"Enter password"} value={password} onChange={(e) => setPassword(e.target.value)} />

            <p style={{ textAlign: "center", marginTop: "10px" }} ><Link onClick={forgotPasswordHandler}>Forgot Password?</Link></p>

            <Button variant="success" type="submit" className="w-100">
              Log In
            </Button>

          </Form>
          <p style={{ textAlign: "center", marginTop: "10px" }}>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
