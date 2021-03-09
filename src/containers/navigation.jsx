import React from 'react';
import { Navigation } from '../components';
import { ROUTES } from '../constants/routes';

function NavigationContainer() {
	return (
		<Navigation>
			<Navigation.Menu>
				{Object.keys(ROUTES).map((key) => {
					const { path, label } = ROUTES[key];
					return <Navigation.MenuItem key={key} path={path} label={label} />;
				})}
			</Navigation.Menu>
		</Navigation>
	);
}

export default NavigationContainer;
