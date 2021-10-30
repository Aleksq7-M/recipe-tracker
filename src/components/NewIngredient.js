import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
    height: 24px;
    margin-top: 3px;
    margin-bottom: 3px;
    width: 45%;
    text-align:center;
    font-size: 17px;
`;

function NewIngredient ({ingredient, onIngredientChange}) {

    function handleChange(event){
        const {name, value} = event.target;
        onIngredientChange(name, value)
    }

    return(<div className='NewIngredient'>
        <InputField 
            type='text' 
            name={ingredient.id} 
            placeholder={`Ingredient ${ingredient.id}`} 
            value={ingredient.value}
            onChange={handleChange}
        ></InputField>
        <br/>
    </div>)
}

export default NewIngredient;

/* 
        <input 
            type='number' 
            name='ingAmt' 
            placeholder='#' 
        ></input>
        <select name='ingUnit' >
            <option  name='unit' value='unit'>unit</option>
            <option name='cups' value='cups'>cups</option>
            <option name='bags' value='bags'>bags</option>
            <option name='lbs' value='lbs'>lbs</option>
            <option name='each' value='each'>each</option>
        </select>
        <input 
            type='text' 
            name='ingName' 
            placeholder='Ingredient' 
        ></input> 
        
        STRETCH GOAL: 
            Implement a system in which ingredient inputs are standardized 
            to a number, a measurement, and a name, rather than a free form string
    */