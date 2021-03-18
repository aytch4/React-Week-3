import React from 'react'
import { NewAnimalForm } from './NewAnimalForm';

export const Habitat = (props) => {
    const { habitat, updateHabitat } = props;

    const deleteAnimal = (animalId) => {  //delete animal function
        const updatedHabitat = {
            ...habitat,
            animals: habitat.animals.filter((x) => x._id !== animalId) 
        };
        updateHabitat(updatedHabitat);
    }

    const addNewAnimal = (animal) => updateHabitat({ ...habitat, animals: [...habitat.animals, animal]}); //add animal function
    console.log("Here below addNewAnimal") //works
    console.log(habitat.animals)//undefined
    console.log(habitat)
    
   
    console.log(habitat.animals)
    const animals = () => (
        <ul>
            {habitat.animals.map((animal, index) => (
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
console.log(habitat.name + "habitat.name")//undefined
console.log("habitat.animals"+ habitat.animals) //prints only the string
console.log("habitat.habitat.name" + habitat.habitat.name)//undefined
console.log(habitat)
console.log(habitat.habitat)
    return ( //displays habitat and animals
        <div>
            <h1>{habitat.habitat}</h1> 
            { 
                animals({ animals, habitatId: habitat._id, deleteAnimal})
            }
            <NewAnimalForm addNewAnimal={addNewAnimal}/>  
            <hr/>
        </div>
    );

};