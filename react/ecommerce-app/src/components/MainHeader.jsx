import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap'

const MainHeader = () => {
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

                    <Button variant="primary">
                        Cart <Badge bg="secondary">9</Badge>
                        <span className="visually-hidden">unread messages</span>
                    </Button>
                </Container>
            </Navbar>

        </>
    )
}

export default MainHeader