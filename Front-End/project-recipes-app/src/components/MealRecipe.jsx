/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Context from '../context/Context';
import '../style/recipeStyle.css';
import FavoriteButton from './Details/FavoriteButton';
import ShareButton from './Details/ShareButton';
import StartRecipeButton from './Details/StartRecipeButton';

export default function MealRecipe({ recipe, url }) {
  const { recomendationDrinksApi, cocktailsRecipes } = useContext(Context);

  useEffect(() => {
    recomendationDrinksApi();
  }, []);

  let ingredients = Object.keys(recipe).map((key) => [key, recipe[key]]);
  ingredients = ingredients.filter((item) => item[0].includes('strIngredient')
    && item[1] !== '');

  let measures = Object.keys(recipe).map((key) => [key, recipe[key]]);
  measures = measures.filter((item) => item[0].includes('strMeasure')
    && item[1] !== ' ');

  const ingredientsAndMeasure = ingredients
    .map((item, index) => [item, measures[index]]);
  // console.log(ingredientsAndMeasure);

  let embedId = recipe.strYoutube.split('/')[3];
  embedId = embedId.split('=');

  // console.log(cocktailsRecipes);
  const limitRecomendation = 6;
  const recomendations = cocktailsRecipes.slice(0, limitRecomendation);

  return (
    <section>
      <h1 data-testid="recipe-title">
        { recipe.strMeal }
      </h1>
      <div>

        <img
          data-testid="recipe-photo"
          alt="recipe-img"
          src={ recipe.strMealThumb }
          width="100px"
        />

        <ShareButton url={ url } />

        <FavoriteButton recipe={ recipe } />

        <span data-testid="recipe-category">{ recipe.strCategory }</span>
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
          data-testid="video"
          width="853"
          height="480"
          src={ `https://www.youtube.com/embed/${embedId[1]}` }
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
              key={ item.idDrink }
            >
              <img
                data-testid={ `${index}-recomendation-card` }
                src={ item.strDrinkThumb }
                alt={ `${item.strDrink}-img` }
              />
              <Carousel.Caption>
                <h5 data-testid={ `${index}-recomendation-title` }>{ item.strDrink }</h5>
                <p>{item.strAlcoholic}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )) }
        </Carousel>
      </div>
      <StartRecipeButton id={ recipe.idMeal } />
    </section>
  );
}

MealRecipe.propTypes = {
  recipe: PropTypes.shape().isRequired,
  url: PropTypes.string.isRequired,
};
