import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import whiteHeart from '../../images/whiteHeartIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';

export default function FavoriteButton({ recipe, index }) {
  const [favorite, setFavorite] = useState(whiteHeart);
  const { id, type, nationality, category, alcoholicOrNot, name, image } = recipe;

  useEffect(() => {
    let existRecipe = false;
    const recipeStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (recipeStorage) {
      const recipeRecovered = recipeStorage.some((item) => item.id === id);
      existRecipe = recipeRecovered;
    }
    if (existRecipe) {
      setFavorite(blackHeart);
    }
  }, [id]);

  const favoriteBtn = () => {
    if (favorite === whiteHeart) {
      const obj = {
        id,
        type,
        nationality,
        category,
        alcoholicOrNot,
        name,
        image,
      };
      const recipeStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
      localStorage.setItem('favoriteRecipes', JSON.stringify([...recipeStorage, obj]));
      setFavorite(blackHeart);
    } else {
      setFavorite(whiteHeart);
      const recipeStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const newRecipesStorage = recipeStorage.filter((item) => item.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify([...newRecipesStorage]));
    }
  };

  return (
    <Button
      variant="outline-danger"
      type="button"
      data-testid="favorite-btn"
      onClick={ favoriteBtn }
      src={ favorite }
    >
      <img
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ favorite }
        alt="favorite-icon"
      />
    </Button>
  );
}

FavoriteButton.propTypes = {
  recipe: PropTypes.shape(),
}.isRequired;
