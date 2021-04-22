import React, { useEffect, useState } from 'react';
import './ProductMainInfo.scss';

const ProductMainInfo = ({ product }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    setTitle(product?.name);
    setType(product?.type.name);
  }, [product]);

  return (
    <div className='ProductMainInfo'>
      <h3>
        Title: <span> {title}</span>
      </h3>
      <h4>
        Type: <span> {type}</span>
      </h4>
    </div>
  );
};

export default ProductMainInfo;
