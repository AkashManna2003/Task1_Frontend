import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import List from './List';
const Customer = (props) => {
    function logout() {
        props.logout();
    }
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">IIT Kharagpur Eateries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="http://localhost:3000/customer/login">Customer Login</Nav.Link>
            <Nav.Link href="http://localhost:3000/business/login">Seller Login</Nav.Link> */}
            <button onClick={logout}>Log Out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        Welcome {props.name};
        <List />
    </div>
  )
}

export default Customer