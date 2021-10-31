import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import NewIngredient from './NewIngredient';
import NewStep from './NewStep';
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

    &:hover{
        cursor: pointer;
    }
`;

const Page = styled.div`
    text-align:center;
    background-color:lightGray;
    width: 95%;
    margin: 10px auto;
    border: 2px solid black;
    border-radius: 15px;
`;

const InputField = styled.input`
    height: 24px;
    width: 45%;
    margin-top: 3px;
    margin-bottom: 3px;
    text-align:center;
    font-size: 17px;
`;

const InputSelect = styled.select`
    height: 29px;
    width: 46%;
    margin-top: 3px;
    margin-bottom: 3px;
    text-align: center;
    font-size: 17px;

    &:hover{
        cursor: pointer;
    }
`;

const AddButton = styled.button`
    height: 29px;
    width: 18%;
    font-size: 17px;

    &:hover{
        cursor: pointer;
    }
`;

const SubmitButton = styled.button`
    height: 35px;
    width: 20%;
    margin-left: 40%;
    margin-right: 40%;
    font-size: 19px;

    &:hover{
        cursor: pointer;
    }
`;


function NewRecipe ({onRecipeSubmit}) {
    const history = useHistory()
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')
    const [category, setCategory] = useState('Category')
    const [ingredients, setIngredients] = useState([
        {id:1,
        value:''},

    ])
    const [steps, setSteps] = useState([
        {id:1,
        value:''},

    ])

    function handleNewIngredientClick(e){
        e.preventDefault()
        setIngredients([
            ...ingredients,
            {id:ingredients.at(-1).id + 1,
            value:''}
        ])
    }

    function handleNewStepClick(e){
        e.preventDefault()
        setSteps([
            ...steps,
            {id:steps.at(-1).id + 1,
            value:''}
        ])
    }

    function handleIngredientChange(name, value){
        const updatedIngredients = ingredients.map(ingredient =>{
            if (ingredient.id === parseInt(name)){
                return({
                    ...ingredient,
                    value: value
                });
            }else{
                return ingredient;
            }
        })
        setIngredients(updatedIngredients)
    }

    function handleStepChange(name, value){
        const updatedSteps = steps.map(step => {
            if (step.id === parseInt(name)){
                return({
                    ...step,
                    value:value
                });
            }else{
                return step;
            }
        })
        setSteps(updatedSteps)
    }

    function handleFormSubmit(e){
        e.preventDefault()
        const configObj={
            method: 'POST',
            headers :{
                'Content-Type': 'application/json',
                'Recieve': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                image: image,
                time: time,
                category: category,
                ingredients: ingredients.map(ingredient => ingredient.value),
                steps: steps.map(step => step.value)
            })
        }
        fetch('http://localhost:4000/recipes', configObj)
        .then(r => r.json())
        .then(newRecipe => {
            onRecipeSubmit(newRecipe)
            history.push(`/recipe/${newRecipe.id}`)
        })
    }

    return(<>
        <Bar>    
            <EscapeButton onClick={() => history.push('/')}>{'< Back to Home'}</EscapeButton><br/>
        </Bar>
        <Page className='NewRecipe'>
            <form>
                <InputField 
                    type='text' 
                    name='recipeName' 
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                ></InputField><br/>
                <InputField
                    type='text'
                    name='imageUrl'
                    placeholder='Image URL'
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                ></InputField><br/>
                <InputField 
                    type='number' 
                    name='recipeTime' 
                    placeholder='Cook Time'
                    value={time === '' ? '' : time}
                    onChange={(e) => setTime(parseInt(e.target.value))}
                ></InputField><br/>
                <InputSelect name='category' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option name='Category' value='Category'>Category...</option>
                    <option name='Dinner' value='Dinner'>Dinner</option>
                    <option name='Dessert' value='Dessert'>Dessert</option>
                    <option name='Snack' value='Snack'>Snack</option>
                </InputSelect><br/>
                {ingredients.map(ingredient => {
                    return(<NewIngredient key={ingredient.id} ingredient={ingredient} onIngredientChange={handleIngredientChange} />)
                })}
                <AddButton 
                    onClick={handleNewIngredientClick}
                >New Ingredient</AddButton><br/>
                {steps.map((step) => {
                    return(<NewStep  key={step.id} step={step} onStepChange={handleStepChange}/>)
                })}
                <AddButton
                    onClick={handleNewStepClick}
                >New Step</AddButton><br/>
            </form>
        </Page>
        <SubmitButton type='submit' onClick={handleFormSubmit}>Submit</SubmitButton>
    </>)
}

export default NewRecipe;