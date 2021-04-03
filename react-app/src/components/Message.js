import React from 'react';
import PropTypes from 'prop-types';

/* This component handles the status of file upload */
const Message = ({ msg }) => {
  return (
    <div className='alert alert-info alert-dismissible fade show mb-3' role='alert'>
      {msg}
      <button
        type='button'
        className='close'
        data-dismiss='alert'
        aria-label='Close'
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;