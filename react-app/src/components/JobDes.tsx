import React from 'react';
import jobhunt from '../assets/Jobhunt.png';
import './JobDes.css';

export const JobDes = () => {
    return (
        <div>
            <h4 className="font-weight-bold apply-heading">Apply For Hashedin Technologies</h4>
            <img src={jobhunt} alt="apply for job" width="80%" />
        </div>
    );
};
