import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {ProductContext} from '../store/ProductProvider';
import { Col, Container, Row } from 'react-bootstrap';

const AllItems = () => {

    const {products, setCartItems, cartItems} = useContext(ProductContext)

    const addToCartHandler = (product) => {

        setCartItems((prevItems) => {
            return [...prevItems, {...product, quantity: 1}]
        })
  
    }

    return (
        <Container className="my-4">
            <Row>
                {products.map((product) => (
                    <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">

                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={product.imageUrl} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>Price: ${product.price}</Card.Text>
                                <Button onClick={() => addToCartHandler(product)} variant="primary">Add To Cart</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>   
    )
}

export default AllItems