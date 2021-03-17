import React from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


const divColor = { backgroundColor: '#cce7ff' };
const mainWidth = { width: "60%" };

export const Login = () => {

    const history = useHistory();
    const handleClick = () => history.push('/Pricing');
    const handleClick1 = () => history.push('/DashboardPage');

    return (
        <Container style={mainWidth} className="mt-5 text-center shadow-sm p-3 mb-5 bg-white rounde">
            <Row>
                <Col sm={5} style={divColor} className="text-dark p-3">
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
                        <Button variant="dark" onClick={handleClick}>Buy Now {'>>'}</Button> {' '}
                        <br /> <br />
                    </div>
                </Col>
                <Col sm={7} className="bg-light text-dark p-3">
                    <br />
                    <h2>Employer Login</h2>
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
                        <Button variant="primary" size="lg" block type="submit" onClick={handleClick1}>
                            Login
                        </Button>
                    </Form>
                    <br /><br />
                    <hr />
                    <p>New Client ?{" "}<Link to="/SignUp">Sign Up</Link></p>
                </Col>
            </Row>
        </Container>
    );
}
