import React from 'react';
import {Link, useParams} from 'react-router-dom';

import styled from 'styled-components';

const Bar = styled.div`
    background-color: lightGray;
    padding-top:8px;
    padding-bottom: 10px;
`;

const EscapeButton = styled.button`
    margin-left: 10px;
    height: 29px;
    color: black;
`;

const Page = styled.div`
    text-align:center;
    content-align:center;
    background-color:white;
    width: 95%;
    margin: 10px auto;
    border: 2px solid black;
    border-radius: 15px;
`;

const List = styled.div`
    display:block;
    width: 40%;
    margin: 0 auto;
`;

const Image = styled.img`
    height: 400px;
    border: 0 solid black;
    border-radius: 10px;
`;

function RecipePage ({recipes}) {
    const params = useParams();
    const recipe = recipes[params.recipeId - 1];
    const {name, image, category, time, ingredients, steps} = recipe;
    return(<>
    <Bar>    
        <EscapeButton>{'<-'}<Link to='/'> Back to Home</Link></EscapeButton><br/>
    </Bar>
    <Page className='RecipePage'>
        <h1>{name}</h1>
        <Image src={image} alt={name}></Image>
        <p>{time} min | {category}</p>
        <List>
            <p>Ingredients:</p>
            <ul>
                {ingredients.map(ingredient => <li>{ingredient.split('-').join(' ')}</li>)}
            </ul>
        </List>
        <List>
            <p>Steps:</p>
            <ol>
                {steps.map(step => <li>{step}</li>)}
            </ol>
        </List>
    </Page></>)
}

export default RecipePage;