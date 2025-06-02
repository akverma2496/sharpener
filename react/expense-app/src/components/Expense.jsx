import React from 'react';
import { Card } from 'react-bootstrap';

const Expense = ({ amount, description, category }) => {
  return (
    <Card className="shadow-sm w-100" style={{ maxWidth: '320px' }}>
      <Card.Body>
        <Card.Title>Dummy</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dummy</Card.Subtitle>
        <Card.Text>
          <strong>₹{"100"}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Expense;
