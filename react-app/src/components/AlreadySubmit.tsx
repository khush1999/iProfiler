import React from 'react'
import Already from '../assets/alreadySubmitted.jpg';
import './submission.css';

const AlreadySubmit = () => {
    return (
        <div className="submit-form">
            <h2> You have already applied for this job role!! </h2>
            <br />
            <img src={Already} alt="Already Submitted" className="success" />
        </div>
    )
}

export default AlreadySubmit