import React, { Fragment } from 'react';
import parse from 'html-react-parser';

function ProductDescription(props) {

  return (
    <Fragment>
        {parse(props.desc)}
    </Fragment>
  );
}

export default ProductDescription;
