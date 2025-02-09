
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo_2 from './logo-2.jpg';

function Navigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo_2} alt="logo" width="25" height="25"/ ></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/tool">Tool</Nav.Link>
          <Nav.Link as={Link} to="/working">Working</Nav.Link>
          <Nav.Link as={Link} to="/NeuroBOT">NeuroBOT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
