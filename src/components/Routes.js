import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Product from '../pages/Product';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/product" component={Product} />
    </Switch>
  );
}

export default Routes;
