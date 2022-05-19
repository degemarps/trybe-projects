/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { ButtonToolbar, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import CategoriesButton from './CategoriesButton';

export default function CategoriesFilter({ type }) {
  const [categories, setCategories] = useState([]);
  const {
    requestMealAllCategories,
    mealsCategories,
    requestDrinksAllCategories,
    drinksCategories,
  } = useContext(Context);

  const checkType = async () => {
    if (type === 'meals') {
      await requestMealAllCategories();
    }
    if (type === 'drinks') {
      await requestDrinksAllCategories();
    }
  };

  useEffect(() => {
    checkType();
  }, []);

  useEffect(() => {
    setCategories([...mealsCategories]);
  }, [mealsCategories]);

  useEffect(() => {
    setCategories([...drinksCategories]);
  }, [drinksCategories]);

  return (
    <Container>
      <ButtonToolbar bsPrefix="categories-list">
        <CategoriesButton
          text="All"
        />
        { categories.map((category, index) => {
          const magicNumber = 5;
          if (index < magicNumber) {
            return (
              <CategoriesButton
                type={ type }
                key={ index }
                text={ category.strCategory }
              />);
          }
          return null;
        }) }
      </ButtonToolbar>
    </Container>
  );
}
CategoriesFilter.propTypes = {
  type: PropTypes.string,
}.isRequired;
