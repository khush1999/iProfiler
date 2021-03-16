import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


const divColor = { backgroundColor: '#cce7ff' };
const mainWidth = { width: "60%" };

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const history = useHistory();
    const handleClick = () => history.push('/Pricing');
    const handleClick1 = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
        const res = await axios.post("/login", formData, {
            headers: {
            "Content-Type": "multipart/form-data",
            }
        });
        console.log("*****************************")
        console.log(res.data);
        if(res.data.includes('@gmail.com')) {
            history.push('/DashboardPage');
        }

        } catch (err) {
        if (err.response.status === 500) {
            setMessage("There was a problem with the server");
        } else {
            setMessage(err.response.data.msg);
        }
        }
        
    }

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
                    <Form action = "/login" method = "POST">
                        <Form.Group controlId="loginEmail">
                            <Form.Control type="email" id = "email" name="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="loginPassword">
                            <Form.Control type="password" id = "password" name="password" defaultValue={password} onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        {/* <input type='submit' value='Submit' className='btn btn-primary btn-block mt-4'/> */}

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