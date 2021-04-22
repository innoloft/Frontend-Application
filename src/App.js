import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProduct } from "./features/productSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      axios
        .get("https://api-test.innoloft.com/product/6781/")
        .then((response) => dispatch(getProduct(response.data)));
    } catch (e) {
      return console.error(e.message);
    }
  }, []);
  return (
    <Router>
      <Header />
      <div className="app__container">
        <div className="app__navigation">
          <Navigation />
        </div>
        <div className="app__content">
          <Route
            path="/"
            exact
            render={() => (
              <>
                <h1>Dashboard</h1>
              </>
            )}
          />
          <Route path="/product" component={Product} />
        </div>
      </div>
    </Router>
  );
}

export default App;
