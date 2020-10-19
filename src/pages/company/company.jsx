import React from 'react'
import { withRouter } from 'react-router-dom'

function Company() {
    return (
        <section>
            <h1>This is the component for the company route.</h1>
        </section>
    )
}

export default withRouter(Company)