import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import DoneRecipeCard from '../components/DoneRecipeCard';
import FavoriteButton from '../components/Details/FavoriteButton';

export default function FavoriteRecipes() {
  const { searchBar } = useContext(Context);
  const [favoriteRecipesList, setFavoriteRecipesList] = useState([]);
  const [updateCards, setUpdateCards] = useState(false);

  useEffect(() => {
    const recipeStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavoriteRecipesList(recipeStorage);
  }, []);

  // const today = () => {
  //   const date = new Date();
  //   const day = String(date.getDate()).padStart(2, '0');
  //   const month = String(date.getMonth() + 1).padStart(2, '0');
  //   const year = date.getFullYear();

  //   return `${day}/${month}/${year}`;
  // };

  return (
    <div>
      <Header title="Favorite Recipes" />
      { searchBar ? <SearchBar /> : null }
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drink</button>
      { favoriteRecipesList.length > 0 ? favoriteRecipesList.map((recipe, index) => (
        <div key={ index }>
          <DoneRecipeCard
            updateCards={ updateCards }
            setUpdateCards={ setUpdateCards }
            index={ index }
            recipe={ recipe }
            page="done"
          />

          <FavoriteButton
            recipe={ recipe }
            index={ index }
          />

        </div>
      )) : null }
    </div>
  );
}

// Foods.propTypes = {
//   match: PropTypes.shape().isRequired,
// };
