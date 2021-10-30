import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import RecipePage from './RecipePage';
import NewRecipe from './NewRecipe';

/* COMPONENT STRUCTURE
-App
  -Header
  -Home
    -RecipeFilter
    -RecipeList
      -RecipeCard (1 per recipe)
  -RecipePage
    -(may not need any custom components)
  -NewRecipe
    -NewIngredient
    -NewStep
*/

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/recipes')
    .then(r => r.json())
    .then(resp => setRecipes(resp))
  }, [])

  function handleRecipeSubmit(recipeObj){
    setRecipes([...recipes, recipeObj])
  }
  
  return(
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home recipes={recipes} />
        </Route>
        <Route exact path='/recipe/new'>
          <NewRecipe onRecipeSubmit={handleRecipeSubmit}/>
        </Route>
        <Route path='/recipe/:recipeId'>
          <RecipePage recipes={recipes}/>
        </Route>
      </Switch>
    </div>
  )
  
}

export default App;
