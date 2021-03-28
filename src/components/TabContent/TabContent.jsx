import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import "./tabContent.css";

const TabContent = props => {
  return (
    <div className="tabContent">
      <Link style={{ color: "#f6f6f6" }} to="/product/desc">
        {" "}
        <button className="btndesc">Description</button>
      </Link>
      <Link style={{ color: "#f6f6f6" }} to="/product/att">
        {" "}
        <button className="btnatt"> Attributes</button>
      </Link>
      <div style={{ paddingTop: "1rem" }}>
        <Route path="/product/desc">
          <div>description {props.data.description}</div>
        </Route>
        <Route path="/product/att">
          <div>
            attributes {props.data.categories[0].name}{" "}
            {props.data.businessModels[0].name} {props.data.trl.name}
          </div>
        </Route>
      </div>
    </div>
  );
};

const mstp = state => {
  return {
    data: state.appData.data
  };
};

export default connect(mstp)(TabContent);
