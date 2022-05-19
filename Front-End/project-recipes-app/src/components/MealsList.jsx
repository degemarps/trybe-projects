import React, { useState, useContext, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import RecipesCard from './RecipesCard';
import Context from '../context/Context';

export default function MealList() {
  const [showMealsRecipes, setShowMealRecipes] = useState(false);
  const { mealsRecipes, selectedCategory } = useContext(Context);
  const history = useHistory();
  const verifyInitialMount = useRef(true);

  useEffect(() => {
    if (verifyInitialMount.current) {
      verifyInitialMount.current = false;
    } else {
      setShowMealRecipes(true);
    }
  }, [mealsRecipes]);

  const renderCards = () => {
    if (selectedCategory === 'All' && mealsRecipes && mealsRecipes.length === 1) {
      return history.push(`/foods/${mealsRecipes[0].idMeal}`);
    }
    if (mealsRecipes && mealsRecipes.length) {
      const magicNumber = 12;
      return mealsRecipes.map((item, index) => {
        if (index < magicNumber) {
          return (<RecipesCard key={ index } index={ index } item={ item } />);
        }
        return null;
      });
    }
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
    return null;
  };
  return (
    <Container>
      { showMealsRecipes ? renderCards() : <h1>404 not found</h1>}
    </Container>
  );
}
