import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router"
import PropTypes from "prop-types";

//Custom SCSS to style this component
import s from "./Header.module.scss";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from "react-bootstrap/NavItem";




function Header() {
  let toggleClassName = '';
  // let currentLocation = this.location.pathname;


  // console.log(currentLocation);
  // if (currentLocation === 'Home') {
  //   toggleClassName = s.customToggle;
  // }

  return (
    <div className={s.header}>
        <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" >
          <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
          <Navbar.Brand className={s.custom}>
            <Link to="/">@RebootLifer</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={s.customToggle} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className={s.navCustom}>
              <Nav className="mr-auto w-100 justify-content-center">
                <NavItem>
                  <Nav.Link>
                  <Link to="/about">About</Link>
                  </Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link>
                  <Link to="/contact">Contact</Link>
                  </Nav.Link>
                </NavItem>
              </Nav>
            </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      
    </div>
  );
}

export default withRouter(Header);

