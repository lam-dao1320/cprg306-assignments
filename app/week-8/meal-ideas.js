'use client';
import { useState, useEffect } from 'react';

export default function MealIdea({ ingredient }) {

    const [meals, setMeals] = useState([]);
    const [selectMeal, setSelectMeal] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [measures, setMeasures] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (!response.ok) console.log(response.status);
            const data = await response.json();
            return data.meals;
        } catch (error) {
            console.log(error.message);
        }
    }

    async function loadMealIdeas(ingredient) {
        let mealArray = await fetchMealIdeas(ingredient);
        setMeals(mealArray);
    }

    async function loadMealIngredients(idMeal) {
        setSelectMeal("");
        setIngredients([]);
        setMeasures([]);
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            if (!response.ok) console.log(response.status);
            const data = await response.json();
            console.dir(data.meals[0])
            let ingredientObj = data.meals[0];
            let ingredientArray = [];
            let measureArray = [];
            for (let i = 1; i < 20; i++) {
                let ingredientStr = ingredientObj[`strIngredient${i}`];
                let measureStr = ingredientObj[`strMeasure${i}`];
                if (ingredientStr != null) if(ingredientStr.trim() != "") ingredientArray.push(ingredientStr);
                if (measureStr != null) if (measureStr.trim() != "") measureArray.push(measureStr);
            }
            setSelectMeal(ingredientObj["strMeal"]);
            setIngredients(ingredientArray);
            setMeasures(measureArray);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient] );

    return (
        <div>
            <header className='text-2xl'><b>Meal Ideas</b></header>
            { meals != null && meals.length > 0 ? (
                <div>
                    <p className=''>Here are some meal ideas using {ingredient.replace('_', ' ')}:</p>
                    <ul>
                        {meals.map((meal) => (
                            <li key={meal.idMeal}>
                                <div className='p-2 m-1 bg-slate-900 hover:bg-pink-800 cursor-pointer' onClick={() => loadMealIngredients(meal.idMeal)}>
                                    <p>{meal.strMeal}</p>
                                    { ingredients.length > 0 && selectMeal === meal.strMeal ? (
                                        <div className='text-xs text-gray-400'>
                                            <p className='ml-2'>Ingredients needed:</p>
                                            <ul className='ml-5'>
                                                {ingredients.map((ing, i) => (
                                                    <li key={i}>
                                                        {ing} {measures[i] ? `(${measures[i]})` : ''}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div> ) : null }
                                </div>
                            </li>
                        ))}
                    </ul>
                </div> ) : null }
            { meals == null && ingredient == null ? (<p>Select an item to see meal ideas</p>) : null }
            { meals == null && ingredient != null ? (<p>No meal ideas found for {ingredient.replace('_', ' ')}</p>) : null }
        </div>
    );
}