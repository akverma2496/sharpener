import React, { useContext, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { expenseActions } from '../store/expense-slice';
const database = import.meta.env.VITE_DATABASE_KEY

const MyModal = ({ modal, setModal, item, id }) => {

  const localId = useSelector(state => state.auth.localId)
  const totalExpenseAmount = useSelector(state => state.expense.totalExpenseAmount)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(item.amount);
  const [description, setDescription] = useState(item.description);
  const [category, setCategory] = useState(item.category);
  const [date, setDate] = useState(item.date)


  const handleSubmit = async (e) => {
    e.preventDefault()

    const responseOne = await fetch(`${database}/${localId}/allExpenses/${id}.json`, {
      method: "PUT",
      body: JSON.stringify({
        id : id,
        amount: amount,
        description: description,
        category: category,
        date: date
      }),
      headers: { "Content-Type": "application/json" }
    })

    const responseTwo = await fetch(`${database}/${localId}/totalExpenseAmount.json`, {
      method: "PUT",
      body: JSON.stringify(totalExpenseAmount - parseFloat(item.amount) + parseFloat(amount)),
      headers: { "Content-Type": "application/json" }
    })

    if (!responseOne.ok || !responseTwo.ok) {
      const { error } = await response.json()
      toast.error(error.message)
    }
    else {
      dispatch(expenseActions.updateExpense({
        id, 
        amount : parseFloat(amount), 
        description, category, date
      }))
    }
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

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
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