import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { NavigationBar } from '../components/NavigationBar';
import loginSvg from './login.svg';
import './login.css';


const divColor = { backgroundColor: '#AE4DFF' };
const mainWidth = { width: "60%", marginTop: "10rem" };
export const Login = () => {

    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');
    const [message, setMessage] = useState('');
    const [pwdError, setPwdError] = useState('');
    const [emailError, setEmailError] = useState('');
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
            if (res.data.includes('@gmail.com')) {
                history.push('/DashboardPage');
            }
            else if (res.data === "Wrong password") {
                setPwdError("You entered wrong password!!");
            }

            else if(res.data === "Email not found") {
                setEmailError("You entered wrong Email!!");
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
        <>
            <NavigationBar />
            <Container style={mainWidth} className="text-center shadow-sm mb-5 bg-white rounde">
                <Row>
                    <Col sm={5} style={divColor} className="text-white font-weight-bold p-3">
                        <div>
                            <h3>Best Hiring Platform</h3>
                        </div>
                        <img src= {loginSvg} alt="logo"/>                        
                        <div>
                            <p>Reduce Your Hiring Cost With Us !</p>
                            <p>Choose Your Plan & Start Hiring Now</p>
                            <Button variant="dark" onClick={handleClick}>Buy Now {'>>'}</Button> {' '}
                        </div>
                    </Col>
                    <Col sm={7} className="bg-light text-dark parent">
                    <div className="child">
                        <h2 className="mb-4 font-weight-bold">Employer Login</h2>
                        <Form action="/login" method="POST">
                            <Form.Group controlId="loginEmail">
                                <Form.Control type="email" id="email" name="email" required placeholder={email} onChange={(e) => setEmail(e.target.value)} />
                                <div className="text-danger">
                                    {emailError}
                                </div>
                            </Form.Group>
                            <Form.Group controlId="loginPassword">
                                <Form.Control type="password" id="password" name="password" required placeholder={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className="text-danger">
                                    {pwdError}
                                </div>
                            </Form.Group>

                            <Button variant="dark" size="lg" block type="submit" onClick={handleClick1}>
                                Login
                            </Button>
                        </Form>
                       
                        <hr />
                        <p>New Client ?{" "}<Link to="/SignUp">Sign Up</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

