import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

//STYLING
const StyledDiv = styled.div`
    background-color: lightGray;
    min-height: 50px;
    padding: 0px 5px;
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`;

const Form = styled.form`
    margin: auto 0;
`;

const Input = styled.input`
    height: 24px;
`; //for some reason automatically renders 5px taller than select and button

const Select = styled.select`
    height: 29px;

    &:hover{
        cursor: pointer;
    }
`;

const Button = styled.button`
    height: 29px;

    &:hover{
        cursor: pointer;
    }
`;

function RecipeFilter ({filterState, onFilterChange}) {
    const history = useHistory();
    const {search, select} = filterState;

    function handleNewRecipeClick(){
        history.push('/recipe/new')
    }
    return(<StyledDiv className='RecipeFilter'>
        <Form>    
            <Input 
                name='search'
                type='text'
                placeholder='Search Recipes'
                value={search}
                onChange={onFilterChange}
            ></Input>
            <Select name='select' value={select} onChange={onFilterChange}>
                <option name='All' value='All'>All</option>
                <option name='Dinner' value="Dinner">Dinner</option>
                <option name='Dessert' value="Dessert">Dessert</option>
                <option name='Snack' value='Snack'>Snack</option>
            </Select>
        </Form>
        <Button onClick={handleNewRecipeClick}>New Recipe</Button>
    </StyledDiv>)
}

export default RecipeFilter;