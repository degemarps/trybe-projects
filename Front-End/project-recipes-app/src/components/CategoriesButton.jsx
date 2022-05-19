/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap/';
import Context from '../context/Context';

export default function CategoriesButton(props) {
  const { setSelectCategory, selectedCategory, filterCategory } = useContext(Context);
  const { text, type } = props;

  const validateCategory = () => {
    console.log(text);
    if (selectedCategory === text) {
      setSelectCategory('All');
    }
    if (selectedCategory !== text) {
      setSelectCategory(text);
    }
  };

  useEffect(() => {
    filterCategory(type);
  }, [selectedCategory]);

  return (
    <Button
      onClick={ () => validateCategory() }
      data-testid={ `${text}-category-filter` }
    >
      { text }
    </Button>
  );
}

CategoriesButton.propTypes = {
  value: PropTypes.string,
}.isRequired;
