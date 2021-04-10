/** @format */

import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { routes } from '../sidebar/routes';
import NotFoundComponent from '../../components/NotFoundComponent';


import './styles/layout.scss';
import Header from '../header';
import Sibebar from '../sidebar';
import Content from '../content';

const Layout = (props) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [config, setConfig] = React.useState({})

	const toogleSideBar = () => {
		setIsOpen((value) => !value)
	}

	return (
		<Router>
			<div className="layout__wrapper">
				<Header toogleSideBar={toogleSideBar} setConfig={setConfig} />
				<div className="layout__content">
					<Sibebar isOpen={isOpen} config={config} />
					<Content config={config}>
						<Switch>
							{routes.map((route, idx) => {
								return route.component ? (
									<Route
										key={idx}
										path={route.path}
										exact={route.exact}
										name={route.name}
										render={(props) => <route.component {...props} />}
									/>
								) : null;
							})}
							<Route path="*" component={NotFoundComponent} />
						</Switch>
					</Content>
				</div>
			</div>
		</Router>
	);
};



export default Layout;
