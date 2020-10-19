import React from 'react'
import { withRouter } from 'react-router-dom'

function News() {
    return (
        <section>
            <h1>This is the component for the news route.</h1>
        </section>
    )
}

export default withRouter(News)