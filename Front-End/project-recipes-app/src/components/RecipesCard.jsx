import React, { useState, useEffect, useContext } from 'react';
import { Card } from 'react-bootstrap/';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';

export default function RecipesCard({ item, index }) {
  const [str, setStr] = useState('');
  const [thumb, setThumb] = useState('');
  const history = useHistory();
  const { setActualRecipe } = useContext(Context);
  const { idMeal, strMeal, strMealThumb, idDrink, strDrink, strDrinkThumb } = item;

  useEffect(() => {
    if (!strDrink && !strDrinkThumb) {
      setStr(strMeal);
      setThumb(strMealThumb);
    }
    if (!strMeal && !strMealThumb) {
      setStr(strDrink);
      setThumb(strDrinkThumb);
    }
  }, [str, thumb, strMeal, strMealThumb, strDrink, strDrinkThumb]);

  const pushToDetails = () => {
    if (idMeal) {
      setActualRecipe(idMeal);
      history.push(`/foods/${idMeal}`);
    }
    if (idDrink) {
      setActualRecipe(idDrink);
      history.push(`/drinks/${idDrink}`);
    }
  };

  return (
    <div>
      <Card
        data-testid={ `${index}-recipe-card` }
        border="dark"
        style={ { width: '18rem' } }
        onClick={ () => pushToDetails() }
      >
        <Card.Img
          data-testid={ `${index}-card-img` }
          variant="top"
          src={ thumb }
        />
        <Card.Body>
          <Card.Title data-testid={ `${index}-card-name` }>{ str }</Card.Title>
          {/* <Card.Text>
            {recipeInfo}
          </Card.Text> */}
        </Card.Body>
        {/* <ListGroup className="list-group-flush">
          <ListGroupItem>{ strCategory }</ListGroupItem>
          <ListGroupItem>{ strArea }</ListGroupItem>
          <ListGroupItem>{ strYoutube }</ListGroupItem>
        </ListGroup> */}
      </Card>
    </div>
  );
}

RecipesCard.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
};
