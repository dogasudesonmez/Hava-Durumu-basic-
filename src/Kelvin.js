import React, { Component } from 'react'

export default class Kelvin extends Component {
    render() {
        return (
            <div>Kelvin: {(this.props.degree + 273.15)}</div>
        )
    }
}
