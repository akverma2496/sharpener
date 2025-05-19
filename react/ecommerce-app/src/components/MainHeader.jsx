import { useContext } from 'react'
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap'
import { ProductContext } from '../store/ProductProvider'
import { createPortal } from 'react-dom'
import MyModal from './MyModal'
import { Link } from 'react-router-dom'

const MainHeader = () => {

    const { modal, setModal, cartItems, setCartItems } = useContext(ProductContext)

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>

                    <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>

                    {/* <Nav className="me-auto">
                        <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
                        <Nav.Link> <Link to="/store">Store</Link></Nav.Link>
                        <Nav.Link>  <Link to="/about">About</Link> </Nav.Link>
                        <Nav.Link>  <Link to="/contact">Contact Us</Link> </Nav.Link>
                    </Nav> */}

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/store">Store</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    </Nav>

                    <Button variant="primary" onClick={() => setModal(true)}>
                        Cart <Badge bg="secondary">{cartItems.length}</Badge>
                        <span className="visually-hidden">unread messages</span>
                    </Button>

                    {modal && createPortal(<MyModal modal={modal} setModal={setModal} cartItems={cartItems} setCartItems={setCartItems} />, document.getElementById("modal"))}
                </Container>
            </Navbar>

        </>
    )
}

export default MainHeader