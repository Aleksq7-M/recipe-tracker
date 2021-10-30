import React from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items:center;
    align-content: space-around;
    background-color: #eeeeee;
`;

function RecipeList ({recipes}) {
    return(<Container className='RecipeList'>
        {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
    </Container>)
}

export default RecipeList;