import React from 'react';

import './product-info.styles.scss';

const ProductInfo = ({ product }) => (
    <div className='product-info'>
        {/* <h6>Product Info</h6> */}
        <p className="product-name">{product.name}</p>
        <p className="product-type">{product.type.name}</p>
    </div>
);

export default ProductInfo;