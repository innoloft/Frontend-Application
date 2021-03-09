import React from "react";
import "./Spinner.scss";

function Spinner() {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container"></div><span>Loading please wait</span>
    </div>
  );
}

export default Spinner;
