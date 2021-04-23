import React, { useEffect } from "react";
import SideBar from "../sidebar/SideBar";
import { connect } from "react-redux";

import "./Navigation.css";
import { getConfiguration } from "../../redux/actions/configurationActions";
import { Link } from "react-router-dom";

function Navigation({ configuration, getConfiguration, children, ...props }) {
	useEffect(() => {
		getConfiguration().catch((error) => {
			console.log("Loading configuration failed", error);
		});
	}, [getConfiguration]);

	return (
		<>
			<div
				className="nav"
				style={
					configuration
						? { backgroundColor: configuration.mainColor }
						: { backgroundColor: "gray" }
				}>
				<Link to="/">
					<img className="logo" src={configuration.logo} alt="infosoft" />
				</Link>
			</div>
			<div className="app-body">
				<SideBar
					className="app-body__sidebar"
					backgroundColor={configuration ? configuration.mainColor : "gray"}
				/>
				<div className="app-body__page">{children}</div>
			</div>
		</>
	);
}

function mapStateToProps(state) {
	return {
		configuration: state.configuration,
	};
}

const mapDispatchToProps = {
	getConfiguration,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
