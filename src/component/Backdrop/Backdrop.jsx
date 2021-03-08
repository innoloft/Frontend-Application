import React from "react";
import ReactDOM from "react-dom";

import "./Backdrop.scss";
function Backdrop({ onClose }) {
  return ReactDOM.createPortal(
    <div className="back-drop" onClick={onClose}></div>,
    document.getElementById("back-drop")
  );
}

export default Backdrop;
