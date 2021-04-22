import "./App.css";
import Navbar from "./components/Navbar";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Home from "./components/Home";
import Product from "./components/Product";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleGetConfiguration } from "./redux/configuration/configurationActions";

function App() {
  const dispatch = useDispatch();
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    dispatch(handleGetConfiguration());
  }, [dispatch]);
  return (
    <div className="App">
      <Header toggleNavbar={toggleNavbar} />
      <div className="app-body">
        <Router history={history}>
          <Navbar showNavbar={showNavbar} />
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/product" render={() => <Product />} />
            <Route path="*" render={() => <div>Status 404: Not Found</div>} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
