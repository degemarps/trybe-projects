import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import DoneRecipeCard from '../components/DoneRecipeCard';
import Header from '../components/Header';

export default function ReceitasFeitas() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [updateCards, setUpdateCards] = useState(false);

  return (
    <Container>
      <Header title="Done Recipes" />
      {
        doneRecipes && doneRecipes.map((recipe, index) => (
          <DoneRecipeCard
            updateCards={ updateCards }
            setUpdateCards={ setUpdateCards }
            key={ recipe.id }
            index={ index }
            recipe={ recipe }
            page="done"
          />
        ))
      }
    </Container>
  );
}
