import React from 'react'
import { Route } from 'react-router';

export default function TheRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => (
            <Component {...props} />
    )} />
    )
}
