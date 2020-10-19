import React from 'react'
import { withRouter } from 'react-router-dom'

function Dashboard() {
    return (
        <section>
            <h1>This is the component for the main dashboard route.</h1>
        </section>
    )
}

export default withRouter(Dashboard)