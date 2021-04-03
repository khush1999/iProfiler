import React from 'react';
import Success from '../assets/Success.jpg';
import './submission.css';

/*This  component acknowledges successful submission of application */
const SuccessSubmit = () => {
    return (
        <div className="submit-form">
             <h2> Hurray, We have received your response , you can now close this window!! </h2>
            <br />
            <img src={Success} alt="Success" className="success"/>
        </div>
    )
}

export default SuccessSubmit
