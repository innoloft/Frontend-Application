import React, { Component } from "react";
import { Route, RouteComponentProps } from "react-router-dom";

// pages
import Main from "./Main";
import Product from "./Product";

type RoutesProps = RouteComponentProps & {};

class Routes extends Component {
  render() {
    return (
      <>
        {/* routes */}
        <Route path={"/"} component={Main} exact={true} />
        <Route path={"/product"} component={Product} exact={true} />
      </>
    );
  }
}

export default Routes;
