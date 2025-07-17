import { useContext } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ProductContext } from "../store/ProductProvider";
import { AuthContext } from "../store/AuthProvider";

const ProductDetail = () => {

    const params = useParams();
    const {products, cartItems, setCartItems} = useContext(ProductContext)
    const {userId} = useContext(AuthContext)


    const item = products.filter((product) => product.id === params.id )

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

  return (
    <Container className="mt-5 pt-5">
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

          <Button variant="success" onClick={() => addToCartHandler(item[0])}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail