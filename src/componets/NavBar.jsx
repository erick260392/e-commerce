import React from 'react';
import { Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';

const NavBar = () => {
    return (
       
          <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/#/">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#/">Home</Nav.Link>
            <Nav.Link href="/#/Purchaches">Puchaches</Nav.Link>
            <Nav.Link href="/#/login">Login</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;