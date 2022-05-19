/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Context from '../../context/Context';

let recomendations = [];

export default function Recommendation({ type }) {
  const { recomendationMealsApi,
    mealsRecipes,
    recomendationDrinksApi,
    cocktailsRecipes } = useContext(Context);

  const limitRecomendation = 6;

  if (type === 'foods') {
    recomendations = cocktailsRecipes.slice(0, limitRecomendation);
  }
  if (type === 'drinks') {
    recomendations = mealsRecipes.slice(0, limitRecomendation);
  }

  useEffect(() => {
    recomendationMealsApi();
    recomendationDrinksApi();
  }, []);

  return (
    <Container>
      <Carousel>
        { recomendations.map((item, index) => (
          <Carousel.Item
            key={ item.idMeal || item.idDrink }
          >
            <img
              data-testid={ `${index}-recomendation-card` }
              src={ item.strMealThumb || item.strDrinkThumb }
              alt={ `${item.strMeal}-img` || `${item.strDrink}-img` }
            />
            <Carousel.Caption>
              <h5 data-testid={ `${index}-recomendation-title` }>
                { item.strMeal || item.strDrink }
              </h5>
              <h6>{ item.strCategory }</h6>
              <h6>{ item.strArea }</h6>
            </Carousel.Caption>
          </Carousel.Item>
        )) }
      </Carousel>
    </Container>
  );
}

Recommendation.propTypes = {
  recommendation: PropTypes.array,
}.isRequired;
