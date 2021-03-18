import React from 'react';
import { Habitat } from './Habitat'
import { habitatsApi } from '../rest/HabitatsApi.js';

export class HabitatsList extends React.Component {
    state = {
        habitats: []
    };

    componentDidMount() {
        this.fetchHabitats();
    };

    //gets updated info
    fetchHabitats = async () => {
        const habitats = await habitatsApi.get();
        this.setState({ habitats });
    };

    //updates info in api
    updateHabitat = async (updatedHabitat) => {
        await habitatsApi.put(updatedHabitat);
        this.fetchHabitats();
    };

    render() { //displays 
        return (
            <div className="habitat-list">
                {this.state.habitats.map((habitat) => (
                    <Habitat
                        habitat={habitat}
                        key={habitat._id}
                        updateHabitat={this.updateHabitat}
                    />
                ))}
            </div>
        )
    }
}