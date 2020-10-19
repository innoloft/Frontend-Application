import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './alert.css'

//Importing icons
import { XIcon } from '../icons/icons'

class Alert extends Component {
    constructor(props) {
        super()
        this.state = {
            type: props.type,
            message: props.message,
            hide: false
        }
        this.ToggleAlert = this.ToggleAlert.bind(this)
    }

    ToggleAlert() {
        this.setState({hide: !this.state.hide })
    }

    render() {
        const { type, message, hide } = this.state
        return (
            <div className={`alert${type ? ' success' : ' error'}${hide ? ' hide' : ''}`}>
                <div className='row'>
                    <h3>{type ? 'Success' : 'Error'}</h3>
                    <button id='close-alert' onClick={this.ToggleAlert}><XIcon /></button>
                </div>
                <p>{message}</p>
            </div>
        )
    }
}

Alert.propTypes = {
    type: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
}

export default Alert