import ProductPage from './ProductPage';
import Navigation from './Navigation'
import MainMenu from './MainMenu';
import Header from './Header';
import './App.scss';
import '../sass/base/_utilities.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="row ">
          <Navigation />
          <Switch>
            <Route exact path="/product" component={ProductPage} />
            <Route path="/" component={MainMenu} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;