import React from 'react'
import Success from '../assets/Success.jpg';

const SuccessSubmit = () => {
    return (
        <div>
             <h2> We have received your response , you can now close this window!! </h2>
            <br />
            <img src={Success} alt="Success" />
        </div>
    )
}

export default SuccessSubmit
