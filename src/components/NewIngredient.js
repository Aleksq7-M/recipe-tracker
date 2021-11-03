import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    height: 24px;
    margin: 3px auto 3px auto;
    width: 45%;
`;

const Number = styled.input`
    font-size: 17px;
    height: 100%;
    width: 20%
`;

const Unit = styled.select`
    font-size: 17px;
    height: 122%;
    width: 20%;

    &:hover{
        cursor: pointer;
    }
`;

const IngredientName = styled.input`
    font-size: 17px;
    height: 100%;
    width: 55%
`;

function NewIngredient ({ingredient, onIngredientChange}) {
    const {id, value} = ingredient;
    const [ingredientState, setIngredientState] = useState({
        amt:value.split('-')[0],
        unit: value.split('-')[1],
        name:value.split('-')[2],
    })
    const {amt, unit, name} = ingredientState;

    function handleIngredientChange(event){
        const {name, value} = event.target;
        setIngredientState({
            ...ingredientState,
            [name]: value
        })
        onIngredientChange(id, `${amt}-${unit}-${name}`)
    }

    // useEffect(() => {
    //     onIngredientChange(id, `${amt}-${unit}-${name}`)
    // }, [ingredientState])

     return(<InputWrapper>
        <Number 
            type='text' 
            name='amt' 
            placeholder='#' 
            value={amt === '_' ? '' : amt}
            onChange={handleIngredientChange}
        ></Number>
        <Unit name='unit' value={unit === '_' ? 'unit' : unit} onChange={handleIngredientChange}>
            <option name='unit' value='unit'>unit</option>
            <option name='cups' value='cups'>cups</option>
            <option name='bags' value='bags'>bags</option>
            <option name='lbs' value='lbs'>lbs</option>
            <option name='each' value='each'>each</option>
        </Unit>
        <IngredientName
            type='text' 
            name='name' 
            placeholder='Ingredient' 
            value={name === '_' ? '' : name}
            onChange={handleIngredientChange}
        ></IngredientName><br/>
    </InputWrapper>)
}

export default NewIngredient;

/* 
        <input 
            type='number' 
            name='ingAmt' 
            placeholder='#' 
        ></input>
        <select name='ingUnit' >
            <option name='unit' value='unit'>unit</option>
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