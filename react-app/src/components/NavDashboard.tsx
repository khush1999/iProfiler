import axios from 'axios';
import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import iprofiler from "../assets/LogoFinal.png";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from 'react-router-dom';
import './Navdashboard.css';

export const NavDashboard = () => {

    const history = useHistory();

    const [message, setMessage] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get("/logout");
            console.log("$$$$$$$$$$$$$$$$$$$$$$");
            console.log(res.data);

            if (res.data === "EmailID") {
                history.replace("/Login");
                // history.go(-1);
            }
        } catch (err) {
            if (err.response.status == 500) {
                setMessage("There was a problem with the server");
            } else {
                setMessage(err.response.data.msg);
            }
        }
    };

    return (
        <div>
            <Navbar expand="lg" fixed="top">
                <Navbar.Brand href="/" className="brand-border">
                    <img src={iprofiler} alt="iprofiler" className="logo-image" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/DashboardPage">
                            <Nav.Link>Applicants</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/JobPostings">
                            <Nav.Link>Job Postings</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="#" onClick={handleClick}>
                            <Nav.Link>Logout</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
