import { useContext } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { DataContext } from "../store/DataProvider";

const MonitorList = () => {

    const data = useContext(DataContext)

    const cardData = [
  { id: 1, title: "Amar", total: 12 },
  { id: 2, title: "Aqbar", total: 7 },
  { id: 3, title: "Anthony", total: 19 },
  { id: 4, title: "Amarinder", total: 4 },
];

const dummyItems = [
  { name: "Item A" },
  { name: "Item B" },
];


  return (
    <Container className="my-4">
      <Row>
        {cardData.map((card) => (
          <Col key={card.id} xs={12} md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title as="h3" className="fs-5">{card.title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">Total: {card.total}</Card.Subtitle>
                <ListGroup variant="flush">
                  {dummyItems.map((item, idx) => (
                    <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center px-0">
                      {item.name}
                      <Button variant="danger" size="sm">Remove</Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MonitorList