import React, { useState } from 'react';

export const NewAnimalForm = (props) => {
    const [name, setName] = useState ('');
    //const [name, setName] = useState([]);
    //const [number, setNumber] = useState(''); //was undefined but gave error
    const [number, setNumber] = useState(undefined)

    const handleNumberInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setNumber(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && number) {
            props.addNewAnimal({name, number});
            setName('');
            setNumber('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new animal</h4>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="number"
                    onChange={handleNumberInput}
                    value={number}
                />  
                <button type="submit">Add animal</button>
            </form>
        </div>
    )
};