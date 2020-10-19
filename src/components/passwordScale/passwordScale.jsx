import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './passwordScale.css'

class PasswordScale extends Component {
    constructor({strength}) {
        super()
        this.state = {
           strength
        }
        this.Scale = this.Scale.bind(this)
    }

    Scale = (strength) => {
        switch (strength) {
            case 0:
                return 'empty'
            case 1:
                return 'quite-bad'
            case 2:
                return 'bad'
            case 3:
                return 'good'
            case 4:
                return 'better'
            case 5:
                return 'strong'
            default:
                return 'empty'
        }
    }

    UNSAFE_componentWillReceiveProps({number}) {
        this.setState({number})
    }

    render() {
        const { strength } = this.state
        return (
            <div className={`password-strength ${this.Scale(strength)}`}>
                <span></span>
            </div>
        )
    }
}

PasswordScale.propTypes = {
    strength: PropTypes.number.isRequired
}

export default PasswordScale
