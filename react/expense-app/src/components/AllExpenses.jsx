import React, { useContext } from 'react'
import Expense from './Expense'
import { Row, Col } from 'react-bootstrap'
import { ExpenseContext } from '../store/ExpenseProvider'
//import { AuthContext } from '../store/AuthProvider'

const AllExpenses = () => {

const {allExpenses} = useContext(ExpenseContext)
  
  return (
    <Row className="justify-content-center gx-3 gy-4" style={{width:"90%", margin: "auto"}}>
      {
        Object.entries(allExpenses).map(([key, value]) => {
          return <Col key={key} xs={10} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Expense id={key} item={value}/>
        </Col>
        })
      }
    </Row>
  )
}

export default AllExpenses