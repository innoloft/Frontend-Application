import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { Header } from './components';
import NavigationContainer from './containers/navigation';

function App() {
	const [ showNav, setShowNav ] = useState(window.innerWidth > 1024 ? true : false);

	// TODO whitelisting
	// useEffect(() => {
	// 	async function fetchConfig() {
	// 		const response = await mainHttp.getConfiguration();
	// 	}
	// 	fetchConfig();
	// }, []);

	return (
		<div className="App">
			{window.innerWidth <= 1024 && (
				<button className="toggle_nav" onClick={() => setShowNav((prevValue) => !prevValue)}>
					TOGGLE
				</button>
			)}

			<Header>
				<Header.Logo
					src="/images/branding/innoloft-no-white-space.svg"
					alt="Innoloft Logo"
					to={ROUTES.DASHBOARD.path}
				/>
			</Header>
			<Router>
				<div className="main">
					{showNav && <NavigationContainer />}
					{window.innerWidth <= 1024 && showNav && <div className="overlay" />}
					<div className="content">
						<Switch>
							{Object.keys(ROUTES).map((key) => {
								const { path, page } = ROUTES[key];
								return (
									<Route exact path={path} key={key}>
										{page}
									</Route>
								);
							})}
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
