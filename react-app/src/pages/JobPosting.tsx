import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BannerDashboard } from "../components/BannerDashboard";
import { JobCard } from "../components/JobCard";
import { JobForm } from "../components/JobForm";
import { NavDashboard } from "../components/NavDashboard";
import "./JobPosting.css";

// Showing the Job Postings to HR
export const JobPosting = () => {

  // Structure of a Job Post
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

  // Modal and Job Data states
  const [show, setShow] = useState(false);
  const [jobData, setJobData] = useState(false);
  const [data, setData] = useState([ip]);

  // Toggling modal states
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  // GET API call for getting job data from database
  function GetData() {
    useEffect(() => {
      if (jobData == false) {
        axios.get("/getJobData").then((res) => {
          setData(res.data);
          setJobData(true);
        });
      }
    }, [data]);
  }

  // Delete Functionality of Job Postings
  const deleteItem = (role: string) => {
    setData(data.filter((item) => item.jobRole !== role));
  };

  return (
    <>

      {/* Displaying all the Job Postings */}
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
