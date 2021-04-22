import React, { useEffect, useState } from 'react';
import './ProductImage.scss';

const ProductImage = ({ product }) => {
  const [img, setImg] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setImg(product?.picture);
    setName(product?.name);
  }, [product]);
  return (
    <div className='ProductImage'>
      <img src={img} alt={name} />
    </div>
  );
};

export default ProductImage;
