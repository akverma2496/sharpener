import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {ProductContext} from '../store/ProductProvider';
import { Col, Container, Row } from 'react-bootstrap';

const AllItems = () => {

    const {products} = useContext(ProductContext)

    return (
        <Container className="my-4">
            <Row>
                {products.map((item, index) => (
                    <Col key={index} xs={12} md={6} lg={3} className="mb-4">

                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>Price: ${item.price}</Card.Text>
                                <Button variant="primary">Add To Cart</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>   
    )
}

export default AllItems