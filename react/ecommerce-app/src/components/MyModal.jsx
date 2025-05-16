import { Button, Modal, ListGroup, Form, Image } from 'react-bootstrap';

const MyModal = ({ modal, setModal, cartItems, setCartItems }) => {

  const removeCartItem = (product) => {
    const filteredItems = cartItems.filter((item) => {
      return product.id != item.id
    })

    setCartItems(filteredItems)
  }

  return (
    <>
      <Modal
        show={modal}
        onHide={() => setModal(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cart Items
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <ListGroup>
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
                    value={1}
                    onChange={(e) => setQuantity(e.target.value)}
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
          </ListGroup>


          {/* <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
