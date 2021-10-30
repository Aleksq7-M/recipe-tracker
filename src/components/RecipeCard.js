import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
    width: 300px;
    height: 300px;
    margin: 10px auto auto auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    border: 3px outset lightGray;
    border-radius: 10px;
    padding-top:0;
    background-color:white;
`;

const Image = styled.img`
    height:200px;
    padding: 0 ();
    border: 0px solid black;
    border-radius: 10px;
    margin-top:0px;
    object-fit:cover;
`;

const Title = styled.h3`
    display:block;
    width: 100%
    background-color:white;
`;

const FlavorText = styled.p`
    display:block;
    width: 100%;
    background-color:white;
    margin-bottom:3px;
    margin-top: 0;
`;



function RecipeCard ({recipe}) { 
    //WILL RETURN SEMANTIC UI CARDS
    const history = useHistory();
    const {name, image, time, category} = recipe;
    function handleCardClick(){
        history.push(`/recipe/${recipe.id}`)
    }
    return(<Card onClick={handleCardClick} className='RecipeCard'>
        <Image src={image} alt={name}></Image>
        <Title>{name}</Title>
        <FlavorText>{category} | {time}</FlavorText>
    </Card>)
}

export default RecipeCard;