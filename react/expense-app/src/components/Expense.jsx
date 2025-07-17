import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { createPortal } from 'react-dom';
import MyModal from './MyModal';
import { useDispatch, useSelector } from 'react-redux';
import { expenseActions } from '../store/expense-slice';
import { toast } from 'react-toastify';
const database = import.meta.env.VITE_DATABASE_KEY


const Expense = ({ id, item }) => {

  const localId = useSelector(state => state.auth.localId)
  const totalExpenseAmount = useSelector(state => state.expense.totalExpenseAmount)
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

  const deleteExpense = async () => {
    console.log(item.id, database, localId)
    try {
      const responseOne = await fetch(`${database}/${localId}/allExpenses/${item.id}.json`, {
        method: "DELETE"
      })

      const responseTwo = await fetch(`${database}/${localId}/totalExpenseAmount.json`, {
        method: "PUT",
        body: JSON.stringify(totalExpenseAmount - parseFloat(item.amount)),
        headers: { "Content-Type": "application/json" }
      })


      if (!responseOne.ok || !responseTwo.ok) {
        const { error } = await response.json()
        throw new Error(error)
      } else {
        dispatch(expenseActions.deleteExpense(item))
      }
    }
    catch (error) { toast.error("Something went wrong") }
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
      <div style={{ "textAlign": "center" }}>{item.date}</div>
      {modal && createPortal(<MyModal modal={modal} setModal={setModal} id={id} item={item} />, document.getElementById("modal"))}
    </Card>
  );
};

export default Expense;
