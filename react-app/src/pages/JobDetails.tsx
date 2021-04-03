import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./jobdetails.css";
import iprofilerlogo from "../assets/LogoFinal.png";

const JobDetails = () => {
  const ip = {
    jobId: "",
    jobRole: "",
    jobOffer: "",
    jobCtc: "",
    skills1: "",
    skills2: "",
    skills3: "",
    jobDes: "",
  };

  const [show, setShow] = useState(false);
  const [jobData, setJobData] = useState(false);
  const [data, setData] = useState([ip]);

  function GetData() {
    useEffect(() => {
      if (jobData == false) {
        axios.get("/getJobData").then((res) => {
          console.log("////////////////////////////////////", res.data);
          setData(res.data);
          setJobData(true);
        });
      }
    }, [data]);
  }

  return (
    <>
      {GetData()}
      <Row className="apply-nav">
        <Col md={8}>
          <img src={iprofilerlogo} alt="iprofiler" className="apply-logo" />
        </Col>
        <Col md={4}>
          <h4>Excel your Career with Us...</h4>
        </Col>
      </Row>
      <h1 className="company-head">Company: HashedIn Technologies</h1>
      <div className="company-about mb-2">
        <h2 className="abt">Who We Are</h2>
        <p>
          A software development firm that isn't like the others.
          We build SAAS products and platforms that are high-tech.
          Our analytics, machine learning, and integrations experts draw
          on lessons learned and frameworks established across a decade of
          launching over 225 products. We understand what it takes to launch
          and support a growing product, including the method, enthusiasm,
          and hard work that goes into it.
        </p>
        <p>
          Let's make something fun, get it out there quickly, and
          keep iterating until we get it right.
        </p>
        <h2 className="abt">Opportunities with us</h2>
      </div>
      <div className="job-des-section shadow-lg">
        {data.map((jobInfo) => (
          <Tab.Container id="left-tabs-example" defaultActiveKey="job-role">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="job-role">{jobInfo.jobRole}</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="job-role">
                    <h4>Job Description</h4>
                    <p>{jobInfo.jobDes}</p>
                    <h6>
                      <b>Job Offer:</b> {jobInfo.jobOffer}
                    </h6>
                    <h6>
                      <b>CTC offering:</b> {jobInfo.jobCtc} LPA
                    </h6>
                    <h6>
                      <b>Skills Preferred:</b>{" "}
                    </h6>
                    <ul className="skill-list">
                      <li className="skill-item">{jobInfo.skills1}</li>
                      <li className="skill-item">{jobInfo.skills2}</li>
                      <li className="skill-item">{jobInfo.skills3}</li>
                    </ul>
                    <Link to="/Apply">
                      <Button
                        variant="dark"
                        type="submit"
                        style={{
                          width: "25%",
                          height: "3rem",
                          marginBottom: "1rem",
                        }}
                      >
                        Apply
                      </Button>
                    </Link>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        ))}
      </div>
    </>
  );
};

export default JobDetails;
