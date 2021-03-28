import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import axios from "axios";
import Header from "./components/Header/Header";
import MainDiv from "./components/MainDiv/MainDIv";
import { connect } from "react-redux";
import { DATA_LOADED } from "./store/appState";

function App(props) {
  const getInfo = async () => {
    try {
      props.dispatch(async () => {
        const response = await axios.get(
          "https://api-test.innoloft.com/product/6781/"
        );
        props.dispatch({
          type: DATA_LOADED.type,
          payload: {
            data: response.data
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  // fetch data on mount
  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <MainDiv />
      <Switch>
        <Route
          exact
          path="/"
          render={props => {
            <MainDiv />;
          }}
        />
        <Route
          exact
          path="/product"
          render={props => {
            <MainDiv />;
          }}
        />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}

const mstp = state => {
  return {
    data: state.appData.data
  };
};

export default connect(mstp)(App);
