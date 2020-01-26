import React from 'react';
import style from './recipe.module.css'

const Recipe =(props) => {
    return (
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <img src={props.image} alt=""/>
            <p>{props.ingredients.map(ingredient => (
                <ol>{ingredient.text}</ol>
            ))}</p>
            <p>{props.calories}</p>
        </div>
    )
}

export default Recipe;