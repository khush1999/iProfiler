import React from 'react';
import PropTypes from 'prop-types';

/* This component handles the status of progress bar in file upload */
const Progress = ({ percentage }) => {
  return (
    <div className='progress'>
      <div
        className='progress-bar progress-bar-striped bg-success'
        role='progressbar'
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Progress;