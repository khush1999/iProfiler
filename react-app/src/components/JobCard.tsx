import axios from "axios";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { EditJobPost } from "./EditJobPost";
import "./JobCard.css";

interface IJob {
  jobId: string;
  jobRole: string;
  jobOffer: string;
  jobCtc: string;
  skills1: string;
  skills2: string;
  skills3: string;
  jobDes: string;
}

type TJob = {
  jobData: IJob;
  onDelete(role: string): void;
};

export const JobCard = ({ jobData, onDelete }: TJob) => {
  const history = useHistory();
  console.log("******************", jobData);
  const [show, setShow] = useState(false);
  //   const [jobData, setJobData] = useState(false);
  //   const [data, setData] = useState([ip]);
  //   // const [jobposts, setJobPosts] = useState(data);

  //   const handleShow = () => {
  //     setShow(true);
  //   };
  const handleClose = () => {
    setShow(false);
  };
  const handleDeletion = async () => {
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(jobData.jobRole);
    axios.get(`/getJobData/` + jobData.jobRole).then(function (response) {
      console.log("++++++++++++++++++++++++++++++++");

      console.log(response);
      if (response.data == "Delete Sucessfully") {
        console.log("Donee brooooooooooooo");
        onDelete(jobData.jobRole);
      }
    });
  };
  const handleEdit = async () => {
    setShow(true);
  };
  return (
    <>
      <EditJobPost show={show} handleClose={handleClose} jobData={jobData} />
      <Row className="job-card-row shadow-lg">
        <Col md={4} className="job-card-job-col">
          <div className="job-card-role">{jobData.jobRole}</div>
          <div className="job-card-offer">{jobData.jobOffer}</div>
        </Col>
        <Col md={2} className="job-card-ctc-col">
          <div className="job-card-ctc">
            {jobData.jobCtc}
            {" LPA"}
          </div>
        </Col>
        <Col md={4} className="job-card-skills-col">
          <div className="job-card-skill">{jobData.skills1}</div>
          <div className="job-card-skill">{jobData.skills2}</div>
          <div className="job-card-skill">{jobData.skills3}</div>
        </Col>
        <Col md={1} className="job-card-apply-col">
          <i
            className="fa fa-pencil-square-o"
            aria-hidden="true"
            style={{ fontSize: "1.75rem", cursor: "pointer" }}
            onClick={() => handleEdit()}
          ></i>
        </Col>
        <Col md={1} className="job-card-apply-col">
          <i
            className="fa fa-trash"
            aria-hidden="true"
            style={{ color: "red", fontSize: "1.75rem", cursor: "pointer" }}
            onClick={() => handleDeletion()}
          ></i>
        </Col>
      </Row>
    </>
  );
};
