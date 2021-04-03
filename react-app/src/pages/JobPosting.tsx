import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BannerDashboard } from "../components/BannerDashboard";
import { JobCard } from "../components/JobCard";
import { JobForm } from "../components/JobForm";
import { NavDashboard } from "../components/NavDashboard";
import "./JobPosting.css";

export const JobPosting = () => {
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
  // const [jobposts, setJobPosts] = useState(data);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

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

  const deleteItem = (role: string) => {
    console.log("came here");
    setData(data.filter((item) => item.jobRole !== role));
  };

  return (
    <>
      {GetData()}
      <div className="main-dashboard">
        <JobForm show={show} handleClose={handleClose} />
        <NavDashboard />
        <div className="content shadow-lg">
          <BannerDashboard />
          <Row className="job-posting-section">
            <Col md={6}>
              <h3 className="display-applicant">Current Job Postings</h3>
            </Col>
            <Col md={6} className="create-job-button">
              <Button variant="dark" onClick={handleShow}>
                Create Job Posting
            </Button>
            </Col>
          </Row>
          <hr className="filter-hr" />
          <div className="grid-container justify-content-center">
            {jobData &&
              data.map((job) => (
                <JobCard jobData={job} onDelete={deleteItem} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
