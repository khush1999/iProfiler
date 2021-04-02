import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import signup from "../assets/signin.svg";
import { NavigationBar } from "../components/NavigationBar";
import "./SignUp.css";

const mainWidth = { width: "60%", marginTop: "10rem" };
const divColor = { backgroundColor: "#AE4DFF" };

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwdMatchError, setPwdMatchError] = useState("");

  const history = useHistory();

  const handleClick = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password1", password1);
    formData.append("password2", password2);
    formData.append("company_name", companyName);

    var passwordValidator = require('password-validator');
    var schema = new passwordValidator();
    schema
    .is().min(6)                                    // Minimum length 6
    .is().max(20)                                   // Maximum length 20
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 1 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); //

    if(schema.validate(password1) && schema.validate(password2))
    {
    try {
      const res = await axios.post("/auth", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("^^^^^^^^^^^^^^^^^^^");
      console.log(res.data);
      if (res.data === "Go to Login") {
        // alert("Reached inside");
        history.push("/Login");
      } else if (res.data === "This email already exists in database") {
        setEmailError("Email Id already exist!");
      } else if (res.data === "Passwords should match!") {
        setPwdMatchError("Passwords should match!");
      }
    } catch (err) {
      if (err.response.status == 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  }

  else
  {
    setPwdMatchError("Follow the password convention");
  }
  };
  return (
    <>
      <NavigationBar navigationState={false} />
      <Container
        style={mainWidth}
        className="sign-container bg-light text-dark shadow-lg mb-5 bg-white rounde"
      >
        <Row>
          <Col
            sm={5}
            style={divColor}
            className="text-white font-weight-bold p-3 col-container-1"
          >
            <div>
              <h3 className="text-center">Join Us To Hire !</h3>
            </div>
            <img src={signup} alt="logo" />
            <div>
              <p className="text-center">
                Already a User ?{" "}
                <Link to="/Login" className="sign-link">
                  Login Now
                </Link>
              </p>
            </div>
          </Col>
          <Col
            sm={7}
            className="bg-light text-dark parent-sign col-container-2"
          >
            <div className="child-sign">
              <h2 className=" text-center mb-4 font-weight-bold">
                Sign Up Now !
              </h2>
              <Form action="/auth" method="POST">
                <Form.Group controlId="SignUpEmail">
                  <Form.Control
                    type="text"
                    required
                    placeholder="Company Name"
                    id="company_name"
                    name="company_name"
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="SignUpPassword">
                  <Form.Control
                    type="email"
                    required
                    placeholder="Company Email"
                    id="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="text-danger">{emailError}</div>
                </Form.Group>

                <OverlayTrigger
                        key="right"
                        placement="right"
                        overlay={<Tooltip id={`tooltip-right`}>
                          <p>Your Password should contain:</p>
                          <p>Minimun length 6 characters,</p>
                          <p>Maximum length 20 characters,</p>
                          <p>Must have uppercase letters,</p>
                          <p>Must have lowercase letters,</p>
                          <p>Must have at least 1 digits,</p>
                          <p>Should not have spaces</p> 
                        </Tooltip>}
                >
                <Form.Group controlId="formHorizontalPassword">
                  <Form.Control
                    type="password"
                    required
                    placeholder="Password"
                    id="password1"
                    name="password1"
                    onChange={(e) => setPassword1(e.target.value)}
                  />
                </Form.Group>
                </OverlayTrigger>

                <OverlayTrigger
                        key="right"
                        placement="right"
                        overlay={<Tooltip id={`tooltip-right`}>
                          <p>Your Password should contain:</p>
                          <p>Minimun length 6 characters,</p>
                          <p>Maximum length 20 characters,</p>
                          <p>Must have uppercase letters,</p>
                          <p>Must have lowercase letters,</p>
                          <p>Must have at least 1 digits,</p>
                          <p>Should not have spaces</p>
                        </Tooltip>}
                 >
                <Form.Group controlId="formHorizontalConfirmPassword">
                  <Form.Control
                    type="password"
                    required
                    placeholder="Confirm Password"
                    id="password2"
                    name="password2"
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                  <div className="text-danger">{pwdMatchError}</div>
                </Form.Group>
                </OverlayTrigger>
                {/* <input type='submit' value='Submit' className='btn btn-primary btn-block mt-4'/> */}
                <div className="">
                  <Button
                    variant="dark"
                    size="lg"
                    block
                    type="submit"
                    onClick={handleClick}
                  >
                    {" "}
                    Create Account{" "}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
