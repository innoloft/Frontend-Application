import React from 'react';

import { Router } from '@reach/router';

import './App.css';
import { ROUTES } from './routes';
import { MainLayout } from './layout/main';

function App() {
	return (
		<MainLayout>
			<Router>
				{ROUTES.length &&
					ROUTES.map(({ Route, path }, i) => <Route key={i} path={path} />)}
			</Router>
		</MainLayout>
	);
}

export default App;
