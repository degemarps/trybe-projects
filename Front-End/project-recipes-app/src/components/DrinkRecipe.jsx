/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Context from '../context/Context';
import '../style/recipeStyle.css';
import FavoriteButton from './Details/FavoriteButton';
import ShareButton from './Details/ShareButton';
import StartRecipeButton from './Details/StartRecipeButton';

export default function DrinkRecipe({ recipe, url }) {
  const { recomendationMealsApi, mealsRecipes, setActualType } = useContext(Context);

  useEffect(() => {
    recomendationMealsApi();
    setActualType('foods');
  }, []);

  let ingredients = Object.keys(recipe).map((key) => [key, recipe[key]]);
  ingredients = ingredients.filter((item) => item[0].includes('strIngredient')
    && item[1] !== null);

  let measures = Object.keys(recipe).map((key) => [key, recipe[key]]);
  measures = measures.filter((item) => item[0].includes('strMeasure')
    && item[1] !== ' ');

  const ingredientsAndMeasure = ingredients
    .map((item, index) => [item, measures[index]]);
  const limitRecomendation = 6;
  const recomendations = mealsRecipes.slice(0, limitRecomendation);

  return (
    <section>
      <h1 data-testid="recipe-title">
        { recipe.strDrink }
      </h1>
      <div>
        <img
          data-testid="recipe-photo"
          alt="recipe-img"
          src={ recipe.strDrinkThumb }
          width="100px"
        />

        <ShareButton url={ url } />

        <FavoriteButton recipe={ recipe } />

        <span
          data-testid="recipe-category"
        >
          { `${recipe.strCategory} (${recipe.strAlcoholic})` }
        </span>
        <ul>
          { ingredientsAndMeasure.map((item, index) => (
            <li
              key={ item[0][1] }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { `${item[0][1]} - ${item[1][1]}` }
            </li>)) }
        </ul>
        <p data-testid="instructions">{ recipe.strInstructions }</p>
        <iframe
          width="853"
          height="480"
          src={ recipe.strVideo }
          frameBorder="0"
          allow="accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture"
          allowFullScreen
          title="video youtube"
        />
        <Carousel>
          { recomendations.map((item, index) => (
            <Carousel.Item
              key={ item.idMeal }
            >
              <img
                data-testid={ `${index}-recomendation-card` }
                src={ item.strMealThumb }
                alt={ `${item.strMeal}-img` }
              />
              <Carousel.Caption>
                <h5 data-testid={ `${index}-recomendation-title` }>{ item.strMeal }</h5>
                <h6>{ item.strCategory }</h6>
                <h6>{ item.strArea }</h6>
              </Carousel.Caption>
            </Carousel.Item>
          )) }
        </Carousel>
      </div>
      <StartRecipeButton />
    </section>
  );
}

DrinkRecipe.propTypes = {
  recipe: PropTypes.shape().isRequired,
  url: PropTypes.string.isRequired,
};
