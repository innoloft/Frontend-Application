import React, { Fragment } from 'react';
import './Button.css'

function Button(props) {
  return (
    <Fragment>
       <button className="button" type={props.type} onClick={props.onClick} style={props.style}>
            {props.children}
       </button>
    </Fragment>
  );
}

export default Button;
