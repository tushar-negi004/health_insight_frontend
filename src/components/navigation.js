
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/tool">Tool</Nav.Link>
          <Nav.Link as={Link} to="/working">Working</Nav.Link>
          <Nav.Link as={Link} to="/feedback">NeuroBOT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
