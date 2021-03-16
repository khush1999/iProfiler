import React from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavigationBar } from '../components/NavigationBar';

const mainWidth = { width: "60%" };

export const SignUp = () => (
    <>
        <NavigationBar />
        <Container style={mainWidth} className="mt-5 bg-light text-dark shadow-sm p-3 mb-5 bg-white rounde">
            <h3 className="text-center">Join Us To Hire !</h3>
            <br />
            <Form>
                <Form.Group as={Row} controlId="SignUpEmail">
                    <Form.Label column sm={4}>
                        Company Name
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" placeholder="Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="SignUpEmail">
                    <Form.Label column sm={4}>
                        Company Email
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={4}>
                        Password
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={4}>
                        Confirm Password
                    </Form.Label>
                    <Col sm={8}>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Col>
                </Form.Group>
                <Button variant="primary" size="lg" block type="submit">Sign in</Button>
            </Form>
            <br />
            <hr />
            <p className="text-center">Already a User ?{" "}<Link to="/Login">Login Now</Link></p>
        </Container>
    </>
);