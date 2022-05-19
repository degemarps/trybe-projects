/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CocktailsList from '../components/CocktailsList';
import CategoriesFilter from '../components/CategoriesFilter';

export default function Drinks({ match: { url } }) {
  const { searchBar, setActualType } = useContext(Context);

  useEffect(() => {
    setActualType('foods');
  }, []);

  return (
    <div>
      <Header title="Drinks" searchIcon />
      { searchBar ? <SearchBar url={ url } /> : null}
      <CategoriesFilter type="drinks" />
      <CocktailsList />
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  match: PropTypes.shape().isRequired,
};
