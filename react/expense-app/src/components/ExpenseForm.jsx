import React, { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { ExpenseContext } from '../store/ExpenseProvider';
import { AuthContext } from '../store/AuthProvider';

const ExpenseForm = (props) => {

  const {allExpenses, setAllExpenses} = useContext(ExpenseContext)
  const {userId} = useContext(AuthContext)

  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Petrol');

  const handleSubmit = async (e) => {

    e.preventDefault();
    const expense = {
      amount: parseFloat(amount),
      description,
      category
    };
   
    try{
      const response = await fetch(`https://expense-tracker-cb823-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${userId}.json`,{
        method: "POST",
        body: JSON.stringify(expense),
        headers :{ "Content-Type" : "application/json"}
      })

      const data = await response.json()
      console.log("here we get some id",data)

      setAllExpenses((prev) => ({...prev, [data.name]: expense}))

    }
    catch(err){}

    setAmount('');
    setDescription('');
    setCategory('Petrol');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header as="h5">Add Expense</Card.Header>
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

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Add Expense
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpenseForm;
