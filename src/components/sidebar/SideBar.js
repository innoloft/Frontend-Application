import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function SideBar() {
	const activeStyle = { color: "white", backgroundColor: "black" };
	return (
		<div
			className="navigation"
			style={{ backgroundColor: "rgb(241, 239, 239)" }}>
			<NavLink
				to="/"
				activeStyle={activeStyle}
				exact
				className="navigation__link">
				Home
			</NavLink>
			<NavLink
				to="/product"
				activeStyle={activeStyle}
				className="navigation__link">
				Product
			</NavLink>
		</div>
	);
}

export default SideBar;
