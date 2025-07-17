import React, { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Collapse } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { expenseActions } from '../store/expense-slice';
import { toast } from 'react-toastify';
import ShortUniqueId from 'short-unique-id';
const database = import.meta.env.VITE_DATABASE_KEY

const ExpenseForm = (props) => {

  const uid = new ShortUniqueId({ length: 10 });

  const dispatch = useDispatch()
  const localId = useSelector(state => state.auth.localId) || localStorage.getItem("localId")
  const expenseState = useSelector(state => state.expense)

  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Petrol');
  const [date, setDate] = useState()

  const handleSubmit = async (e) => {

    e.preventDefault();
    const expense = {
      amount: parseFloat(amount),
      description,
      category,
      date
    };

    const id = uid.rnd()

    try {
      const response = await fetch(`${database}/${localId}.json`, {
        method: "PUT",
        body: JSON.stringify({...expenseState, totalExpenseAmount : expenseState.totalExpenseAmount + expense.amount, 
          allExpenses : {...expenseState.allExpenses, [id] : {id, ...expense}}}),
        headers: { "Content-Type": "application/json" }
      })

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error)
      }
      else {
        const data = await response.json()
        console.log("here we get some id", data)
        dispatch(expenseActions.addExpense({
          id,
          ...expense
        }))
      }

    }
    catch (error) { toast.error("Something went wrong") }

    setAmount('');
    setDescription('');
    setCategory('Petrol');
    setDate("")
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>

            <Card.Header as="h5" onClick={() => setShowForm(prev => !prev)}>
              <div className="d-flex justify-content-between align-items-center">
                <span>Add Expense</span>
                <span
                  style={{
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    userSelect: "none",
                  }}
                >
                  {showForm ? "▲" : "▼"}
                </span>
              </div>
            </Card.Header>

            <Collapse in={showForm}>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formAmount">
                    <Form.Label>Amount Spent</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
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
                      Add Expense
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Collapse>

          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpenseForm;
