import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthProvider';

const Header = () => {

  const authValues = useContext(AuthContext)
  const navigate = useNavigate();

  const logoutHandler = () => {
    authValues.setLoggedIn(false)
    authValues.setIdToken(null)
    localStorage.removeItem("idToken")
    navigate("/login")
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Left side: Brand + Nav */}
        <Navbar.Brand as={Link} to="/">
          Expense Tracker
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
        </Nav>

        {/* Right side: Button */}
        <Nav>
          {
            !authValues.loggedIn ?
            <Button as={Link} to="/signup" variant="primary">Create an Account</Button> : 
            <Button variant="danger" onClick={logoutHandler}>Logout</Button>
          } 
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
