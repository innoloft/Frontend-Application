import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Navigation from "./components/navigation/Navigation";
import PageNotFound from "./components/PageNotFound";
import ProductPage from "./components/product/ProductPage";

function App() {
	return (
		<div className="container-fluid">
			<Router>
				<Navigation>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/product" component={ProductPage} />
						<Route component={PageNotFound} />
					</Switch>
				</Navigation>
			</Router>
		</div>
	);
}

export default App;
