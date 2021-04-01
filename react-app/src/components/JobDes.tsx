import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './JobDes.css';
import jobhunt from '../assets/jobhunt.png';

export const JobDes = () => {
    return (
        <div>
            <h4 className="font-weight-bold apply-heading">Apply For Hashedin Technologies</h4>
            <img src={jobhunt} alt="apply for job" width="80%" />
        </div>
    );
};
