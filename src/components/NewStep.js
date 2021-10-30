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

function NewStep ({step, onStepChange}) {

    function handleChange(event){
        const {name, value} = event.target;
        onStepChange(name, value)
    }

    return(<div className='NewStep'>
        <InputField 
            type='text' 
            name={step.id} 
            placeholder={`Step ${step.id}`} 
            value={step.value}
            onChange={handleChange}
        ></InputField>
        <br/>
    </div>)
}

export default NewStep;