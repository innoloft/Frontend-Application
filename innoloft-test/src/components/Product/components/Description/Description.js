import React, { useEffect, useState } from 'react';
import './Description.scss';

const Description = ({ product }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    setDescription(product?.description);
  }, [product, description]);

  return (
    <div
      className='desc-att description'
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
};

export default Description;
