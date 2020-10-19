import React, {Fragment} from 'react'
import { Route, Switch } from 'react-router-dom'
import './main.css'

//Importing pages
import Dashboard from '../../pages/dashboard/dashboard'
import Account from '../../pages/account/account'
import Company from '../../pages/company/company'
import Settings from '../../pages/settings/settings'
import News from '../../pages/news/news'
import Analytics from '../../pages/analytics/analytics'
import MainInfo from '../tabs/main-info'
import AdditionalInfo from '../tabs/additional-info'

function Main() {
    return (
        <main>
            <Switch>
                <Route path='/account' component={Account} />
                <Route path='/company' component={Company} />
                <Route path='/settings'>
                    <Settings>
                        <Route component={({ match }) =>
                            <Fragment>
                                <Route path='/settings/advanced' component={AdditionalInfo} />
                                <Route exact path='/settings' component={MainInfo} />
                            </Fragment>
                        } />
                    </Settings>
                </Route>
                <Route path='/news' component={News} />
                <Route path='/analytics' component={Analytics} />
                <Route exact path='/' component={Dashboard} />
            </Switch>
        </main>
    )
}

export default Main