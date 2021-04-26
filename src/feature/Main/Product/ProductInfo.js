import React, { Fragment } from 'react';

function ProductInfo(props) {

  return (
    <Fragment>
      <div>
        <img src={props.product.picture} alt="Product Logo" style={{verticalAlign: 'middle', width: '80%'}}></img>
        <h2>{props.product.name} | {props.product.type.name}</h2>
      </div>
    </Fragment>
  );
}

export default ProductInfo;
