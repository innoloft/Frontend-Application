/** @format */
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Loader from './components/Loader';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import 'leaflet/dist/leaflet.css';


import store, { persistedStore } from './redux/store';
const Layout = React.lazy(() => import('./container/layout'));

const App = (props) => {



	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistedStore}>
				<div className="App">
					<React.Suspense fallback={<Loader />}>
						<Router history={props.history}>
							<Switch>
								<Route path="/" component={Layout} />
							</Switch>
						</Router>
					</React.Suspense>
				</div>
			</PersistGate>
		</Provider>
	);
};



export default App;
