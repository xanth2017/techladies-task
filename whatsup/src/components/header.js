import React from "react";
import s from "./Header.module.scss";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';




function Header() {

  return (
    <div className={s.header}>
        <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" >
          <Container>
          <Navbar.Brand href="#home" className={s.custom}>@RebootLifer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
    </div>
  );
}

export default Header;

