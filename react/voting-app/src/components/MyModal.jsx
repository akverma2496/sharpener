import React, { useContext, useState } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { DataContext } from "../store/DataProvider";

const MyModal = ({ modal, setModal }) => {

  const [validated, setValidated] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [selectedOption, setSelectedOption] = useState("Amar");
  const { monitorData, setMonitorData } = useContext(DataContext)

  const handleVote = async (e) => {

    e.preventDefault(); // prevent default submit immediately

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;  // stop further processing if invalid
    }

    setValidated(true);

    let copyMonitorData = { ...monitorData }
    copyMonitorData[selectedOption].push(studentName)
    setMonitorData(copyMonitorData)

    try {
      await fetch(`https://vote-app-7afce-default-rtdb.asia-southeast1.firebasedatabase.app/votingData.json`,
        {
          method: "PUT",
          body: JSON.stringify(copyMonitorData),
          headers: { "Content-Type": "application/json" }
        })
    } catch (error) { }

    setModal(false);
  };

  return (
    <Modal show={modal} onHide={() => setModal(false)} centered>

      <Modal.Header closeButton>
        <Modal.Title>Vote for Student</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleVote} noValidate validated={validated}>
          
          <Form.Group controlId="studentName" className="mb-3">
            <Form.Label>Student Name</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                placeholder="Enter student name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="selectOption" className="mb-3">
            <Form.Label>Select Monitor</Form.Label>
            <Form.Select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Amar">Amar</option>
              <option value="Akbar">Akbar</option>
              <option value="Anthony">Anthony</option>
              <option value="Amarinder">Amarinder</option>
            </Form.Select>
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Vote
            </Button>
          </Modal.Footer>

        </Form>

      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
