import React from 'react'
import Already from '../assets/Already.png';

const AlreadySubmit = () => {
    return (
        <div>
           <h2>You have already added this job role </h2>
           <br />
            <img src={Already} alt="Already Submitted" />
        </div>
    )
}

export default AlreadySubmit