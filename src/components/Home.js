import React, {useState} from 'react';
import RecipeFilter from './RecipeFilter';
import RecipeList from './RecipeList';

function Home ({recipes}) {
    const [filterState, setFilterState] = useState({
        search:'',
        select:'All'
    })
    const {search, select} = filterState;

    const filteredRecipes = 
        recipes.filter(recipe => {
            return (search === '' ? true : recipe.name.toLowerCase().includes(search.toLowerCase()))
        })
        .filter(recipe => select === 'All' ? true : recipe.category === select)

    function handleFilterChange(event){
        const {name, value} = event.target;
        setFilterState({
            ...filterState,
            [name]: value
        })
    }
    return(<div className='Home'>
        <RecipeFilter filterState={filterState} onFilterChange={handleFilterChange}/>
        <RecipeList recipes={filteredRecipes}/>
    </div>)
}

export default Home;