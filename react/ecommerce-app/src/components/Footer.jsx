// Footer.jsx
import { Container, Row, Col } from "react-bootstrap";
import { FaYoutube, FaSpotify, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-light py-3 mt-5 border-top position-fixed bottom-0 w-100">
      <Container>
        <Row className="align-items-center">
          {/* Left half: Text */}
          <Col md={6} className="text-start">
            <h3>© 2025 MySite. All rights reserved.</h3>
          </Col>

          {/* Right half: Social Icons */}
          <Col md={6} className="text-end">
            <a href="https://youtube.com" className="text-dark mx-2" target="_blank" rel="noreferrer">
              <FaYoutube size={20} />
            </a>
            <a href="https://spotify.com" className="text-dark mx-2" target="_blank" rel="noreferrer">
              <FaSpotify size={20} />
            </a>
            <a href="https://facebook.com" className="text-dark mx-2" target="_blank" rel="noreferrer">
              <FaFacebook size={20} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
