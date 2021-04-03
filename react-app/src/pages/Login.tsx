import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { NavigationBar } from "../components/NavigationBar";
import "./login.css";
import loginSvg from "./login.svg";

const divColor = { backgroundColor: "#AE4DFF" };
const mainWidth = { width: "60%", marginTop: "10rem" };
export const Login = () => {
  // let isLoggedin = false;
  // const checkLoggedIn = async () => {
  //   try {
  //     const res = await axios.get("/login");
  //     console.log("*****************************");
  //     console.log(res.data);
  //     if (res.data == "Go To Dashboard") {
  //         isLoggedin = true;
  //     }
  //   } catch (err) {
  //     if (err.response.status === 500) {
  //       setMessage("There was a problem with the server");
  //     } else {
  //       setMessage(err.response.data.msg);
  //     }
  //   }
  // };

  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  const [message, setMessage] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [emailError, setEmailError] = useState("");
  const history = useHistory();
  const handleClick = () => history.push("/Pricing");
  const handleClick1 = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const res = await axios.post("/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("*****************************");
      console.log(res.data);
      if (res.data.includes('@')) {
        history.replace("/DashboardPage");
      } else if (res.data === "Wrong password") {
        setPwdError("Invalid Password!!");
      } else if (res.data === "Email not found") {
        setEmailError("Invalid Email!!");
      }
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <>
      <NavigationBar navigationState={false} />
      <Container
        style={mainWidth}
        className="login-container text-center shadow-lg mb-5 bg-white rounde"
      >
        <Row>
          <Col
            sm={5}
            style={divColor}
            className="text-white font-weight-bold p-3 col-container-1"
          >
            <div>
              <h3>The New Norm for Recruitment</h3>
            </div>
            <img src={loginSvg} alt="logo" />
            <div>
              <p>Reduce Your Hiring Cost With Us !</p>
              <p className="mb-3">Choose Your Plan & Start Hiring Now</p>
              <Button variant="dark" onClick={handleClick}>
                Buy Now {">>"}
              </Button>{" "}
            </div>
          </Col>
          <Col sm={7} className="bg-light text-dark parent col-container-2">
            <div className="child">
              <h2 className="mb-4 font-weight-bold heading">Employer Login</h2>
              <Form action="/login" method="POST">
                <Form.Group controlId="loginEmail">
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="text-danger">{emailError}</div>
                </Form.Group>
                <Form.Group controlId="loginPassword">
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="text-danger">{pwdError}</div>
                </Form.Group>

                <Button
                  variant="dark"
                  size="lg"
                  block
                  type="submit"
                  onClick={handleClick1}
                >
                  Login
                </Button>
              </Form>

              <hr />
              <p>
                New Client ? <Link to="/SignUp" id="signup">Sign Up</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
