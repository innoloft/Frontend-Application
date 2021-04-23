import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar(props) {
  return (
    <section className="side__bar">
      <NavLink exact to="/">
        Main Page
      </NavLink>
      <NavLink exact to="/product">
        Product Page
      </NavLink>
    </section>
  );
}

export default Sidebar;
