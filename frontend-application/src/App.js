import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Product from "./Pages/Product";
import { connect } from "react-redux";
import * as actionCreators from "./action/Index";


class App extends Component {
  render() {
    console.log(actionCreators.fetchProducts);
    return (
      <div className="App">
        <Navbar />
        <Product />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};


export default connect(mapStateToProps, actionCreators)(App);
