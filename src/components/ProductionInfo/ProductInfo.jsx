import React from "react";

import { connect } from "react-redux";

const ProductionInfo = props => {
  return (
    <div className="productInfo">
      <img src={props.data.picture} alt="product"></img>
    </div>
  );
};

const mstp = state => {
  return {
    data: state.appData.data
  };
};

export default connect(mstp)(ProductionInfo);
