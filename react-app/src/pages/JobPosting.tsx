import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { BannerDashboard } from '../components/BannerDashboard';
import { JobForm } from '../components/JobForm';
import { NavDashboard } from '../components/NavDashboard';
import { JobCard } from '../components/JobCard';
import './JobPosting.css'

export const JobPosting = () => {

    const ip = {
        "jobId": "",
        "jobRole": "",
        "jobOffer": "",
        "jobCtc": "",
        "skills1": "",
        "skills2": "",
        "skills3": ""
    }

    const [show, setShow] = useState(false);
    const [jobData, setJobData] = useState(false);
    const [data, setData] = useState([ip]);

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

    return (
        <>
            {GetData()}
            <div className="main-dashboard">
                <JobForm
                    show={show}
                    handleClose={handleClose}
                />
                <NavDashboard />
                <div className="content shadow-lg">
                    <BannerDashboard />
                    <div className="p-5">
                        <Button variant="dark" onClick={handleShow}>Create Job Posting</Button>
                    </div>
                    <div className="jobs-container">
                        {jobData &&
                            data.map((job) => <JobCard jobData={job} />)}
                    </div>
                </div>
            </div>
        </>

    )
}
