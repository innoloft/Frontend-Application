/** @format */

import React from 'react';
import { connect } from 'react-redux'
import './styles/header.scss';
import { getConfig } from '../../redux/actions/config/config.actions';

const Header = (props) => {
	const { getConfig, setConfig } = props;


	React.useEffect(() => {
		const fetchConfig = async () => {
			const response = await getConfig();
			setConfig(response);
			return response;
		}
		fetchConfig();
	}, [getConfig, setConfig]);

	return (
		<header style={{ backgroundColor: props.config.getConfigSuccess.mainColor }}>
			<div className="logo">
				<i className="fas fa-bars" onClick={props.toogleSideBar}></i>
				<img src={props?.config?.getConfigSuccess?.logo} alt="logo" style={{ width: "50px", header: "10px" }} />
			</div>
			<div></div>
		</header>
	);
};

const mapStateToProps = (state) => ({
	config: state.config
});

const mapDispatchToProps = {
	getConfig
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
