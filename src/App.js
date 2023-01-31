import React, { Component } from 'react'
import './App.css'
import Temps from './Temps'
var degree = 0;
export default class App extends Component {

    tempIncrease = () => {
        degree = degree + 1;
        this.setState({ degree });
    }
    tempDecrease = () => {
        degree = degree - 1;
        this.setState({ degree });
    }

    render() {

        return (
                <div>
                    <h3>Hava durumu</h3>
                <h6>Hava {degree} derece</h6>
                <div id="buttons">
                    <div>
                        <button onClick={() => this.tempIncrease()} color="warning" outline>sicaklik arttir</button>
                        </div>
                    <div>
                        <button onClick={() => this.tempDecrease()} color="warning" outline>sicaklik azalt</button>
                        </div>
                    </div>

                <Temps degree={degree} />
                </div>
        );
    }
}