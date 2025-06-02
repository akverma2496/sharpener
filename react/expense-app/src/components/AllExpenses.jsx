import React from 'react'
import Expense from './Expense'
import { Row, Col } from 'react-bootstrap'

const AllExpenses = () => {
  return (
    <Row className="justify-content-center gx-3 gy-4">
        <Col key={0} xs={10} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Expense />
        </Col>
        <Col key={0} xs={10} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Expense />
        </Col>
        <Col key={0} xs={10} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Expense />
        </Col>

        <Col key={0} xs={10} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Expense />
        </Col>
        <Col key={0} xs={10} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Expense />
        </Col>
    </Row>
  )
}

export default AllExpenses