import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { uiActions } from '../store/ui-slice';
import Premium from './Premium';

const Header = () => {

  const { isLoggedIn } = useSelector(state => state.auth)
  const theme = useSelector((state) => state.ui.theme);
  const expense = useSelector(state => state.expense)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout())
    navigate("/login")
  }

  return (
    <Navbar bg={theme} expand="lg">
      <Container>
        
        <Navbar.Brand as={Link} to="/">
          Expense Tracker
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
        </Nav>

        <Nav>
          {isLoggedIn &&

            <div className="d-flex align-items-center gap-3 flex-wrap">

              {
                (expense.totalExpenseAmount >= 10000 || expense.activated)  && <Premium />
              }


              <span
                className={`px-2 py-1 rounded fw-semibold ${theme === "light" ? "bg-light text-dark" : "bg-secondary text-white"
                  }`}
                style={{ whiteSpace: "nowrap" }}
              >
                💰 Total: ₹ {expense.totalExpenseAmount}
              </span>

              <Button variant="danger" size="sm" onClick={logoutHandler}>
                Logout
              </Button>

            </div>
          }
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
