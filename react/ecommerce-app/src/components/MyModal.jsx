import { Button, Modal, ListGroup } from 'react-bootstrap';

const MyModal = ({ products, modal, setModal }) => {

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
          <h4>4 Items Found</h4>

          <ListGroup>
            {
              products.map((product) => (
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <span>{product.title}</span>
                <Button variant="danger" size="sm">Remove</Button>
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
