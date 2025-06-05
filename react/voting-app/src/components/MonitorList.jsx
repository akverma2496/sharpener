import { useContext } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { DataContext } from "../store/DataProvider";

const MonitorList = () => {

    const { monitorData, setMonitorData } = useContext(DataContext)

    const removeVote = async (e) => {

      let id = e.target.id
      let value = e.target.value

      let seletedCandidate = monitorData[id]
      const votes = seletedCandidate.filter((item) => item != value)
      
      const copyState = {...monitorData, [id] : [...votes]}

      try {
        const response = await fetch(`https://vote-app-7afce-default-rtdb.asia-southeast1.firebasedatabase.app/votingData.json`, {
            method: "PUT",
            body: JSON.stringify(copyState),
            headers: { "Content-Type" : "application/json" }
        })
        
      } catch (error) {}

      setMonitorData(copyState)
    }


    const cardData = [
  { id: 1, title: "Amar", total: monitorData["Amar"].length-1, votes: monitorData["Amar"]},
  { id: 2, title: "Akbar", total: monitorData["Akbar"].length-1, votes: monitorData["Akbar"]},
  { id: 3, title: "Anthony", total: monitorData["Anthony"].length-1, votes: monitorData["Anthony"]},
  { id: 4, title: "Amarinder", total: monitorData["Amarinder"].length-1, votes: monitorData["Amarinder"]},
    ];


  return (
    <Container className="my-4">
      <Row>
        {cardData.map((card) => (
          <Col key={card.id} xs={12} md={6} lg={3} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title as="h3" className="fs-5">{card.title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">Total: {card.total} votes</Card.Subtitle>

                <ListGroup variant="flush">
                  {card.votes.map((item, idx) => (
                  
                  (idx != 0) &&
                  <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center px-0">
                      {item}
                      <Button id={card.title} value={item}  variant="danger" size="sm" onClick={removeVote}>Remove</Button>
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