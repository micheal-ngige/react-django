import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>Afri Cart</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to="/">
                <Nav.Link>
               
                  <i className="fas fa-home"></i> Home
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/cart">
                <Nav.Link>
               
                  <i className="fas fa-shopping-cart"></i> CART
                </Nav.Link>
              </LinkContainer>

                 <LinkContainer to="/login">
              <Nav.Link>
             
                <i className="fas fa-user"></i> LOGIN
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header
