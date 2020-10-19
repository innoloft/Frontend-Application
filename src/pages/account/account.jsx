import React from 'react'
import { withRouter } from 'react-router-dom'

function Account() {
    return (
        <section>
            <h1>This is the component for the account route.</h1>
        </section>
    )
}

export default withRouter(Account)