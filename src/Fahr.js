import React, { Component } from 'react'

export default class Fahrenheit extends Component {
    render() {
        return (
            <div>Fahrenheit: {(this.props.degree * 1.8) + 32}</div>
        )
    }
}
