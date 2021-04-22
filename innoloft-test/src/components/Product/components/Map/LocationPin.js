import React from 'react';

const LocationPin = ({ text }) => {
  return (
    <div className='Pin'>
      <i className='fas fa-thumbtack'></i> <p>{text}</p>
    </div>
  );
};

export default LocationPin;
