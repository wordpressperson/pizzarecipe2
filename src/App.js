import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const APP_ID="5182d64c";
  const APP_KEY="b644ea5daae2b6135276d7b6f96bd159";
 // const samplequery=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
//      <h1 onClick={() => setCounter(counter+1)}>{counter}</h1> this was after the form tag
  //const [counter, setCounter]=useState(1);

const [recipes, setRecipes]=useState([]);
const [search, setSearch]=useState("");
const [query, setQuery]=useState('chicken');

  useEffect(()=>{
    getRecipe();
  //console.log("Effect has been run");
  //}, [search]);
  }, [query]);

  const getRecipe = async()=>{
    const response=await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data=await response.json();
    //console.log(data.hits)
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch (e.target.value);
    //console.log(search);
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=> (
        <Recipe 
        key={recipe.index} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
