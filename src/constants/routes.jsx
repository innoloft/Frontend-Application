import { Dashboard, Product } from '../pages';

export const ROUTES = {
	DASHBOARD: { path: '/', label: 'Dashboard', page: <Dashboard /> },
	PRODUCT: { path: '/product', label: 'Product', page: <Product /> }
};
