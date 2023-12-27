import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">ScalesOps</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/#">HOME</Nav.Link>
              <Nav.Link href="/#">SHOP</Nav.Link>
              <Nav.Link href="/#">JOURNAL</Nav.Link>
              <Nav.Link href="/#">ABOUT</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;