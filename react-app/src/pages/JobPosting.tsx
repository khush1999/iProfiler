import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { BannerDashboard } from '../components/BannerDashboard';
import { JobForm } from '../components/JobForm';
import { NavDashboard } from '../components/NavDashboard';

export const JobPosting = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            <div className="main-dashboard">
                <JobForm
                    show={show}
                    handleClose={handleClose}
                />
                <NavDashboard />
                <div className="content shadow-lg">
                    <BannerDashboard />
                    <Button variant="dark" onClick={handleShow}>+</Button>
                </div>
            </div>
        </>

    )
}
