/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Context from '../../context/Context';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';
// import { ingredientsImages } from '../../services/mealsApi';

export default function ExploreFoodsByIngedients() {
  const magic12 = 12;
  const {
    mealsIngredients,
    // setMealsIngredients,
    requestMealAllIngredients,
    searchBar,
  } = useContext(Context);

  useEffect(() => {
    requestMealAllIngredients();
  }, []);

  const btnClick = async () => {
    console.log(mealsIngredients);
  };

  return (
    <div>
      <Header title="Explore Ingredients" />
      { searchBar ? <SearchBar /> : null}
      <button
        type="button"
        onClick={ btnClick }
      >
        Botao de testes
      </button>
      {mealsIngredients.map((ing, i) => {
        if (i < magic12) {
          return (
            <Card
              data-testid={ `${index}-ingredient-card` }
            >
              <Card.Img
                variant="top"
                data-testid={ `${index}-card-img` }
                src={ null }
              />
              <Card.Body>
                <Card.Title
                  data-testid={ `${index}-card-name` }
                >
                  {ing.strIngredient}
                </Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        } return null;
      })}
      <Footer />
    </div>
  );
}

// Foods.propTypes = {
//   match: PropTypes.shape().isRequired,
// };
