import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './JobDes.css';

export const JobDes = () => {
    return (
        <div>
            <h4 className="font-weight-bold apply-heading">Apply For Hashedin Technoligies</h4>
            <h5 className="font-weight-bold">Join as an SDE</h5>
            <h5 className="font-weight-bold">6 months Internship + Full Time Offer</h5>
            <h5 className="font-weight-bold">CTC - 8 LPA</h5>
            <p className="mb-0">Skills Required</p>
            <Row className="justify-content-between mt-3 mb-3">
                <Col>
                    <div className="skills-jd">Data Structures and Algorithms</div>
                </Col>
                <Col>
                    <div className="skills-jd">Programming Concepts</div>
                </Col>
                <Col>
                    <div className="skills-jd">Database Management</div>
                </Col>
            </Row>
            <div className="jd-about">
                <h5 className="font-weight-bolder text-center">About Hashedin Technologies</h5>
                <p>A software development company, with a difference. We build deep tech SAAS
                products and platforms. We understand the process, passion and hard work
                it takes to launch and support a growing product.
            </p>
            </div>
            <h4 className="font-weight-bold apply-heading">Fill this form to apply</h4>
        </div>
    );
};
