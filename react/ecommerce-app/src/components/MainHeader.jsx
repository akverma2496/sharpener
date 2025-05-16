import { useContext } from 'react'
import { Navbar, Container, Nav, Button, Badge, Modal } from 'react-bootstrap'
import { ProductContext } from '../store/ProductProvider'
import { createPortal } from 'react-dom'
import MyModal from './MyModal'

const MainHeader = () => {

    const {products, modal, setModal} = useContext(ProductContext)

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>

                    <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Store</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>

                    <Button variant="primary" onClick={() => setModal(true)}>
                        Cart <Badge bg="secondary">9</Badge>
                        <span className="visually-hidden">unread messages</span>
                    </Button>
                    {modal && createPortal(<MyModal modal={modal} setModal={setModal} products={products}/>, document.getElementById("modal"))}
                </Container>
            </Navbar>

        </>
    )
}

export default MainHeader