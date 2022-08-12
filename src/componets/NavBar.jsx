import React from 'react';
import { Navbar,Container,Nav,Button} from 'react-bootstrap';
import  {  useState } from 'react';
import { useNavigate } from 'react-router';
import Car from './Car';

const NavBar = () => {

  const navigate = useNavigate();
 const token = localStorage.getItem("token")
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => {
  if (token) {
    setShow(true);
  } else {
    navigate("/login");
  }
};

const logout = () => {
  localStorage.setItem("token", "");
  navigate("/login");
};

  return (
          <><Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/#/">E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                        <Nav.Link href="/#/Purchaches">Puchaches</Nav.Link>
              <Nav.Link href="/#/login">Login</Nav.Link>
              {token !== "" ?
                <Nav.Link as={Button} onClick={logout} >Log out</Nav.Link> :
                <Nav.Link></Nav.Link>}
              
                <Nav.Link as={Button} onClick={handleShow}  ><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <------------------------------------------------------> */}
      <Car show={show} handleClose={handleClose}/>
    </>



    );
};

export default NavBar;