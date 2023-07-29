import React from "react";
import "./Ingredients.css";
import IngredientsData from "../../data/IngredientsData";
import { Footer } from "../../components";

const Ingredients = () => {
    return (
        <section>
            <div className="ingredients pt-28">
                <h1 className="title">Pure and Natural Ingredients</h1>
                <div className="ingredient-list mt-4">
                    {IngredientsData.map((ingredient) => (
                        <div
                            className="ingredient-item border w-80"
                            key={ingredient.id}
                        >
                            <img
                                src={ingredient.image}
                                alt={ingredient.title}
                                className="ingredient-image w-full h-56"
                            />
                            <h2 className="ingredient-name">
                                {ingredient.title}
                            </h2>
                            <p className="ingredient-description">
                                {ingredient.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Ingredients;
