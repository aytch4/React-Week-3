import React, { Component } from 'react';
import { HabitatsList } from './Components/HabitatsList'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

class App extends Component {
    render() { //displays Header and HabitatList
        return (
            <div className="jumbotron text-white bg-info mb-3">
                <h1>Zoo Animals</h1> 
                <br/>
                <hr/> 
                <HabitatsList/>
            </div>
        )
    }
}

export default App;
