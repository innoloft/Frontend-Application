import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = ({ configuration }) => (
	<div style={{ padding: "20px" }}>
		{configuration && (
			<img src={configuration.logo} alt="logo" style={{ height: "30px" }} />
		)}
		<p>Built with React, Redux and React Router.</p>
		<Link to="product" className="btn btn-primary btn-lg">
			Go to product
		</Link>
	</div>
);

function mapStateToProps(state) {
	return {
		configuration: state.configuration,
	};
}

export default connect(mapStateToProps)(HomePage);
