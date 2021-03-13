import React from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import './Login.css'

const divColor = { backgroundColor: '#cce7ff' };

export const Login = () => {
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
    return (
        <Container className="main-container mt-5 text-center shadow-sm p-3 mb-5 bg-white rounde">
            <Row>
                <Col style={divColor} className="text-dark p-3">
                    <div>
                        <br /> <br /><br />
                        <p>All - in - one Recruitment Solutions</p>
                        <p>Best Hiring Platform</p>
                        <br /> <br /><br /><br />
                    </div>
                    <div>
                        <p>Reduce Your Hiring Cost With Us !</p>
                        <p>Choose Your Plan & Start Hiring Now</p>
                        <br />
                        <Button variant="dark">Buy Now {'>>'}</Button> {' '}
                        <br /> <br />
                    </div>
                </Col>
                <Col className="bg-light text-dark p-3">
                    <br />
                    <h2>Employer Login</h2>
                    <br />
                    <h4>Login To Hire</h4>
                    <br /><br />
                    <Form>
                        <Form.Group controlId="loginEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="loginPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" size="lg" block type="submit">
                            Login
                        </Button>
                    </Form>
                    <br /><br />
                </Col>
            </Row>
        </Container>
    );
}