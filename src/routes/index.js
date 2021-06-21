import { Route } from 'react-router-dom'

import ROUTES from './list'
import Main from '../pages/main'
import Product from '../pages/product'

const routes = [
	{
		component: Main,
		path: ROUTES.main,
		RouteType: Route,
	},
	{
		component: Product,
		path: ROUTES.product,
		RouteType: Route,
	},
]

export default routes
