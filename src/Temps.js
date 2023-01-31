import React, { Component } from 'react'
import Celcius from './Celcius'
import Fahrenheit from './Fahr'
import Kelvin from './Kelvin'



export default class Temps extends Component {
    render() {
        return (
            <div>

                <div>
                    <div><Celcius degree={this.props.degree} /></div>
                    <div><Fahrenheit degree={this.props.degree} /></div>
                    <div><Kelvin degree={this.props.degree} /></div>
                </div>

            </div>
        )
    }
}