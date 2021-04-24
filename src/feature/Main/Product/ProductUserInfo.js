import React, { Fragment } from 'react';

function ProductUserInfo(props) {

  return (
    <Fragment>
        <div style={{ borderTop: props.isMobile ? '2px solid #e4b302' : '', paddingTop: props.isMobile ? '20px' : 0, marginTop: props.isMobile ? '20px' : 0 }}>
          <img src={props.user.profilePicture} alt="Product Logo" style={{verticalAlign: 'middle', width: props.isMobile ? '70%' : '100%', borderRadius: '5%'}}></img>
          <h3>{props.user.firstName} {props.user.lastName}</h3>
          <h4>{props.company.name}</h4>
        </div>
    </Fragment>
  );
}

export default ProductUserInfo;
