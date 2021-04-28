/* eslint-disable  react/prop-types */
import React from 'react';

const Description = ({ description }) => (
  <div
    dangerouslySetInnerHTML={{ __html: description }}
    className="description-details"
  />
);

export default Description;
