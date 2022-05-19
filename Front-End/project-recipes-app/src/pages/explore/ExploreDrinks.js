import React, { useContext } from 'react';
import { Button } from 'react-bootstrap/';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';

export default function ExploreDrinks() {
  const { searchBar } = useContext(Context);
  const history = useHistory();

  const exploreByIngredients = () => history.push('/explore/drinks/ingredients');

  return (
    <div>
      <Header title="Explore Drinks" />
      { searchBar ? <SearchBar /> : null}
      <h1>Explore by:</h1>
      <Button
        data-testid="explore-by-ingredient"
        href="/explore/drinks/ingredients"
        onClick={ exploreByIngredients }
      >
        By Ingredient

      </Button>
      <Button
        data-testid="explore-surprise"
        onClick={ async () => {
          const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
          const { drinks } = await request.json();
          const randomDrink = (drinks[0].idDrink);
          return history.push(`/drinks/${randomDrink}`);
        } }
      >
        Surprise me!
      </Button>
      <Footer />
    </div>
  );
}

// data-testid="explore-by-ingredient"
// data-testid="explore-by-nationality"
// data-testid="explore-surprise"

// Foods.propTypes = {
//   match: PropTypes.shape().isRequired,
// };
