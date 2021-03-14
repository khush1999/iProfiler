import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';

const Styles = styled.div`
  .navbar {
    background-color: #5f9ea0;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #131f20;
    &:hover {
      color: white;
    }
  }
`;

export const DashboardPage = () => (
    <Container fluid className="mt-5 pl-0">
        <Styles>
            <Navbar expand="lg" fixed="top">
                <Navbar.Brand href="/">Welcome, Start Hiring</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/">Home</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/">Applicants</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/">Job Postings</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/">Logout</Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles >
    </Container>
);