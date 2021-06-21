import { Switch } from 'react-router-dom'

import routes from './routes'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'

const App = () => (
	<>
		<Navbar />
		<Wrapper>
			<Switch>
				{routes.map(({ path, component, RouteType }, id) => (
					<RouteType key={id} path={path} exact component={component} />
				))}
			</Switch>
		</Wrapper>
	</>
)

export default App
