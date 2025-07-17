import { Button, Modal, ListGroup } from 'react-bootstrap';
import ListItems from './ListItems';
import { useContext } from 'react';
import { AuthContext } from '../store/AuthProvider';

const MyModal = ({ modal, setModal, cartItems, setCartItems }) => {

  const { userId } = useContext(AuthContext)

  const updateAllItems = async () => {
    setModal(false)
    console.log("i am running")
    const response = await fetch(`https://e-commerce-2496-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems/${userId}.json`, {
      method: "PUT",
      body: JSON.stringify(cartItems),
      headers: { "Content-Type": "application/json" }
    })
  }

  return (
    <>
      <Modal
        show={modal}
        onHide={updateAllItems}
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
          {cartItems.length === 0 && <h3 style={{ textAlign: "center" }}>Cart Is Empty</h3>}
          <ListGroup>
            <ListItems cartItems={cartItems} setCartItems={setCartItems} />
          </ListGroup>


          {/* <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={updateAllItems}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
