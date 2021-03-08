import React from "react";
import { ProductsComponent, DashboardComponent } from "../../views";
import { Switch, Route } from "react-router-dom";
import useStyles from "./styles";
const Main = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Switch>
        <Route exact path="/">
          <DashboardComponent />
        </Route>
        <Route exact path="/product">
          <ProductsComponent />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
