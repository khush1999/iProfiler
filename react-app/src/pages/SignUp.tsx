import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { NavigationBar } from '../components/NavigationBar';

const mainWidth = { width: "60%" };

export const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [message, setMessage] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password1", password1);
        formData.append("password2", password2);
        formData.append("company_name", companyName);

        try {
            const res = await axios.post("/auth", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            console.log("^^^^^^^^^^^^^^^^^^^")
            console.log(res.data);
            if (res.data === "You are Logged in!!!!") {
                history.push('/Login');
            }
             else{
                setErrorMsg(res.data)
            }
        }
        catch (err)
        {
            if (err.response.status == 500)
            {
                setMessage("There was a problem with the server");
            }
            else
            {
                setMessage(err.response.data.msg);
            }
        }
    }
    return (
        <>
            <NavigationBar />
            <Container style={mainWidth} className="mt-5 bg-light text-dark shadow-sm p-3 mb-5 bg-white rounde">
                <h3 className="text-center">Join Us To Hire !</h3>
                <br />
                <Form>
                   <div className="text-danger">{errorMsg!=""?errorMsg:message}</div>
                    <Form.Group as={Row} controlId="SignUpEmail">
                        <Form.Label column sm={4}>
                            Company Name
                    </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" required placeholder={companyName} id="company_name" name="company_name" onChange={(e) => setCompanyName(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="SignUpEmail">
                        <Form.Label column sm={4}>
                            Company Email
                    </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="email" required placeholder={email} id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={4}>
                            Password
                    </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="password" required placeholder={password1} id="password1" name="password1" onChange={(e) => setPassword1(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={4}>
                            Confirm Password
                    </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="password" required placeholder={password2} id="password2" name="password2" onChange={(e) => setPassword2(e.target.value)} />
                        </Col>
                    </Form.Group>
                    {/* <input type='submit' value='Submit' className='btn btn-primary btn-block mt-4'/> */}
                    <Button variant="primary" size="lg" block type="submit" onClick={handleClick}> Sign in </Button>
                </Form>
                <br />
                <hr />
                <p className="text-center">Already a User ?{" "}<Link to="/Login">Login Now</Link></p>
            </Container>
        </>
    )
};
