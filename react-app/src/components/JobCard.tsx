import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './JobCard.css';

interface IJob {
    jobId: string,
    jobRole: string,
    jobOffer: string,
    jobCtc: string,
    skills1: string,
    skills2: string,
    skills3: string
}

type TJob = {
    jobData: IJob;
};

export const JobCard = ({ jobData }: TJob) => {
    const history = useHistory();
    console.log("******************", jobData);
    return (
        <Row className="job-card-row shadow-lg">
            <Col md={4} className="job-card-job-col">
                <div className="job-card-role">
                    {jobData.jobRole}
                </div>
                <div className="job-card-offer">
                    {jobData.jobOffer}
                </div>
            </Col>
            <Col md={2} className="job-card-ctc-col">
                <div className="job-card-ctc">
                    {jobData.jobCtc}{" LPA"}
                </div>
            </Col>
            <Col md={4} className="job-card-skills-col">
                <div className="job-card-skill">
                    {jobData.skills1}
                </div>
                <div className="job-card-skill">
                    {jobData.skills2}
                </div>
                <div className="job-card-skill">
                    {jobData.skills3}
                </div>
            </Col>
            <Col md={1} className="job-card-apply-col">
            <i className="fa fa-pencil-square-o" aria-hidden="true" style={{fontSize:"1.75rem"}}></i>
            </Col>
            <Col md={1} className="job-card-apply-col">
            <i className="fa fa-trash" aria-hidden="true" style={{color:"red",fontSize:"1.75rem"}} onClick= {() => {
                axios.get(`/delete/` + jobData.jobRole);
            }}></i>
            </Col>
        </Row>
    )
}
