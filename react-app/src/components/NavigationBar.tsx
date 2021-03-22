import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import iprofilerlogo from '../assets/app-logo.png';

const Styles = styled.div`
  .navbar {
    background-color: #FFFFFF;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
    border-radius: 40px;
    min-height: 80px;
    margin-top:10px;
    margin-left:10px;
    margin-right:10px;
  }
  img {
    height: 4rem;
  }
  a, .navbar-nav .nav-link {
    color: #000000;
    &:hover {
      color: #000000;
      border-bottom: 3px solid #AE4DFF;
    }
  }
  .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, 
  .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #000000;
    border-bottom: 3px solid #AE4DFF;
}

.navbar-nav {
  font-size: 1.3rem;
  padding-right: 2rem;
}

.nav-link {
  padding: 0.5rem 2.5rem;
}

.brand-border {
  border-bottom: none;
}
.brand-border:hover {
  border-bottom: none;
}

.navbar-light .navbar-toggler {
    color: white;
    border-color: white;
}
`;

export const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/" className="brand-border">
          <img src={iprofilerlogo} alt="iprofiler" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/Pricing">
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Apply">
              <Nav.Link>Apply</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
  );
};