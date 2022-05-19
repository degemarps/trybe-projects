import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import {
  fetchMealRecomendation,
  fetchMealsApi,
  fetchMealsByCategory,
  fetchMealsCategories,
  fetchMealById,
  fetchMealsIngredientsList } from '../services/mealsApi';
import {
  fetchCocktailsApi,
  fetchDrinksRecomendation,
  fetchDrinksByCategories,
  fetchDrinksCategories,
  fetchDrinksById } from '../services/cocktailApi';

export default function Provider({ children }) {
  const [searchBar, setSearchBar] = useState(false);
  const [mealsRecipes, setMealsRecipes] = useState([]);
  const [mealsRecipesById, setMealsRecipesById] = useState([]);
  const [mealsIngredients, setMealsIngredients] = useState([]);
  const [drinksRecipesById, setDrinksRecipesById] = useState([]);
  const [cocktailsRecipes, setCockailsRecipes] = useState([]);
  const [mealsCategories, setMealsCategories] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);
  const [selectedCategory, setSelectCategory] = useState('All');
  const [actualRecipe, setActualRecipe] = useState({});
  const [actualType, setActualType] = useState('false');

  const handleSearchBar = () => {
    setSearchBar(!searchBar);
  };

  const filterMealsRecipes = async (filter) => {
    const responseMealsApi = await fetchMealsApi(filter);
    setSelectCategory('All');
    setMealsRecipes(responseMealsApi);
  };

  const filterCocktailsRecipes = async (filter) => {
    const responseCocktailsApi = await fetchCocktailsApi(filter);
    setSelectCategory('All');
    setCockailsRecipes(responseCocktailsApi);
  };

  const recomendationMealsApi = async () => {
    const reponseMealsApi = await fetchMealRecomendation();
    setMealsRecipes(reponseMealsApi);
  };

  const recomendationDrinksApi = async () => {
    const responseCocktailsApi = await fetchDrinksRecomendation();
    setCockailsRecipes(responseCocktailsApi);
  };

  const requestMealAllIngredients = async () => {
    const responseMealAllIngredients = await fetchMealsIngredientsList();
    setMealsIngredients(responseMealAllIngredients);
  };

  const requestMealAllCategories = async () => {
    const responseAllMealsCategories = await fetchMealsCategories();
    setMealsCategories(responseAllMealsCategories);
  };

  const requestDrinksAllCategories = async () => {
    const responseAllDrinksCategories = await fetchDrinksCategories();
    setDrinksCategories(responseAllDrinksCategories);
  };

  const requestMealCategories = async () => {
    const responseMealsCategory = await fetchMealsByCategory(selectedCategory);
    setMealsRecipes(responseMealsCategory);
  };

  const requestDrinkCategories = async () => {
    const responseDrinksCategory = await fetchDrinksByCategories(selectedCategory);
    setCockailsRecipes(responseDrinksCategory);
  };

  const requestMealRecipesById = async (id) => {
    const responseMealsApiById = await fetchMealById(id);
    setMealsRecipesById(responseMealsApiById);
  };

  const requestDrinksRecipesById = async (id) => {
    const responseDrinksApiById = await fetchDrinksById(id);
    setDrinksRecipesById(responseDrinksApiById);
  };

  const filterCategory = async (type) => {
    if (selectedCategory === 'All') {
      if (type === 'meals') {
        recomendationMealsApi();
      }
      if (type === 'drinks') {
        recomendationDrinksApi();
      }
    } else {
      if (type === 'meals') {
        requestMealCategories();
      }
      if (type === 'drinks') {
        requestDrinkCategories();
      }
    }
  };

  const getIgredients = (recipe) => {
    const ingredients = [];
    const magicNumber20 = 20;
    for (let i = 1; i < magicNumber20; i += 1) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push({
          ingredient: recipe[`strIngredient${i}`],
          measure: recipe[`strMeasure${i}`],
        });
      }
    }
    return ingredients;
  };

  const generateTagsArray = (strTags) => strTags && strTags.split(',');

  const generateActualRecipeMeals = (mealById) => {
    const {
      idMeal, strMeal, strMealThumb, strArea,
      strCategory, strYoutube, strInstructions, strTags,
    } = mealById[0];
    const meal = {
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
      video: strYoutube,
      ingredients: getIgredients(mealById[0]),
      instructions: strInstructions,
      tags: generateTagsArray(strTags),
    };
    setActualType('meals');
    setActualRecipe(meal);
  };
  const generateActualRecipeDrinks = (drinkById) => {
    const {
      idDrink, strDrink, strDrinkThumb, strCategory,
      strAlcoholic, strYoutube, strInstructions, strTags,
    } = drinkById[0];
    const drink = {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
      video: strYoutube,
      ingredients: getIgredients(drinkById[0]),
      instructions: strInstructions,
      tags: generateTagsArray(strTags),
    };
    setActualType('cocktails');
    setActualRecipe(drink);
  };

  const storeMealsActualRecipe = async (id) => {
    const mealById = await fetchMealById(id);
    generateActualRecipeMeals(mealById);
  };
  const storeDrinksActualRecipe = async (id) => {
    const drinkById = await fetchDrinksById(id);
    generateActualRecipeDrinks(drinkById);
  };

  const context = {
    searchBar,
    handleSearchBar,
    filterMealsRecipes,
    filterCocktailsRecipes,
    recomendationMealsApi,
    recomendationDrinksApi,
    mealsRecipes,
    mealsRecipesById,
    drinksRecipesById,
    cocktailsRecipes,
    requestMealCategories,
    mealsCategories,
    requestDrinkCategories,
    drinksCategories,
    setSelectCategory,
    selectedCategory,
    filterCategory,
    requestMealAllCategories,
    requestDrinksAllCategories,
    requestMealRecipesById,
    requestDrinksRecipesById,
    storeMealsActualRecipe,
    storeDrinksActualRecipe,
    setActualRecipe,
    actualRecipe,
    actualType,
    setActualType,
    mealsIngredients,
    setMealsIngredients,
    requestMealAllIngredients,
  };
  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
