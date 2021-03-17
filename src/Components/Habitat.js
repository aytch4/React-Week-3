import React from 'react'
import { NewAnimalForm } from './NewAnimalForm';

export const Habitat = (props) => {
    const { habitat, updateHabitat } = props;

    const deleteAnimal = (animalId) => {  //delete animal function
        const updatedHabitat = {
            ...habitat,
            animals: habitat.habitat.animals.filter((x) => x._id !== animalId) 
        };
        updateHabitat(updatedHabitat);
    }

    const addNewAnimal = (animal) => updateHabitat({ ...habitat, animals: [...habitat.animals, animal]}); //add animal function
    console.log("Here below addNewAnimal") //works
    console.log(habitat.animals)//undefined
    console.log(habitat)
    console.log("habitat.animals[0] below")
   
    console.log(habitat.habitat.animals)
    const animals = () => (
        <ul>
            {habitat.habitat.animals.map((animal, index) => (
            //console.logs in here cause errors    
                <li key={index}>
                    <label> {`${animal.name} Number: ${animal.number}`}</label>
                    {/* console.log(animals + "animals after animal name and number label") */}
                    <button onClick={(e) => deleteAnimal(animal._id)}>Delete</button>
                </li>
            ))}
        </ul>
    )


console.log(animals.name)//animal
console.log(habitat.name)//undefined
console.log("habitat.animals"+ habitat.animals) //still undefined

    return ( //displays habitat and animals
        <div>
            {/* <h1>{habitat.name}</h1> */}
            {/* console.log("Here in return of habitat.js")//nothing */}
            { 
                animals({ animals, habitatId: habitat._id, deleteAnimal})
            }
            <NewAnimalForm addNewAnimal={addNewAnimal}/>
        </div>
    );

};