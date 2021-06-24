import React from 'react'
import ProductTabs from './ProductTabs';

const ProductMain = ({product}) => {
  return (
    <div className="productmain">
      <div className="product__image">
        <img src={product.picture} alt="" />
      </div>
      <div className="product__info">
        <div>
          Title: &nbsp;&nbsp; <span>{product.name}</span>
        </div>
        <div>
          Type: &nbsp;&nbsp; <span>{product.type && product.type.name}</span>
        </div>
      </div>
      <ProductTabs details={product} />
    </div>
  )
}

export default ProductMain;