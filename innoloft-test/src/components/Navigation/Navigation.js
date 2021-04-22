import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className='Navigation'>
      <Link to='/'>
        <h2>Main Page</h2>
      </Link>
      <Link to='/product'>
        {' '}
        <h2>Product</h2>
      </Link>
    </div>
  );
};
export default Navigation;
