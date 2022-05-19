/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import Thumb from '../components/Details/Thumb';
import Title from '../components/Details/Title';
import Ingredients from '../components/Details/Ingredients';
import Instructions from '../components/Details/Instructions';
import Video from '../components/Details/Video';
import Recommendation from '../components/Details/Recomendation';

export default function Details({ location }) {
  const {
    actualRecipe,
    storeDrinksActualRecipe,
    storeMealsActualRecipe,
    actualType,
  } = useContext(Context);

  const { id,
    name,
    category,
    image,
    video,
    instructions,
    ingredients,
    alcoholicOrNot } = actualRecipe;

  const history = useHistory();
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));

  const type = location.pathname.split('/')[1];
  const idApi = location.pathname.split('/')[2];
  const url = location.pathname;

  useEffect(() => {
    if (type === 'foods') {
      storeMealsActualRecipe(idApi);
    } else {
      storeDrinksActualRecipe(idApi);
    }
    const recipeStorage = localStorage.getItem('favoriteRecipes');
    if (!recipeStorage) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    console.log(actualType);
  }, []);

  const buttonText = () => {
    if (
      inProgress && inProgress[actualType] && inProgress[actualType][actualRecipe.id]
    ) {
      return true;
    }
    return false;
  };

  const inProgressPushButton = () => {
    if (video) {
      history.push(`/foods/${id}/in-progress`);
    } else {
      history.push(`/drinks/${id}/in-progress`);
    }
  };

  return (
    (
      <Container>
        <Thumb title={ name } thumb={ image } />
        <Title
          actualRecipe={ actualRecipe }
          url={ url }
          id={ id }
          title={ name }
          subtitle={ !alcoholicOrNot ? category : alcoholicOrNot }
          type={ type }
        />
        <Ingredients ingredients={ ingredients } />
        <Instructions instructions={ instructions } />
        { video && <Video video={ video } />}
        <Recommendation type={ type } />
        <br />
        <div>
          <Button
            onClick={ () => inProgressPushButton() }
            data-testid="start-recipe-btn"
            className="fixed-bottom"
            variant="warning"
            block
          >
            {buttonText() ? 'Continue Recipe' : 'Start Recipe'}
          </Button>
        </div>
      </Container>
    )
  );
}

// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import Context from '../context/Context';
// import MealRecipe from '../components/MealRecipe';
// import DrinkRecipe from '../components/DrinkRecipe';
// // import shareIcon from '../images/shareIcon.svg';
// // import selectedFavorite from '../images/whiteHeartIcon.svg';
// // import nonSelectedFavorite from '../images/blackHeartIcon.svg';

// export default function Details({ match: { url } }) {
//   const {
//     mealsRecipesById,
//     drinksRecipesById,
//     requestMealRecipesById,
//     requestDrinksRecipesById,
//   } = useContext(Context);

//   const id = url.split('/')[2];
//   const type = url.split('/')[1];

//   useEffect(() => {
//     if (type === 'foods') {
//       requestMealRecipesById(id);
//     } else {
//       requestDrinksRecipesById(id);
//     }
//   }, []);

//   if (type === 'foods' && mealsRecipesById.length > 0) {
//     return <MealRecipe recipe={ mealsRecipesById[0] } url={ url } />;
//   }

//   if (type === 'drinks' && drinksRecipesById.length > 0) {
//     return <DrinkRecipe recipe={ drinksRecipesById[0] } url={ url } />;
//   }
//   return null;
// }

Details.propTypes = {
  location: PropTypes.shape().isRequired,
};
