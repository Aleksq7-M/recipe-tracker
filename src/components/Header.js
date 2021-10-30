import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #5a0f08;
    font-size: calc(10px + 2vmin);
    color: white;
    margin-top:0;
`;
const Title = styled.h2`
    margin-left:5px;
    margin-top:0;
`;

const Tagline = styled.em`
    margin-left 10px;
    margin-bottom 5px;
    margin-top 0px;
`;

function Header () {
    return(<Container className='Header'>
        <header>
            <Title>RecipEasy</Title>
            <Tagline><small>The only recipe tracking app!</small></Tagline>
        </header>
    </Container>)
}

export default Header;