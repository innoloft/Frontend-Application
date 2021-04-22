import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, SideBar } from '../containers';
import { Home, Product } from '../pages';

export default function App() {
    return (
        <React.Fragment>
            <Header />
            <div className="page__container main_container">
                <section className="navigation__section">
                    <SideBar />
                </section>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/product">
                        <Product />
                    </Route>
                </Switch>
            </div>
        </React.Fragment>
    )
}