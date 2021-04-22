import { Switch, Route } from "react-router-dom";
import Home from '../pages/home';
import Product from '../pages/product';

function Dashboard() {
    return(
        <div id="dashboard">
            <Switch>
                <Route path="/product">
                    <Product />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>  
        </div>
    );
}

export default Dashboard;

