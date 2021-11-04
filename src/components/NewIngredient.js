import React from 'react';
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
    const {id, amt, unit, name} = ingredient;


     return(<InputWrapper>
        <Number 
            type='text' 
            name='amt' 
            placeholder='#' 
            value={amt === '_' ? '' : amt}
            onChange={(e) => onIngredientChange(e, id)}
        ></Number>
        <Unit name='unit' value={unit === '_' ? 'unit' : unit} onChange={(e) => onIngredientChange(e, id)}>
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
            onChange={(e) => onIngredientChange(e, id)}
        ></IngredientName><br/>
    </InputWrapper>)
}

export default NewIngredient;