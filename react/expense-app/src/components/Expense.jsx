import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { createPortal } from 'react-dom';
import MyModal from './MyModal';
import { ExpenseContext } from '../store/ExpenseProvider';
import { AuthContext } from '../store/AuthProvider';

const Expense = ({id, item}) => {

  const { allExpenses, setAllExpenses } = useContext(ExpenseContext)
  const {userId} = useContext(AuthContext)
  const [modal, setModal] = useState(false)

  const deleteExpense = async () => {
    try{
      const response = await fetch(`https://expense-tracker-cb823-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${userId}/${id}.json`,{
        method : "DELETE"
      })
    }
    catch(err){}

    const filteredExpenses = Object.entries(allExpenses).filter(([key, value]) => {
      return id !== key
    })

    const finalfiltered = Object.fromEntries(filteredExpenses)
    setAllExpenses(finalfiltered)
  }

  return (
    <Card className="shadow-sm w-100" style={{ maxWidth: '320px' }}>
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div>
        <Card.Title>{item.description}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
        <Card.Text>
          <strong>₹{item.amount}</strong>
        </Card.Text>
        </div>

        <div className="d-flex flex-column gap-2">
      <Button id={id} variant="primary" size="sm" onClick={() => setModal(true)}>
        Edit
      </Button>
      <Button id={id} variant="danger" size="sm" onClick={deleteExpense}>
        Delete
      </Button>
    </div>

      </Card.Body>
      {modal && createPortal(<MyModal modal={modal} setModal={setModal} id={id} item={item}/>, document.getElementById("modal"))}
    </Card>
  );
};

export default Expense;
