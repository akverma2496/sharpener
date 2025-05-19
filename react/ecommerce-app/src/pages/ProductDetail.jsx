import { useContext } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProductContext } from "../store/ProductProvider";

const ProductDetail = () => {

    const params = useParams();
    const {products} = useContext(ProductContext)

    // const product = {
    //     image: "httpdfsdkfj",
    //     name: "Akash",
    //     description: "This is akash product",
    //     price: 100
    // }

    const item = products.filter((product) => product.id === params.id )

  return (
    <Container className="mt-4">
      <Row>
        {/* Product Image */}
        <Col md={6}>
          <Image src={item[0].imageUrl} alt={item[0].title} fluid rounded />
        </Col>

        {/* Product Info */}
        <Col md={6}>
          <h2>{item[0].title}</h2>
          <p>This is the dummy description</p>
          <h4 className="text-primary">${item[0].price.toFixed(2)}</h4>

          <Button variant="success">
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail