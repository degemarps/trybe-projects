/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import Thumb from '../components/Details/Thumb';
import Title from '../components/Details/Title';
import IngredientSteps from '../components/IngredientSteps';
import Instructions from '../components/Details/Instructions';
import useLocalStorage from '../context/localStorageHooks/useLocalStorage';
import localStorageAction from '../context/localStorageHooks/localStorageAction';

export default function InProgress({ location }) {
  const allDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [doneRecipes, setDoneRecipes] = useLocalStorage('doneRecipes', []);

  useEffect(() => {

  }, [doneRecipes]);

  const {
    actualRecipe,
    storeMealsActualRecipe,
    storeDrinksActualRecipe,
  } = useContext(Context);

  const { id,
    name,
    category,
    image,
    ingredients,
    instructions,
    alcoholicOrNot,
    nationality,
    tags,
    type } = actualRecipe;

  const [stepsCheck, setStepsCheck] = useState(true);
  const history = useHistory();

  const idApi = location.pathname.split('/')[2];
  const typeUrl = location.pathname.split('/')[1];
  const url = location.pathname;

  const checkboxProgress = (steps) => {
    const checkedBox = [];
    if (ingredients && steps) {
      for (let i = 0; i < ingredients.length; i += 1) {
        checkedBox.push(steps[i].checked);
      }
    }
    setStepsCheck(checkedBox.some((step) => step === false));
  };

  useEffect(() => {
    if (typeUrl === 'foods') {
      storeMealsActualRecipe(idApi);
    }
    if (typeUrl === 'drinks') {
      storeDrinksActualRecipe(idApi);
    }
    const recipeStorage = localStorage.getItem('favoriteRecipes');
    if (!recipeStorage) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
  }, []);

  const today = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const push = async () => {
    const recipe = {
      id,
      type,
      nationality,
      category,
      alcoholicOrNot,
      name,
      image,
      doneDate: today(),
      tags,
    };
    await setDoneRecipes(await localStorageAction(recipe, 'addOnce', allDoneRecipes));
    history.push('/done-recipes');
  };

  return (
    <Container>
      <Thumb title={ name } thumb={ image } />
      <Title
        actualRecipe={ actualRecipe }
        url={ url }
        id={ id }
        title={ name }
        subtitle={ !alcoholicOrNot ? category : alcoholicOrNot }
        type={ typeUrl }
      />
      <IngredientSteps
        ingredients={ ingredients }
        actualRecipe={ actualRecipe }
        checkboxProgress={ checkboxProgress }
        type={ typeUrl === 'foods' ? 'meals' : 'cocktails' }
      />
      <Instructions instructions={ instructions } />
      <Button
        data-testid="finish-recipe-btn"
        disabled={ stepsCheck }
        variant="warning"
        onClick={ push }
      >
        Finish Recipe
      </Button>
    </Container>
  );
}

InProgress.propTypes = {
  location: PropTypes.shape,
}.isRequired;

// id: idDrink,
// type: 'drink',
// nationality: '',
// category: strCategory,
// alcoholicOrNot: strAlcoholic,
// name: strDrink,
// image: strDrinkThumb,
