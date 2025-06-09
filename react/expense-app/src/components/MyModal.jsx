import React, {useContext, useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { ExpenseContext } from '../store/ExpenseProvider';
import { AuthContext } from '../store/AuthProvider';

const MyModal = ({modal, setModal, item, id}) => {

    const {allExpenses, setAllExpenses} = useContext(ExpenseContext)
    const { userId } = useContext(AuthContext)

  const [amount, setAmount] = useState(item.amount);
  const [description, setDescription] = useState(item.description);
  const [category, setCategory] = useState(item.category);

  

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(`https://expense-tracker-cb823-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${userId}/${id}.json`,{
      method : "PUT",
      body: JSON.stringify({
        amount : amount,
        description : description,
        category : category
      }),
      headers : { "Content-Type" : "application/json"}
    })
    
    setAllExpenses((prev) => {
        return {
            ...prev,
            [id] : {
                amount : amount,
                description : description,
                category: category
            }
        }
    })
    setModal(false)
  }

  return (
    <Modal
      show={modal}
      onHide={() => setModal(false)}
      backdrop="static"
      keyboard={false}
      centered
      contentClassName="bg-dark text-light"
      style={{ backdropFilter: 'brightness(50%)' }} // makes the background darker and transparent
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title>Edit Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="editFormAmount">
            <Form.Label>Amount Spent</Form.Label>
            <Form.Control
              type="number"
              min="0"
              step="0.01"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="bg-dark text-light border-light"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="editFormDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="bg-dark text-light border-light"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="editFormCategory">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-dark text-light border-light"
            >
              <option>Petrol</option>
              <option>Groceries</option>
              <option>Electronics</option>
              <option>Clothes</option>
            </Form.Select>
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Edit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default MyModal