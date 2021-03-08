import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import { Link } from "react-router-dom";
import "./Navigation.scss";

export const NavContent = () => (
  <div className="nav">
    <nav>
      <Link to="/">Home</Link>
      <Link to="product">Product</Link>
    </nav>
  </div>
);
function Navigation({ children, show, onClick }) {
  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      timeout={500}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <div className="nav-wrapper">
        <aside onClick={onClick}>
          <NavContent />
        </aside>
      </div>
    </CSSTransition>,

    document.getElementById("sidebar")
  );
}

export default Navigation;
