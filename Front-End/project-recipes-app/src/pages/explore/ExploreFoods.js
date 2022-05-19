import React, { useContext } from 'react';
import { Button } from 'react-bootstrap/';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';

export default function ExploreFoods() {
  const { searchBar } = useContext(Context);
  const history = useHistory();

  const exploreByIngredients = () => history.push('/explore/foods/ingredients');
  const exploreByNationalities = () => history.push('/explore/foods/nationalities');

  return (
    <div>
      <Header title="Explore Foods" />
      { searchBar ? <SearchBar /> : null}
      <h1>Explore by:</h1>
      <Button
        data-testid="explore-by-ingredient"
        href="/explore/foods/ingredients"
        onClick={ exploreByIngredients }
      >
        By Ingredient

      </Button>
      <Button
        data-testid="explore-by-nationality"
        href="/explore/foods/nationalities"
        onClick={ exploreByNationalities }
      >
        By Nationality
      </Button>
      <Button
        data-testid="explore-surprise"
        onClick={ async () => {
          const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
          const { meals } = await request.json();
          const randomMeal = (meals[0].idMeal);
          return history.push(`/foods/${randomMeal}`);
        } }
      >
        Surprise me!

      </Button>
      <Footer />
    </div>
  );
}

// Foods.propTypes = {
//   match: PropTypes.shape().isRequired,
// };
