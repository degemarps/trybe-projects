import React, { useState, useContext, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import RecipesCard from './RecipesCard';
import Context from '../context/Context';

export default function CocktailsList() {
  const [showCocktailsRecipes, setShowCocktailsRecipes] = useState(false);
  const { cocktailsRecipes } = useContext(Context);
  const history = useHistory();
  const verifyInitialMount = useRef(true);

  useEffect(() => {
    if (verifyInitialMount.current) {
      verifyInitialMount.current = false;
    } else {
      setShowCocktailsRecipes(true);
    }
  }, [cocktailsRecipes]);

  const renderCards = () => {
    if (cocktailsRecipes && cocktailsRecipes.length === 1) {
      return history.push(`/drinks/${cocktailsRecipes[0].idDrink}`);
    }
    if (cocktailsRecipes && cocktailsRecipes.length) {
      const magicNumber = 12;
      return cocktailsRecipes.map((item, index) => {
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
      { showCocktailsRecipes ? renderCards() : <h1>404 not found</h1>}
    </Container>
  );
}
