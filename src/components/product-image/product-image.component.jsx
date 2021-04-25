import React from 'react';

import './product-image.styles.scss';

const ProductImage = ({ picture }) => (
    <div className='product-image'>
        <img src={picture} alt="product" />
    </div>
);

export default ProductImage;