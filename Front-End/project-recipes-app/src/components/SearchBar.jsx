import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

export default function SearchBar({ url }) {
  const [filter, setFilter] = useState({
    searchText: '',
    filter: 'ingredient',
  });
  const { filterMealsRecipes, filterCocktailsRecipes } = useContext(Context);
  const magicNumber = 24;

  const handleChange = ({ name, value }) => {
    if (name !== 'searchText') {
      setFilter({ [name]: value, searchText: '' });
    } else {
      setFilter({ ...filter, [name]: value });
    }
  };

  const firstLetterFilter = () => {
    const number = 24;
    if (filter.filter === 'firstLetter') {
      return 1;
    }
    return number;
  };

  const filterByUrl = (i) => {
    if (url === '/foods') {
      filterMealsRecipes(i);
    }
    if (url === '/drinks') {
      filterCocktailsRecipes(i);
    }
  };

  const alertFilter = () => {
    const alert = 'Your search must have only 1 (one) character';
    global.alert(alert);
    return magicNumber;
  };

  return (
    <main>
      <input
        type="text"
        data-testid="search-input"
        name="searchText"
        value={ filter.searchText }
        maxLength={ firstLetterFilter() }
        onChange={ ({ target }) => handleChange(target) }
      />
      <label htmlFor="searchBar">
        Search For:
        <label htmlFor="ingredient">
          <input
            data-testid="ingredient-search-radio"
            id="ingredient"
            type="radio"
            name="filter"
            value="ingredient"
            onChange={ ({ target }) => handleChange(target) }
          />
          Ingredient
        </label>
        <label htmlFor="name">
          <input
            data-testid="name-search-radio"
            id="name"
            type="radio"
            name="filter"
            value="name"
            onChange={ ({ target }) => handleChange(target) }
          />
          Name
        </label>
        <label htmlFor="firstLetter">
          <input
            data-testid="first-letter-search-radio"
            id="firstLetter"
            type="radio"
            name="filter"
            value="firstLetter"
            onChange={ ({ target }) => handleChange(target) }
            onClick={ () => alertFilter() }
          />
          First Letter
        </label>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={
            () => filterByUrl(filter)
          }
        >
          Search
        </button>
      </label>
    </main>
  );
}

SearchBar.propTypes = {
  url: PropTypes.string.isRequired,
};
