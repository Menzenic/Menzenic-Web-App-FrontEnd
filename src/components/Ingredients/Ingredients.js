import React from "react";
import "./Ingredients.css";
import IngredientsData from "../../data/IngredientsData";

const Ingredients = () => {
    return (
        <div className="ingredients">
            <h1 className="title">Pure and Natural Ingredients</h1>
            <div className="ingredient-list">
                {IngredientsData.map((ingredient) => (
                    <div className="ingredient-item" key={ingredient.id}>
                        <img
                            src={ingredient.image}
                            alt={ingredient.title}
                            className="ingredient-image"
                        />
                        <h2 className="ingredient-name">{ingredient.title}</h2>
                        <p className="ingredient-description">
                            {ingredient.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ingredients;
