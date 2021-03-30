import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import iprofilerlogo from '../assets/LogoFinal.png';

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
      color: #AE4DFF;
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

export const NavigationBar = (props) => {

  return (
    <Styles>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/" className="brand-border">
          <img src={iprofilerlogo} alt="iprofiler" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/Contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Pricing">
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Apply" style={{display:"none"}}>
              <Nav.Link>Apply</Nav.Link>
            </LinkContainer>
            {props.navigationState ?
              (<LinkContainer to="/DashboardPage">
                <Nav.Link><i className="fa fa-user-circle" style={{ fontSize: "1.75em" }} />
                </Nav.Link>
              </LinkContainer>) :
              (<LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles >
  );
};