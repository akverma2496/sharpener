import { useContext } from "react";
import { Form, Image, ListGroup, Button } from "react-bootstrap";
import { AuthContext } from "../store/AuthProvider";

const ListItems = ({cartItems, setCartItems}) => {

  const { userId} = useContext(AuthContext)

    const updateQuantity = (inc, name) => {

    setCartItems((prevItems) => (
      prevItems.map((item) => (
        item.title === name ? { ...item, quantity: parseInt(inc) } : item
      ))
    ))

  };

  const removeCartItem = async (product) => {

    const filteredItems = cartItems.filter((item) => {
      return product.id != item.id
    })

    setCartItems(filteredItems)

    const response = await fetch(`https://e-commerce-2496-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems/${userId}.json`,{
        method:"PUT",
        body: JSON.stringify(filteredItems),
        headers : { "Content-Type" : "application/json"}
    })
  }

  return (
    <>
        {
            cartItems.map((product) => (
            <ListGroup.Item id={product.id} className="d-flex align-items-center">
                {/* Small Image */}
                <Image
                src={product.imageUrl}
                rounded
                style={{ width: 50, height: 50, objectFit: 'cover' }}
                className="me-3"
                />

                {/* Title */}
                <div style={{ flex: '1 1 200px' }} className="me-3">
                {product.title}
                </div>

                {/* Price */}
                <div style={{ width: 80 }} className="me-3">
                ${product.price.toFixed(2)}
                </div>

                {/* Quantity input */}
                <Form.Control
                type="number"
                min="1"
                value={product.quantity}
                onChange={(e) => updateQuantity(e.target.value, product.title)}
                style={{ width: 70 }}
                className="me-3"
                />

                {/* Remove button */}
                <Button variant="danger" onClick={() => removeCartItem(product)}>
                Remove
                </Button>
            </ListGroup.Item>
            ))
        }
    </>
  )
}

export default ListItems