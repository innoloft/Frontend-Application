import React from 'react';
import { Route, Switch } from 'react-router';
import { Dashboard } from '../../pages/MainPage/Dashboard/Dashboard';
import { MainPage } from '../../pages/MainPage/MainPage';


export const BaseRouter: React.FC<{}> = () => {
    return (
        <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
    )
}