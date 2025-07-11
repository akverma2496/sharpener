import React, { useContext, useState } from 'react';
import { Form, Button, Container, Card, FormGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthProvider';
import FormItem from '../components/FormItem';
import Alert from 'react-bootstrap/Alert';

const apiKey = import.meta.env.VITE_API_KEY

const Login = () => {

  const { setLoggedIn, setIdToken, setUserId } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({
    variant: "",
    message: ""
  })


  const forgotPasswordHandler = async () => {
    try{
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`,{
      method : "POST",
      body: JSON.stringify({
        requestType: "PASSWORD_RESET",
        email: email
      })
    })

    if(!response.ok){
      const {error} = await response.json()
      console.log(error)
      throw error;
    }
    else{
      setAlert({ variant: "success", message: "Please check your email" })
      setTimeout(() => {
        setAlert({variant: "",message: ""})
      },2000)
    }
    }
    catch(err){
      setAlert({
        variant: "danger",
        message: err.message
      })
      setTimeout(() => {
        setAlert({variant: "",message: ""})
      },2000)
    }
    
  }

  const handleLogin = async (e) => {

    e.preventDefault();

    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
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

      setAlert({
        variant: "success",
        message: "Logged in successfully"
      })

      localStorage.setItem("idToken", data.idToken);
      localStorage.setItem("refreshToken", data.refreshToken)
      localStorage.setItem("userId", data.localId)

      setTimeout(() => {
        setLoggedIn(true);
        setIdToken(data.idToken);
        setUserId(data.localId)
        setAlert({ variant: "", message: "" })
        navigate("/home")
      }, 2000)
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center my-5" style={{ minHeight: '50vh', paddingTop: '100px' }}>
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Login</Card.Title>
          {alert.message && <Alert key={alert.variant} variant={alert.variant}>{alert.message}</Alert>}
          <Form onSubmit={handleLogin}>

            <FormItem id={"loginEmail"} label={"Email Address"} type={"email"} placeholder={"EnterEmail"} value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormItem id={"loginPassword"} label={"Password"} type={"password"} placeholder={"EnterPassWord"} value={password} onChange={(e) => setPassword(e.target.value)} />

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
