import React from 'react';

import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Metripoly Health</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#pricing">Articles</Nav.Link>

            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
