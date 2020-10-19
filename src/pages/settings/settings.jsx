import React from 'react'
import './settings.css'

//Importing tab components 
import Tabs from '../../components/tabs/tabs'

function Settings(props) {
    return (
        <section className="settings">
            <div className="inner">
                <Tabs />
                <div className="forms">
                { props.children }
                </div>
            </div>
        </section>
    )
}

export default Settings