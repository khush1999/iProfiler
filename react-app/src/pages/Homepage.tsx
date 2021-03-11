import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { Banner } from "../components/Banner";
import './homepage.css';
import logo from './logo.png';

export const Homepage = () => (
<main>
<Banner /> 
<br />
  <Row className="main-content">
    <Col md={5} className="icon">
    <img src={logo} alt="website-logo" width="400" height="400" />
    </Col>
    <Col md={5} className="about">
    <p>
      <br/>
      <h1>Why Iprofiler?</h1>
      <br />
      It’s always a tedious task for HR to evaluate the hundreds of resumes/CVs incoming on every job posting. To filter based candidates out of the pool of them, iProfiler comes to the rescue.
Using AI resume parsing, these CVs could be categorized in just a few minutes.
FIlters provided by the application would help HR to segregate hundreds of unwanted profiles of users and only relevant will be saved for the later stage.
	Thus iProfiler is a handy tool for all HR representatives.
</p>
    </Col>
    </Row>
    <br />
<Carousel>
  <Carousel.Item>
  <Carousel.Caption className="Carousel-caption">
  <Row>
    <Col className="discover1">
      <div className="heading">
        <br/>
        <h1>01</h1><br />
        <h2>DISCOVER</h2>
        </div>
    </Col>
    <Col className="sub-discover">
      <div className="sub-heading1">DISCOVER</div>
      <br />
      <div className="content1">
      <h3>Find talent with a human machine collaboration</h3>
      </div>
      <p className="content2">Humans are innately creative whereas machines can generate data-centric insights.
        Iprofiler brings first of its kind talent intelligence to source, screen and assess candidates.</p>
        </Col>
    </Row>
    </Carousel.Caption>
    <img
      className="d-block w-100"
      src="https://cnet4.cbsistatic.com/img/bOyPv1h-UlqYl-el3hHcBa2WShc=/644x362/2017/03/14/e743e9be-1c54-4dd3-9583-248dd3e54e34/amp-placeholder.jpg"
      alt="First slide" width="400" height="400"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cnet4.cbsistatic.com/img/bOyPv1h-UlqYl-el3hHcBa2WShc=/644x362/2017/03/14/e743e9be-1c54-4dd3-9583-248dd3e54e34/amp-placeholder.jpg"
      alt="Second slide" width="400" height="400"
    />

    <Carousel.Caption className="Carousel-caption">
    <Row>
    <Col className="discover2">
    <div className="heading">
        <br/>
        <h1>02</h1><br />
        <h2>SHORTLISTING</h2>
        </div>
    </Col>
    <Col className="sub-discover">
    <div className="sub-heading2">SHORTLISTING</div>
    <br />
    <div className="content1">
      <h3>Profile shortlisting is an important process in recruitment to get potential candidates.</h3>
      </div>
      <p className="content2">With Iprofiler, more detailed profiling solution that helps to incorporate qualitative and quantitative parameters.</p>
      </Col>
    </Row>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cnet4.cbsistatic.com/img/bOyPv1h-UlqYl-el3hHcBa2WShc=/644x362/2017/03/14/e743e9be-1c54-4dd3-9583-248dd3e54e34/amp-placeholder.jpg"
      alt="Third slide" width="400" height="400"
    />

    <Carousel.Caption className="Carousel-caption">
    <Row>
    <Col className="discover3">
    <div className="heading">
        <br/>
        <h1>03</h1><br />
        <h2>STRUCTURE</h2>
        </div>
    </Col>
    <Col className="sub-discover">
    <div className="sub-heading3">STRUCTURE</div>
    <br />
    <div className="content1">
      <h3>Build a structured and efficient shortlisting process</h3>
      </div>
      <p className="content2">An efficient shortlisting process to keep track of talent pipeline and generate insightful candidate list all on the same platform.</p>
      </Col>
      </Row>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</main>
)