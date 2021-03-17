import React, { Component } from 'react';
import { HabitatsList } from './Components/HabitatsList'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() { //displays
        return (
            <div className="jumbotron text-white bg-info mb-3">
                <h1>African Animals</h1>
                <br/>
                <hr/>
                <HabitatsList />
            </div>
        )
    }
}

export default App;
