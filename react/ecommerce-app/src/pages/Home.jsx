import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {

  const events = [
    {
      date: "July 20",
      location: "New York, NY",
      title: "Summer Beats Festival",
      link: "#",
    },
    {
      date: "August 5",
      location: "Los Angeles, CA",
      title: "Rock the Coast",
      link: "#",
    },
    {
      date: "September 10",
      location: "Chicago, IL",
      title: "Windy City Jam",
      link: "#",
    },
  ];


  return (
    <>
    <Container className="py-4">
      <h2 style={{textAlign: "center", padding: "2em"}}>Tours</h2>
      {events.map((event, index) => (
        <Row
          key={index}
          className="align-items-center mb-3 p-3 border rounded shadow-sm"
        >
          <Col xs={12} md={2}>
            <strong>{event.date}</strong>
          </Col>
          <Col xs={12} md={3}>
            {event.location}
          </Col>
          <Col xs={12} md={5}>
            <span>{event.title}</span>
          </Col>
          <Col xs={12} md={2} className="text-md-end mt-2 mt-md-0">
            <Button variant="primary" href={event.link}>
              Buy Tickets
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
    </>
  )
}

export default Home