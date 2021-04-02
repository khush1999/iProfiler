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
      <h2 className="company-head">Company: HashedIn Technologies</h2>
      <div className="company-about">
        <h4 className="abt">Who We Are</h4>
        <p>
          A software development company, with a difference. We build deep tech
          SAASproducts and platforms. Our experts in Analytics, Machine Learning
          & Integrations, build upon learnings and frameworks from a decade of
          launching 225+ products. We understand the process, passion and hard
          work it takes to launch and support a growing product.
        </p>
        <p>
          Let’s build something delightful, launch quickly and iterate to
          success.
        </p>
      </div>
      <div className="job-des-section shadow-lg">
        <h4>Opportunities with us</h4>
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
