import React from "react";

// Utils
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Components
import Route from "./Route";
import Layout from "Components/Layout/Layout";
import routes from "./routesData";

const basename = "/innoloft";
const Routes = () => (
  <Router basename={basename}>
    <Switch>
      <Layout>
        {routes.map((route, i) => {
          return <Route key={i} {...route} />;
        })}
      </Layout>
    </Switch>
  </Router>
);

export default Routes;
