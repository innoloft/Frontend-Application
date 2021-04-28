import React from 'react';
import Loader from 'react-loader-spinner';

export default function Spinner() {
  return (
    <Loader
      type="Puff"
      color="#3A5794"
      height={200}
      width={200}
    />
  );
}
