import { Form, Image, ListGroup, Button } from "react-bootstrap";

const ListItems = ({cartItems, setCartItems}) => {

    const updateQuantity = (inc, name) => {
    setCartItems((prevItems) => (
      prevItems.map((item) => (
        item.title === name ? { ...item, quantity: parseInt(inc) } : item
      ))
    ))
  };

  const removeCartItem = (product) => {
    const filteredItems = cartItems.filter((item) => {
      return product.id != item.id
    })
    setCartItems(filteredItems)
  }

  return (
    <>
        {
            cartItems.map((product) => (
            <ListGroup.Item className="d-flex align-items-center">
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