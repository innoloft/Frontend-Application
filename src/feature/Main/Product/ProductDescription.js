import React, { Fragment } from 'react';

function ProductDescription(props) {

  return (
    <Fragment>
        <div dangerouslySetInnerHTML={{__html: props.desc}} />
    </Fragment>
  );
}

export default ProductDescription;
