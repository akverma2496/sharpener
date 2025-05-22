import React, { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { DataContext } from "../store/DataProvider";

const MyModal = ({ modal, setModal }) => {

  const [studentName, setStudentName] = useState("");
  const [selectedOption, setSelectedOption] = useState("Amar");

  const data = useContext(DataContext)

  const handleVote = () => {

    data.setMonitorData((prevState) => {

      let index = prevState.findIndex((s) => s.candidate === selectedOption)
      let updatedState = [...prevState]
      let target = {...updatedState[index]}
      target.votes = [...target.votes, studentName]
      updatedState[index] = target
      
      console.log(updatedState)
      return updatedState

    })
    setModal(false);
  };

  return (
    <Modal show={modal} onHide={() => setModal(false)} centered>

      <Modal.Header closeButton>
        <Modal.Title>Vote for Student</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="studentName" className="mb-3">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter student name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
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
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleVote}>
          Vote
        </Button>
      </Modal.Footer>

    </Modal>
  );
};

export default MyModal;
