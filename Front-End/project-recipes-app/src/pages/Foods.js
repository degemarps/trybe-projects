/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import MealList from '../components/MealsList';
import CategoriesFilter from '../components/CategoriesFilter';

export default function Foods({ match: { url } }) {
  const { searchBar, setActualType } = useContext(Context);

  useEffect(() => {
    setActualType('drinks');
  }, []);

  return (
    <div>
      <Header title="Foods" searchIcon />
      { searchBar ? <SearchBar url={ url } /> : null}
      <CategoriesFilter type="meals" />
      <MealList />
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  match: PropTypes.shape().isRequired,
};
