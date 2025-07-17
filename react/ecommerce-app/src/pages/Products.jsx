import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ProductContext } from '../store/ProductProvider';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthProvider';

const Products = () => {

    const { products, setCartItems, cartItems } = useContext(ProductContext)
    const { userId } = useContext(AuthContext)
    console.log(userId)

    const navigate = useNavigate();

    const addToCartHandler = async (product) => {

        const index = cartItems.findIndex((item) => item.title === product.title);
        let updatedItems = [...cartItems];

        if (index != -1) {
            updatedItems[index] = {
                ...updatedItems[index],
                quantity: updatedItems[index].quantity + 1
            }
        }
        else{
            updatedItems = [...cartItems, { ...product, quantity: 1 }]
        }


        setCartItems(updatedItems)

        const response = await fetch(`https://e-commerce-2496-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems/${userId}.json`,{
                    method:"PUT",
                    body: JSON.stringify(updatedItems),
                    headers : { "Content-Type" : "application/json"}
                })

    }

    const handleCardClick = (id) => {
        navigate(`/products/${id}`)
    }

    return (
        <Container className="my-4">
            <h2 style={{ textAlign: "center", padding: "2em" }}>Products</h2>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
                        <Card style={{ width: '100%' }} onClick={() => handleCardClick(product.id)}>
                            <Card.Img variant="top" src={product.imageUrl} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>Price: ${product.price}</Card.Text>
                                <Button onClick={(e) => { e.stopPropagation(); addToCartHandler(product) }} variant="primary">Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Products