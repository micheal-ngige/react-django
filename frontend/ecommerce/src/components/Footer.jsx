import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row className="text-center py-3">
          <Col className="text-center py-3">
            Copyrights &copy; AFRI CART {currentYear}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
