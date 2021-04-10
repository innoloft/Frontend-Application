/** @format */

import React from 'react';
import Loadable from 'react-loadable';
import Loader from '../../components/Loader';

const Dashboard = Loadable({
	loader: () => import('../../pages/dashboard'),
	loading: () => <Loader />,
	delay: 500,
	timeout: 10000,
});

const Product = Loadable({
	loader: () => import('../../pages/product'),
	loading: () => <Loader />,
	delay: 500,
	timeout: 10000,
});

export const routes = [
	{
		path: '/',
		name: 'Dashboard',
		exact: true,
		component: Dashboard,
	},
	{
		path: '/product',
		name: 'Product',
		exact: true,
		component: Product,
	},
];
