import { useContext, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { createPortal } from "react-dom";
import MyModal from "./MyModal";
import { DataContext } from "../store/DataProvider";

const Header = () => {

  const [modal, setModal] = useState(false);
  const {monitorData} = useContext(DataContext)

  let totalVotes = 0;

  Object.values(monitorData).forEach((item) => {
    totalVotes += item.length-1
  })
  
  return (
    <div className="bg-light p-4 rounded shadow-sm">

      <Container className="text-center">
        <h1 className="mb-2">Class Monitor Vote</h1>
        <p className="text-secondary mb-4 fs-5">Total Votes: {totalVotes}</p>
        <Button variant="primary" onClick={() => setModal(true)}>
          Vote Now
        </Button>
      </Container>

      {modal && createPortal(<MyModal modal={modal} setModal={setModal} />, document.getElementById("modal"))}
    </div>
  )
}

export default Header